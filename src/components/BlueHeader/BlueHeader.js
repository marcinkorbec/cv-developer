import React from "react";

export const BlueHeader = (props) => (
	<div className="row">
		<div className="col-lg-4 col-md-5">
			<div className="avatar hover-effect bg-white shadow-sm p-1">
				<img
					src={props[1].photo} width="200" height="200"
				/>
			</div>
		</div>
		<div className="col-lg-8 col-md-7 text-center text-md-start">

			<h2 className="h1 mt-2" data-aos="fade-left" data-aos-delay="0">{props[1].name}</h2>
			<p data-aos="fade-left" data-aos-delay="100">{props[1].title}</p>

			<div className="d-print-none" data-aos="fade-left" data-aos-delay="200">
				<a className="btn btn-light text-dark shadow-sm mt-1 me-1"
					 href={props[1].cvPdfUrl}
					 target="_blank">Pobierz CV jako PDF
				</a>
				<a className="btn btn-primary shadow-sm mt-1" href="#contact">Napisz do mnie</a>
			</div>
		</div>
	</div>
)
