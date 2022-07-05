import React from "react";

export const DutiesList = (props) => {

	const {array} = props;
	console.log(array);
	return (
		<>
			{
				array.map(item => (
					<li key={item.index}>{item}</li>
				))
			}
		</>
	)
}