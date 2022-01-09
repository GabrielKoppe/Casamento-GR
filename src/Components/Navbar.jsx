import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import "./navbar.css"
import { BsList, BsXLg } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";

function WebScreen(){
  return(
    <ul className="nav-items">
      <li className="nav-item">
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          a nossa história
        </Link>
      </li>
      <li className="nav-item">
        <Link
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          sobre o nosso dia
        </Link>
      </li>
      <li className="nav-item">
        <Link
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          confirme sua presença
        </Link>
      </li>
      <li className="nav-item">
        <Link
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          lista de presentes
        </Link>
      </li>
    </ul>
  )
}

function MobileScreen() {
  const [navigation, setNavigation] = useState(true);

  return(
    <div>
      <div className="mobile_icons">
        <button className="btn btn_mobile" onClick={() => setNavigation(!navigation)}>
            { navigation ? <BsList className="icon_e"/> : <BsXLg className="icon_x"/> }
        </button>
      </div>
      { navigation ? null : 
        <div className="nav_mobile">
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setNavigation(!navigation)}
              >
                a nossa história
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setNavigation(!navigation)}
              >
                sobre o nosso dia
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setNavigation(!navigation)}
              >
                confirme sua presença
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setNavigation(!navigation)}
              >
                lista de presentes
              </Link>
            </li>
          </ul>
        </div>
      }
    </div>
  )
}
function Navbar() {
  const [screen, setScreen] = useState(true);

  useEffect(() => {
    const width = window.screen.width;
    if(width>=768){
      console.log("Web")
    } else {
      console.log("Mobile")
      setScreen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function scrollToTop() {
    scroll.scrollToTop();
  };

  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <img
          src={logo}
          className="nav-logo"
          alt="Logo"
          onClick={scrollToTop}
        />
        {
          screen ? <WebScreen/> : <MobileScreen/>
        }
        
      </div>
    </nav>
  );
}

export default Navbar;