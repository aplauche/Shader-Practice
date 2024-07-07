import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";

import myShaderFragment from "./shaders/myshader.fragment.glsl";
import myShaderVertex from "./shaders/myshader.vertex.glsl";
import { Color } from "three";
import { useRef } from "react";
import { randFloat } from "three/src/math/MathUtils.js";

// Version without needing plugins imports
// const MyShaderMaterial = shaderMaterial(
//   {},
//   // glsl
//   void main() {
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//   }`,
//   // glsl
//   void main() {
//     gl_FragColor = vec4(0.0, 1, 0.0, 1.0);
//   }
//   `
// );

const MyShaderMaterial = shaderMaterial({
  uColor: new Color('pink'),
  uTime: 0
}, myShaderVertex, myShaderFragment);

// we use extend to make the object usable declaratively in R3F
extend({MyShaderMaterial})


export const ShaderPlane = ({ ...props }) => {

  const shader = useRef();

  useFrame(({clock}) => {
    shader.current.uTime = clock.getElapsedTime()
  })

  const widthSegments = 1
  const heightSegments = 1

  return (
    <mesh {...props}>
      <planeGeometry args={[1, 1, widthSegments, heightSegments]}>
        {/* <bufferAttribute 
          attach={"attributes-aSpeed"}
          count={1 * (widthSegments + 1) * (heightSegments + 1)}
          array={new Float32Array(1 * (widthSegments + 1) * (heightSegments + 1)).map(() => randFloat(1,5))}
          itemSize={1}
        /> */}
        <bufferAttribute 
          attach={"attributes-aColor"}
          count={3 * ((widthSegments + 1) * (heightSegments + 1))}
          array={new Float32Array(3 * (widthSegments + 1) * (heightSegments + 1)).map(() => randFloat(0,1))}
          itemSize={3}
        />
      </planeGeometry>
      {/* use lowercase version when using with extend */}
      <myShaderMaterial ref={shader} />
    </mesh>
  );
};
