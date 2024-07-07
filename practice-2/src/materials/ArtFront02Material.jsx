import { shaderMaterial } from "@react-three/drei";
import { Color } from "three";

export const ArtFront02Material = shaderMaterial(
  {
    uColor: new Color("pink"),
    uTime: 0,
  },
  /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,
  /* glsl */ `
  uniform vec3 uColor;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    // manual line draw
    // vec3 modColor = uColor;
    // if(vUv.x > 0.5){
    //   modColor = vec3(0.,0.,0.);
    // }

    // step
    //float pct = 1.0;
    // vec3 whiteColor = vec3(1.0);

    // // //pct = mix(0.0, 1.0, vUv.x);

    // // //vec3 finalColor = uColor * pct;
    // // vec3 finalColor = mix(whiteColor, uColor, vUv.y);

    // float pct = smoothstep(0.3, 0.7, vUv.y);

    // pct = max(pct, 0.3);
    // pct = min(pct, 0.7);
    // vec3 finalColor = mix(whiteColor, uColor, pct);


    // building stripes and grids

    // // create the sawtooth, fractional part of uv looped 8 times
    // // to center subtract half of stripe width... this isn't quite right though...
    // vec2 repeatVuv = fract(vUv * (8.0 - 0.125));


    // // stripe multipliers - as you move along x axis color multiplier steps between 0 and 1, 8 times at 0.75.
    // // similar for horizontal stripes, but we change step to get thicker lines horizontally 
    // float verticalStripes = step(0.75, repeatVuv.x);
    // float horizontalStripes = step(0.75, repeatVuv.y);

    // float finalMultiplier = verticalStripes + horizontalStripes; // add the multiplier values to get final multiplier


    // // optionally cap multiplier at one to prevent overlays
    // finalMultiplier = min(finalMultiplier, 1.0);

    // vec3 finalColor = uColor * finalMultiplier;
    // gl_FragColor = vec4(finalColor, 1.0);


    // replicate the rothco

    vec3 finalColor = uColor;
    gl_FragColor = vec4(finalColor, 1.0);
  }
  `
);
