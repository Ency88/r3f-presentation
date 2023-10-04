import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

const BasicCube: React.FC = () => {
  const cubeRef = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.85 * delta;
      cubeRef.current.rotation.y += 0.5 * delta;
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshNormalMaterial />
    </mesh>
  );
};

export default BasicCube;
