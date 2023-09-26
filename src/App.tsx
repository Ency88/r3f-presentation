import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PresentationProvider } from "./context/PresentationContext";
import Presentation from "./components/Presentation";
import Page from "./components/Page";

const App: React.FC = () => {
  return (
    <Router>
      <PresentationProvider>
        <Routes>
          <Route path="/" element={<Presentation />} />
          <Route path="/page/:pageNumber" element={<Page />} />
        </Routes>
      </PresentationProvider>
    </Router>
  );
};

export default App;
