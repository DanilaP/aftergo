import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import $api from './Components/Axios';
import BabylonScene from "./Components/SceneComponent/SceneComponent";
import store from "./store";
import { useSelector } from "react-redux";
import FirstSubtitleComponent from "./Components/FirstEnterComponents/FirstSubtitleComponent";
import SecondSubtitleComponent from "./Components/FirstEnterComponents/SecondSubtitleComponent";
import ContinueButton from "./Components/FirstEnterComponents/ContinueButton";

function App() {
  const [isActive, setIsActive] = useState(false);
  const isActiveFirstSub = useSelector(store => store.isActiveFirstSub);
  const isActiveSecondSub = useSelector(store => store.isActiveSecondSub);
  const isActiveFirstModal = useSelector(store => store.isActiveFirstModal);
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
      {isActiveFirstSub ? < FirstSubtitleComponent /> : null}
      {isActiveSecondSub ? < SecondSubtitleComponent /> : null}
      {isActiveFirstModal ? < ContinueButton /> : null}
      <BabylonScene/>
    </div>
  );
}

export default App;
