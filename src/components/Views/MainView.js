import React from 'react';
import {Header} from "../Header/Header";
import {PageContent} from "../PageContent/PageContent";
import {Footer} from "../Footer/Footer";
import {cvData, CVData} from "../../utils/personal-data";

export const MainView = () => {

	// const headerData = props.find

  return (
    <div id="root">
      <Header {...CVData}/>
      <PageContent {...CVData}/>
      <Footer {...CVData}/>
    </div>
  )
}