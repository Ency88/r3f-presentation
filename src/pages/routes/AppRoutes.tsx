import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "../../components/Intro.tsx";
import { Canvas } from "@react-three/fiber";
import BasicCube from "../basic-cube/BasicCube.tsx";
import PseudoGeometryCube from "../pseudo-geometry-cube/pseudo-geometry-cube.tsx";
import React from "react";
import MaterialExamples from "../material/MaterialExamples.tsx";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route
          path="/basic-cube"
          element={
            <Canvas>
              <BasicCube />
            </Canvas>
          }
        />
        <Route
          path="/pseudo-geometry-cube"
          element={
            <Canvas>
              <PseudoGeometryCube />
            </Canvas>
          }
        />
        <Route
          path="/material-examples"
          element={
            <Canvas>
              <MaterialExamples />
            </Canvas>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
