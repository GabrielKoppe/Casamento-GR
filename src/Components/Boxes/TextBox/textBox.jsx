import React from "react";

function textBox({ title, children}) {
  return (
    <div className="box_text">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default textBox;