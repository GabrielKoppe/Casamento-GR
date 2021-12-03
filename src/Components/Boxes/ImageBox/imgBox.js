import React from "react";
import "./imgBox.css";

function textBox({ imagem , propstyle}) {
  return (
    <div className="box">
      <img
        className="imagem"
        src={imagem} 
        alt="Raquel e Gabriel"
      />
    </div>
  );
}

export default textBox;