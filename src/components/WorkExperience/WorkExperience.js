import React, {useEffect, useState} from "react";
import {DutiesList} from "./DutiesList";

export const WorkExperience = (props) => {

	const [cvData, setCvData] = useState(null);

	useEffect(() => {
		(async () => {
			const res = await fetch('http://localhost:3021/get-items');
			const data = await res.json();
			const tab = data
				.filter(data => data.index >= 11 && data.index <= 15)
				.reverse();
			setCvData(tab);
		})();
	}, []);


	if (cvData === null) {
		return (
			<div className="lds-heart">
				<div></div>
			</div>
		)
	} else {
		return (
			<>
				<div className="education-section px-3 px-lg-4 pb-4">
					<h2 className="h3 mb-4">Doświadczenie</h2>
					<div className="timeline">
						{
							cvData.map(cvItem => (
								<div className="timeline-card timeline-card-primary card shadow-sm"
										 data-aos="fade-up">
									<div className="card-body" key={cvItem._id}>
										<div className="h5 mb-1">{cvItem.title}<span
											className="text-muted h6">{cvItem.subtitle}</span>
										</div>
										<div className="text-muted text-small mb-2">{cvItem.year}</div>
										<div>
											<p>Zakres obowiązków:</p>
											<ul>
												<DutiesList array={cvItem.dutiesArray}/>
											</ul>
										</div>
									</div>
								</div>
							))
						}
					</div>
				</div>
			</>
		)
	}
}