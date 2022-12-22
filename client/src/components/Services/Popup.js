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
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose} >x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;