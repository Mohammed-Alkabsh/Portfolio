import React from "react";
import { Link } from "react-router-dom";
import { MdArrowDownward } from "react-icons/md";

export default function Hero(props) {
  return (
    <div id="hero">
      <div className="container spacing-large">
        <div className="hero-content">
          <h1>
            Hi, I'm <span>Mohammed</span> Alkabsh.
          </h1>
          <h2>I'm a web developer</h2>
          <a
            href="/#about"
            className="btn btn-primary hashed-link d-flex justify-content-center align-items-center"
          >
            <span>Check me out!</span>
            <MdArrowDownward />
          </a>
        </div>
      </div>
    </div>
  );
}
