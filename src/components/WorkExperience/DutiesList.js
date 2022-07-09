import React from "react";

export const DutiesList = (props) => {

	const {array} = props;
	console.log(array)

	if (!array) {
		return <li>...</li>
	}
	return (
		<>
			{
				array.map(item => (
					<li key={item}>{item}</li>
				))
			}
		</>
	)
}