import React from "react";
import {personalDesrciptionData} from "../../utils/personal-data";

export const AboutMe = () => {


	return (
		<div className="col-md-6">
			<h2 className="h3 mb-3">O mnie</h2>
			<p>
				{personalDesrciptionData.aboutMe}
			</p>
			<p><a
				href={personalDesrciptionData.aboutMeUrl}>{personalDesrciptionData.aboutMeUrl}</a>
			</p>
		</div>
	)
}