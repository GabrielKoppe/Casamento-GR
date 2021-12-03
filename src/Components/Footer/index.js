import React from 'react';
import logo from "../../assets/logo.svg"
import "./footer.css"
import styled from 'styled-components';

const FooterBase = styled.footer`
  background: #f5f1eb;
  border-top: 2px solid var(--olive);
  padding-left: 10em;
  padding-right: 10em;
  padding-top: 26px;
  padding-bottom: 20px;
  box-shadow: inset;
  text-align: center;
  background-color:  rgb(229, 208, 174);
`;

function Footer() {
  return (
    <FooterBase>
      <img
        src={logo}
        className="footer-logo"
        alt="Logo"
      />
    </FooterBase>
  );
}

export default Footer;
