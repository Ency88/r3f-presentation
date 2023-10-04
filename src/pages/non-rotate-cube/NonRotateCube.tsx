import React from "react";

const NonRotateCube: React.FC = () => {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshNormalMaterial />
    </mesh>
  );
};

export default NonRotateCube;
