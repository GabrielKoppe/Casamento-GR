import React from "react";
import "./section.css"

export default function Section(props) {
  return (
    <div className="section-content" id={props.id}>
        <div className="boxes">
          {props.children}
        </div>
    </div>
  );
}