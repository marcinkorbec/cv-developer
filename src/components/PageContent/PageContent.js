import React from "react";
import {AboutMe} from "../AboutMe/AboutMe";
import {Details} from "../Details/Details";
import {BlueHeader} from "../BlueHeader/BlueHeader";
import {Skills} from "../Skills/Skills";
import {Contact} from "../Contact/Contact";
import {Education} from "../Education/Education";
import {WorkExperience} from "../WorkExperience/WorkExperience";

export const PageContent = (props) => {
	return (
		<div className="page-content">
			<div className="container">
				<div className="cover shadow-lg bg-white">
					<div className="cover-bg p-3 p-lg-4 text-light">
						<BlueHeader {...props}/>
					</div>

					<div className="about-section pt-4 px-3 px-lg-4 mt-1">
						<div className="row">
							<AboutMe {...props}/>
							<Details {...props}/>
						</div>
					</div>

					<hr className="d-print-none"/>
					<Skills/>
					<hr className="d-print-none"/>

					</div>
						<div className="page-break"></div>
					<hr className="d-print-none"/>
					<div className="cover shadow-lg bg-white">
							<div className="about-section pt-4 px-3 px-lg-4 mt-1">
								<hr className="d-print-none"/>
								<Education {...props}/>
							</div>
						</div>

					<div className="page-break"></div>
					<hr className="d-print-none"/>
						<div className="cover shadow-lg bg-white">
							<div className="about-section pt-4 px-3 px-lg-4 mt-1">
								<hr className="d-print-none"/>
								<WorkExperience {...props}/>
							</div>
						</div>

					<hr className="d-print-none"/>
					<div className="cover shadow-lg bg-white">
							<div className="about-section pt-4 px-3 px-lg-4 mt-1">
								<hr className="d-print-none"/>
								<Contact {...props}/>
							</div>
						</div>
				</div>
			</div>
			)
			}

