import React from "react";
import Button from "./Button.jsx";
import profileImage from '../assets/profile.jpg';
import emailIcon from '../assets/email-icon.svg'
import linkedInIcon from '../assets/linkedin.svg';
import '../stylesheets/Info.css';
function Info() {
    return (
        <div className="info-wrapper">
            <img className="info-img" src={profileImage} alt="gonzalo with ichis pichis" />
            <h1 className="info-title">Gonzalo Ruiz</h1>
            <p className="info-position">Frontend Developer</p>
            <a className="info-web" href="https://github.com/Gon-Dev">github.com/Gon-Dev</a>
            <div className="buttons-wrapper">
                <Button className="info-button-email" icon={emailIcon} text="Email" />
                <Button icon={linkedInIcon} text="LinkedIn" className="info-button-linkedin" />
            </div>
        </div>
    )
}

export default Info;