import React, {useEffect, useState} from 'react';
import {Header} from "../Header/Header";
import {PageContent} from "../PageContent/PageContent";
import {Footer} from "../Footer/Footer";
import "./MainView.css"
import {apiUrl} from "../config/api";

export const MainView = () => {
	const [cvData, setCvData] = useState(null);

	useEffect(() => {
		(async () => {
			const res = await fetch(`${apiUrl}/get-items`);
			const data = await res.json();
			setCvData(data);
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
			<div id="root">
				<Header {...cvData}/>
				<PageContent {...cvData}/>
				<Footer {...cvData}/>
			</div>
		)
	}
}
