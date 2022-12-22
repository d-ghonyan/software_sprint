import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
 import "./index.css"
const Popup = props => {
	const [isOpen, setIsOpen] = useState(false);
const togglePopup = () => {
	// console.log("called");
	// setData({data: data.data, isOpen: true})
	setIsOpen(!isOpen);
	console.log(isOpen);
}
  return (
    <div className="popup-box" style={{background: "#f78da7"} }>
      <div className="box">
        <span className="close-icon" onClick={props.handleClose} >x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;