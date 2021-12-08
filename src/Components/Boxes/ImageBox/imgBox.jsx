import React from "react";
import "./imgBox.css";

function textBox({ lowImg, highImg, propstyle }) {
    return ( 
        <picture className = "img-box" alt = "Raquel e Gabriel" >
            <source className = "img" media="(min-width: 800px)" srcSet= { highImg }/>
            <img className = "img" src = { lowImg } alt = "Raquel e Gabriel" />
        </picture>
    );
}

export default textBox;