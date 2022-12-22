import React, { useEffect, useState } from "react";

import {
	ServicesContainer,
	ServicesH1,
	ServicesH2,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesP,
	Icon
} from "./SeviceElements"
import Popup from "./Popup";
import axios from 'axios';
import './index.css';

const Item = props => {

	const [isOpen, setIsOpen] = useState(false);
	const togglePopup = () => {
		// console.log("called");
		// setData({data: data.data, isOpen: true})
		setIsOpen(!isOpen);
		console.log(isOpen);
	}
	return (
		<ServicesCard key={props.val._id} className="card">
			<ServicesH2>{props.val.title}</ServicesH2>
			<ServicesP>{props.val.description}</ServicesP>
			<input
				type="button"
				value="More"
				onClick={() => togglePopup()}
			/>
			{
				isOpen &&
				<Popup 
					content={<div >					
							<p > <b>Event Name</b> _ {props.val.title}</p>
							<br></br>
							<p>Description <br></br>{props.val.description}</p>
							<p><b>Event Date</b> _{props.val.date}</p>
						</div>
					}

					handleClose={togglePopup}
				// handleClose={}
				/>
			}
		</ServicesCard>
	);
};

export default Item;