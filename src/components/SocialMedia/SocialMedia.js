import React, {useEffect, useState} from "react";
import {apiUrl} from "../config/api";

export const SocialMedia = () => {

	const [cvData, setCvData] = useState(null);

	useEffect(() => {
		(async () => {
			const res = await fetch(`${apiUrl}/get-items`);
			const data = await res.json();
			const tab = await data.filter(data => data.index > 4 && data.index < 9);
			setCvData(tab);
		})();
	}, []);


	if (cvData === null) {
		return (
			<div/>
		)
	} else {
		return (
			<ul className="nav justify-content-center">
				{
					cvData.map(cvItem => (
						<li className="nav-item"
								key={cvItem._id}>
							<a className="nav-link"
								 href={cvItem.link}
								 title={cvItem.name}
								 target="_blank"
							>
								<i
									className={cvItem.faIcon}
								/>
								<span
									className="menu-title sr-only">{cvItem.name}
							</span>
							</a>
						</li>
					))
				}
			</ul>
		)
	}

}