import React from "react";
import { useGLTF, Center } from "@react-three/drei";
import audmaxURL from "../assets/Audmax.glb";

export function Audmax(props) {
  const { scene } = useGLTF(audmaxURL);

  return (
    <Center>
      <primitive
        object={scene}
        scale={5}
        position={[0, 0, 0]}
        {...props}
      />
    </Center>
  );
}

useGLTF.preload(audmaxURL);