import React from "react";
import "./textBox.css";

function textBox({ title, subtitle}) {
  return (
    <div className="box_text">
      <h1>{title}</h1>
      <p><br/>{subtitle}</p>
    </div>
  );
}

export default textBox;