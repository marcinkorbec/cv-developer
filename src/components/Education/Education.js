import React, {useEffect, useState} from "react";
import {DutiesList} from "../WorkExperience/DutiesList";
import {apiUrl} from "../config/api";

export const Education = () => {

	const [cvData, setCvData] = useState(null);

	useEffect(() => {
		(async () => {
			const res = await fetch(`${apiUrl}/get-items`);
			const data = await res.json();
			const tab = data
				.filter(data => data.index >= 16 && data.index <= 19)
			setCvData(tab);
		})();
	}, []);


	if (cvData === null) {
		return (
			<div/>
		)
	}


	return (
		<div className="education-section px-3 px-lg-4 pb-4">
			<h2 className="h3 mb-4">Edukacja</h2>
			<div className="timeline">

				<div className="timeline-card timeline-card-success card shadow-sm"
						 data-aos="fade-up">
					<div className="card-body">
						<div className="h5 mb-1"> {cvData[3].title}<span
							className="text-muted h6"> {cvData[3].subtitle}</span>
						</div>
						<div className="text-muted text-small mb-2">{cvData[3].year}</div>
						<div>
							<p>{cvData[3].duties}</p>
							<ul>
								<DutiesList array={cvData[3].dutiesArray}/>
							</ul>
							<p>
								Dokładny program i opis kursu:
								<i>
									<a
										href="https://www.megak.pl/"
										target="_blank">https://www.megak.pl/
									</a>
								</i>
							</p>
						</div>
					</div>
				</div>

				<div className="timeline-card timeline-card-success card shadow-sm"
						 data-aos="fade-up">
					<div className="card-body">
						<div className="h5 mb-1">{cvData[2].title}
							<span className="text-muted h6">{cvData[2].subtitle}</span>
						</div>
						<div className="text-muted text-small mb-2">{cvData[2].year}</div>
						<div>
							<p>{cvData[2].duties}</p>
							<ul>
								<DutiesList array={cvData[2].dutiesArray}/>
							</ul>
							<p>
								Dokładny program można obejrzeć tutaj:
								<i>
									<a
										href="https://studiuje.it/"
										target="_blank">https://studiuje.it/
									</a>
								</i>
							</p>
						</div>
					</div>
				</div>

				<div className="timeline-card timeline-card-success card shadow-sm" data-aos="fade-up">
					<div className="card-body">
						<div className="h5 mb-1">{cvData[1].title}
							<span className="text-muted h6">{cvData[1].subtitle}</span>
						</div>
						<div className="text-muted text-small mb-2">{cvData[1].year}</div>
						<div>
							<strong>{cvData[1].duties}</strong>
							<ul>
								<DutiesList array={cvData[1].dutiesArray}/>
							</ul>
						</div>
					</div>
				</div>

				<div className="timeline-card timeline-card-success card shadow-sm" data-aos="fade-up">
					<div className="card-body">
						<div className="h5 mb-1">{cvData[0].title}<span
							className="text-muted h6"> {cvData[0].subtitle}.</span>
						</div>
						<div className="text-muted text-small mb-2">{cvData[0].year}</div>
					</div>
				</div>
			</div>
		</div>
	)
}