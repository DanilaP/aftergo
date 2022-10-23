import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import $api from './Components/Axios';
import store from "./store";
import { useSelector } from "react-redux";
import FirstSubtitleComponent from "./Components/FirstEnterComponents/FirstSubtitleComponent";
import SecondSubtitleComponent from "./Components/FirstEnterComponents/SecondSubtitleComponent";
import ContinueButton from "./Components/FirstEnterComponents/ContinueButton";
import Capsule from "./Components/SceneComponents/Capsule";
import Room from './Components/SceneComponents/Room';
import MiniMap from './Components/SceneComponents/MiniMap';
import Map from './Components/SceneComponents/Map';

function App() {
  // const history = useNavigate();
    // useEffect(() => {
    //   if(localStorage.getItem("userToken")) {
    //     $api.get('http://aftergo-dev.eastus.azurecontainer.io:3000/api/auth/me')
    //     .then((response) => {
    //       if (response.data !== null) {
    //         history("/SecondWindowMenu");
    //       }
    //       else {
    //         history("/SecondWindow");
    //       }
    //     })
    //     .catch((error) => {
    //       localStorage.removeItem("userToken");
    //       history("/SecondWindow");
    //     })
    //   }
    //   else {
    //     history("/SecondWindow");
    //   }
    // }, [])
  return (
    <div className="App">
      <Capsule/>
    </div>
  );
}

export default App;
