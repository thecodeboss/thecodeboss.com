// Vertex Shader
const vertexShaderSource = `
  attribute vec4 a_position;
  void main() {
    gl_Position = a_position;
  }
`;

// Fragment Shader
const fragmentShaderSource = `
  precision mediump float;

  uniform float iTime;
  uniform vec2 iResolution;

  // 2D Random noise function
  float random(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  // 2D Smooth noise function
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f*f*(3.0-2.0*f);
    float a = random(i + vec2(0.0, 0.0));
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  // Main rendering function
  void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;
    uv.x *= iResolution.x / iResolution.y;

    // Animation by moving the noise over time
    float n = noise(uv * 10.0 + vec2(iTime * 0.12, iTime * 0.12));

    // Create color based on noise value
    vec3 color = vec3(0.08) * (1.0 + n);

    fragColor = vec4(color, 1.0);
  }

  void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
  }
`;

function createShader(gl: WebGLRenderingContext, type: GLenum, source: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

function createProgram(
  gl: WebGLRenderingContext,
  vertexShader: WebGLShader,
  fragmentShader: WebGLShader
) {
  const program = gl.createProgram();
  if (!program) {
    return null;
  }
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  return program;
}

export function initBackgroundShader(canvas: HTMLCanvasElement): void {
  const gl =
    canvas.getContext("webgl") ??
    (canvas.getContext("experimental-webgl") as WebGLRenderingContext);

  if (!gl) {
    console.debug(
      "WebGL not supported, falling back to solid color background"
    );
    return;
  }

  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSource
  );
  const program = createProgram(gl, vertexShader, fragmentShader);
  if (!program) {
    return;
  }

  const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  const positions = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]);
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

  // Use OES_vertex_array_object extension for WebGL 1.0 compatibility
  const ext = gl.getExtension("OES_vertex_array_object");
  if (!ext) {
    console.error("OES_vertex_array_object not supported");
    return;
  }

  const vao = ext.createVertexArrayOES();
  ext.bindVertexArrayOES(vao);
  gl.enableVertexAttribArray(positionAttributeLocation);
  gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

  const iResolutionLocation = gl.getUniformLocation(program, "iResolution");
  const iTimeLocation = gl.getUniformLocation(program, "iTime");

  function resizeCanvasToDisplaySize(
    canvas: HTMLCanvasElement | OffscreenCanvas
  ): void {
    const displayWidth = canvas.width;
    const displayHeight = canvas.height;

    if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
      canvas.width = displayWidth;
      canvas.height = displayHeight;
    }
  }

  function render(time: number): void {
    time *= 0.001; // convert to seconds

    resizeCanvasToDisplaySize(gl.canvas);

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(program);

    gl.uniform2f(iResolutionLocation, gl.canvas.width, gl.canvas.height);
    gl.uniform1f(iTimeLocation, time);

    ext?.bindVertexArrayOES(vao);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
