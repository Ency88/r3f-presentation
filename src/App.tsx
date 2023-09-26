import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { QrCode } from "./pages/demo/Qr.tsx";

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <OrbitControls />
        <QrCode />
        <Environment preset={"city"} />
      </Canvas>
    </div>
  );
}

export default App;
