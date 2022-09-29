import './ChooseLegacyRoom.scss';
import store from '../../store';
import legacy__room__1 from '../../Icons/legacy__room__1.png';
import legacy__room__2 from '../../Icons/legacy__room__2.png';
import legacy__room__3 from '../../Icons/legacy__room__3.png';
import legacy__room__4 from '../../Icons/legacy__room__4.png';
import custom__legacy__room from '../../Icons/custom__legacy__room.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ChooseLegacyRoom() {
    const [customDesignActive, setCustomDesignActive] = useState(false);
    const [standartDesignNumber, setStandartDesignNumber] = useState(0);
    const history = useNavigate();
    const lastRoute = useSelector(store => store.lastRoute);

    const continueToNext = () => {
        if (customDesignActive == true) {
            store.dispatch({type: "LASTROUTE", payload: "/ChooseLegacyRoom"});
            history("/CustomDesignLegacyRoom");
        }
        else if (standartDesignNumber == 0) {
            return
        } 
        else {
            store.dispatch({type: "LASTROUTE", payload: "/ChooseLegacyRoom"});
            history("/LegacyBoxSettingFULL");
        }
    }
    const toPrev = () => {
        history(lastRoute);
    }
    const createCustomDesign = () => {
        setCustomDesignActive(true);
    }
    const chooseStandartDesign = (designNumber) => {
        setCustomDesignActive(false);
        setStandartDesignNumber(designNumber);
    }
  return (
    <div className="choose__legacy__room__modal__box">
            <div className="header">
                <div className="arrow_box">
                    <div onClick={toPrev} className="arrow_example_1"></div>
                </div>
            </div>
            <div className="choose__room__box">
                <div className="header">
                    <div className="big__text">your legacy Room</div>
                    <div className="small__text">
                        This is how your legacy room will look like after launch. Here you will place all important<br />
                        legacy that will be saved in your legacy box. Access to legacy box will be in the next steps
                    </div>
                </div>
                <div className="rooms">
                    <img onClick={() => chooseStandartDesign("1")} tabIndex="0" src = {legacy__room__1}/>
                    <img onClick={() => chooseStandartDesign("2")} tabIndex="0" src = {legacy__room__2}/>
                    <img onClick={() => chooseStandartDesign("3")} tabIndex="0" src = {legacy__room__3}/>
                    <img onClick={() => chooseStandartDesign("4")} tabIndex="0" src = {legacy__room__4}/>
                </div>
                <div className="custom__room">
                    <div>Custom  legacy room design</div>
                    <img onClick={createCustomDesign} tabIndex="0" src = {custom__legacy__room}/>
                </div>
                <div className="cont__button">
                    <button onClick={continueToNext}>SELECT</button>
                </div>
            </div>
    </div>
  );
}

export default ChooseLegacyRoom;