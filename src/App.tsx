import "./App.css";
import AppRoutes from "./pages/routes/AppRoutes.tsx";

function App() {
  return (
    <div className="wrapper">
      <div className="canvas-container">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
