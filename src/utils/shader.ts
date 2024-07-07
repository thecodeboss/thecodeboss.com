import fragmentShaderSource from "@/glsl/main.frag";
import vertexShaderSource from "@/glsl/main.vert";

function createShader(gl: WebGLRenderingContext, type: GLenum, source: string) {
  const shader = gl.createShader(type);
  if (!shader) {
    return null;
  }
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
  if (!vertexShader || !fragmentShader) {
    return;
  }
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
