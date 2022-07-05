import React from "react";

export const Address = (props) => (
	<div className="mt-2">
		<h3 className="h6">Adres</h3>
		<div className="pb-2 text-secondary">{`${props[0].address}, ${props[0].postCode}, ${props[0].postCity}`}</div>
		<h3 className="h6">Telefon</h3>
		<div className="pb-2 text-secondary">{props[0].phone}</div>
		<h3 className="h6">Email</h3>
		<div className="pb-2 text-secondary">{props[0].email}</div>
	</div>
)