import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PresentationProvider } from "./context/PresentationContext";
import Presentation from "./pages/presentation/Presentation.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <PresentationProvider>
        <Routes>
          <Route path="/" element={<Presentation />} />
        </Routes>
      </PresentationProvider>
    </Router>
  );
};

export default App;
