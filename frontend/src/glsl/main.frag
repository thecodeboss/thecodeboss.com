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
