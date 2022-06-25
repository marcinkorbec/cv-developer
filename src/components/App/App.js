import './App.css';
import './aos.css'
import AOS from 'aos'
import {useEffect} from "react";
import {MainView} from "../Views/MainView";


export const App = () => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return <MainView/>
}


