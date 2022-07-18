import React from "react";
import fb from '../images/facebook.svg'
import ig from '../images/instagram.svg'
import tw from '../images/twitter.svg'
import gh from '../images/github.svg'
import '../stylesheets/Footer.css'
function Footer() {
    return (
        <div className="footer-wrapper">
          <img className="footer-icon" src={fb} alt="" />
          <img className="footer-icon" src={ig} alt="" />
          <img className="footer-icon" src={tw} alt="" />
          <img className="footer-icon" src={gh} alt="" />
        </div>
    )
}

export default Footer;