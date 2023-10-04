import "./Intro.css";
import React from "react";
import { Link } from "react-router-dom";

const Intro: React.FC = () => {
  return (
    <div className="intro-wrapper">
      <div className="intro-container">
        <h2>ency R3F presentation</h2>
        <p>
          Thanks for attending. Your presence and engagement were valuable.
          Looking forward to more opportunities.
        </p>

        <a
          className="link-button link-button__filled"
          href="https://slides.com/erikkudra/palette/fullscreen"
        >
          Presentation
        </a>

        <a
          className="link-button link-button__filled"
          href="https://github.com/Ency88/r3f-presentation"
        >
          Repository
        </a>
        <br />
        <p>
          Below, you can find each animation used in the presentation as an
          iFrame.
        </p>

        <Link className="link-button" to={`/basic-cube`}>
          Basic Cube
        </Link>

        <Link className="link-button" to={`/pseudo-geometry-cube`}>
          Pseudo Geometry Cube
        </Link>

        <Link className="link-button" to={`/material-examples`}>
          Material Examples
        </Link>

        <Link className="link-button" to={`/non-rotate-cube`}>
          Non Rotate Cube
        </Link>

        <Link className="link-button" to={`/qr-code`}>
          QrCode
        </Link>

        <div className="footer">@ency88</div>
      </div>
    </div>
  );
};

export default Intro;
