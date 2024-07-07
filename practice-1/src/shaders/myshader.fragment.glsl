  uniform vec3 uColor;
  varying vec3 vColor;
  
  float add(float a, float b){
    return a + b;
  }

  
  void main() {
    gl_FragColor = vec4(vColor, 1.0);
  }