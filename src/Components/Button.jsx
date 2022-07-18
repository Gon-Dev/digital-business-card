import React from "react";
import '../stylesheets/Button.css'
import '../stylesheets/Info.css';


function Button(props) {
    return(
        <div>
          <button className={"info-button info-button-" + props.text}>
              <img src={props.icon} alt="" />
              {props.text}
          </button>
        </div>
    )
}
export default Button;