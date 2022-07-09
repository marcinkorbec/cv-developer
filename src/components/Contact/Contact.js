import React from "react";
import {Address} from "./Address";
import {ContactForm} from "./ContactForm";

export const Contact = (props) => {
	return (
		<div className="contant-section px-3 px-lg-4 pb-4" id="contact">
			<h2 className="h3 text mb-3">Kontakt</h2>
			<div className="row">
				<ContactForm {...props}/>
				<div className="col">
					<Address {...props}/>
				</div>
			</div>
		</div>
	)
};