export const terrain_shader = (function () {
  console.log('COOK');
  const _VS_1 = `
precision highp float;

void main()
{
  gl_FragColor = vec4(1,1,0, 1.0);
}
`
  return {
    VS1: _VS_1
  }
})()

