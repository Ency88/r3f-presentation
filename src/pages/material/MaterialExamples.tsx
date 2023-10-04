import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import { Html } from "@react-three/drei";

const MaterialExamples: React.FC = () => {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    state.camera.position.z = 9;
    state.camera.position.y = 2;

    if (groupRef.current) {
      groupRef.current.rotation.x += Math.sin(delta) * 0.0025;
      groupRef.current.rotation.y += Math.cos(delta) * 0.0025;
    }
  });

  const materials = [
    {
      material: <meshBasicMaterial color={"yellow"} />,
      name: "Basic Material",
    },
    {
      material: <meshLambertMaterial color={"yellow"} />,
      name: "Lambert Material",
    },
    {
      material: <meshPhongMaterial color={"yellow"} shininess={100} />,
      name: "Phong Material",
    },
    {
      material: <meshStandardMaterial color={"yellow"} roughness={0.6} />,
      name: "Standard Material",
    },
    {
      material: <meshToonMaterial color={"yellow"} />,
      name: "Toon Material",
    },
    {
      material: <meshNormalMaterial />,
      name: "Normal Material",
    },
  ];

  const deg60inRad = 1.0471975511965976;

  return (
    <>
      <ambientLight />
      <directionalLight position={[1, 1, 1]} intensity={1} />
      <group ref={groupRef}>
        {materials.map((item, i) => (
          <group
            position-x={Math.sin(i * deg60inRad) * 5}
            position-z={Math.cos(i * deg60inRad) * 5}
            key={i}
          >
            <Html position-y={2}>{item.name}</Html>
            <mesh>
              <sphereGeometry />
              {item.material}
            </mesh>
          </group>
        ))}
      </group>
    </>
  );
};

export default MaterialExamples;
