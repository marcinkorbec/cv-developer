import React from "react";

export const AboutMe = (props) => {
	return (
		<div className="col-md-6">
			<h2 className="h3 mb-3">O mnie</h2>
			<p>
				{props[2].aboutMe}
			</p>
			<p><a
				href={props[2].aboutMeUrl}>{props[2].aboutMeUrl}</a>
			</p>
		</div>
	)
}