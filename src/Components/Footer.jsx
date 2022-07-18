import React from "react";
import fb from '../assets/facebook.svg'
import ig from '../assets/instagram.svg'
import tw from '../assets/twitter.svg'
import gh from '../assets/github.svg'
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