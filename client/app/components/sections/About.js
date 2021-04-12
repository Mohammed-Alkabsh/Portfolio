import React from "react";
import { Link } from "react-router-dom";

export default function Hero(props) {
  return (
    <div id="about">
      <div className="container spacing-large">
        <div className="hero-content">
          <h1>
            Hi, I'm <span>Mohammed</span> Alkabsh.
          </h1>
          <h2>I'm a web developer</h2>
          <Link to="/#about" className="btn btn-primary">
            Check me out!
          </Link>
        </div>
      </div>
    </div>
  );
}
