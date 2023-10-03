import React from "react";
import { Link } from "react-router-dom";

const Intro: React.FC = () => {
  return (
    <div>
      <h2>This is intro</h2>
      <div>
        <Link to={`/basic-cube`}>Basic Cube</Link>
      </div>
      <div>
        <Link to={`/pseudo-geometry-cube`}>Pseudo Geometry Cube</Link>
      </div>
      <div>
        <Link to={`/material-examples`}>Material Examples</Link>
      </div>
    </div>
  );
};

export default Intro;
