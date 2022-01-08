import React from "react";
import "./intro.css";
import logo from ".../../../src/assets/nomes_claro.svg";

export default function Intro() {
  return (
      <div className="intro">
        <img
            src={logo}
            alt="Logo"
          />
      </div> 
  );
}

