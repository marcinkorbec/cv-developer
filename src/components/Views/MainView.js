import React from 'react';
import {Header} from "../Header/Header";
import {PageContent} from "../PageContent/PageContent";
import {Footer} from "../Footer/Footer";

export const MainView = () => {


  return (
    <div id="root">
      <Header/>
      <PageContent/>
      <Footer/>
    </div>
  )
}