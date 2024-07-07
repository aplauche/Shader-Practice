  
  uniform float uTime;
  attribute float aSpeed;
  attribute vec3 aColor;
  varying vec3 vColor;

  void main() {

    vColor = aColor;

    vec3 pos = position;
    if(pos.x > 0.){
      pos.y += sin(uTime) * 0.2;
    } else {
      pos.y += cos(uTime) * 0.2;
    }


    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }