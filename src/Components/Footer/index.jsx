import React from 'react';
import logo from "../../assets/logo.svg"
import "./footer.css"

function Footer() {
    return ( 
      <footer>
        <img src = { logo }
        className = "footer-logo"
        alt = "Logo" />
      </footer>
    );
}

export default Footer;