import React from "react";
import {blueHeaderData} from "../../utils/personal-data";

export const BlueHeader = () => (
	<div className="row">
		<div className="col-lg-4 col-md-5">
			<div className="avatar hover-effect bg-white shadow-sm p-1">
				<img
					src={blueHeaderData.photo} width="200" height="200"
				/>
			</div>
		</div>
		<div className="col-lg-8 col-md-7 text-center text-md-start">

			<h2 className="h1 mt-2" data-aos="fade-left" data-aos-delay="0">{blueHeaderData.name}</h2>
			<p data-aos="fade-left" data-aos-delay="100">{blueHeaderData.title}</p>

			<div className="d-print-none" data-aos="fade-left" data-aos-delay="200">
				<a className="btn btn-light text-dark shadow-sm mt-1 me-1"
					 href={blueHeaderData.cvPdfUrl}
					 target="_blank">Pobierz CV jako PDF
				</a>
				<a className="btn btn-primary shadow-sm mt-1" href="#contact">Napisz do mnie</a>
			</div>
		</div>
	</div>
)