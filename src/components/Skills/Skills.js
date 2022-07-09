import React, {useEffect, useState} from "react";
import {apiUrl} from "../config/api";

export const Skills = () => {
	const [itemLeft, setItemLeft] = useState(null)
	const [itemRight, setItemRight] = useState(null)

	useEffect(() => {
		(async () => {
			const res = await fetch(`${apiUrl}/get-one/62c34cede58690199141fe9d`);
			const data = await res.json();
			const itemLeft = await data.itemLeft;
			const itemRight = await data.itemRight;
			setItemLeft(itemLeft);
			setItemRight(itemRight);
		})();
	}, [])

	if (itemLeft === null || itemRight === null) {
		return <div/>
	} else {
		return (
			<div className="skills-section px-3 px-lg-4">
				<h2 className="h3 mb-3">Umiejętności</h2>
				<div className="row">
					<div className="col-md-6">
						{
							itemLeft.map(cvItem => (
								<div className="mb-2" key={cvItem.name}>
									<span>{cvItem.name}</span>
									<div className="progress my-1">
										<div className="progress-bar bg-primary"
												 role="progressbar"
												 data-aos="zoom-in-right"
												 data-aos-delay={`${cvItem.aosDelay}`}
												 data-aos-anchor=".skills-section"
												 style={{width: `${cvItem.value}%`}}
												 aria-valuenow={`${cvItem.value}`}
												 aria-valuemin="0" aria-valuemax="100"/>
									</div>
								</div>
							))
						}

					</div>
					<div className="col-md-6">
						{
							itemRight.map(cvItem => (
								<div className="mb-2" key={cvItem.name}>
									<span>{cvItem.name}</span>
									<div className="progress my-1">
										<div className="progress-bar bg-success"
												 role="progressbar"
												 data-aos="zoom-in-right"
												 data-aos-delay={`${cvItem.aosDelay}`}
												 data-aos-anchor=".skills-section"
												 style={{width: `${cvItem.value}%`}}
												 aria-valuenow={`${cvItem.value}`}
												 aria-valuemin="0" aria-valuemax="100"/>
									</div>
								</div>
							))
						}
					</div>
				</div>
			</div>
		)
	}
}