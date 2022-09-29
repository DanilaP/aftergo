import './RegistrationForGift.scss';
import store from '../store';
import { useSelector } from 'react-redux';
import logoImg from '../Icons/logoImg.png';
import { useState } from 'react';
import errors2 from '../Icons/errors2.png';
import checkboxImg from '../Icons/checkbox.png';
import { useNavigate } from 'react-router-dom';

function RegistrationForGift() {
    const [checkboxActiveFirst, setCheckBoxActiveFirst] = useState(false); 
    const [checkboxActiveSecond, setCheckBoxActiveSecond] = useState(false); 
    const [firstCheckBox, setFirstCheckBox] = useState(false);
    const [secondCheckBox, setSecindCheckBox] = useState(false);
    const history = useNavigate();
    const lastRoute = useSelector(store => store.lastRoute);

    const continueToNext = () => {
        store.dispatch({type: "LASTROUTE", payload: "/RegistrationForGift"});
        history("/ChooseLandMenu");
    }
    const toPrev = () => {
        history(lastRoute);
    }
    const checkPermitionsFirst = () => {
        checkboxActiveFirst ? setCheckBoxActiveFirst(false) : setCheckBoxActiveFirst(true);
    }
    const checkPermitionsSecond = () => {
        checkboxActiveSecond ? setCheckBoxActiveSecond(false) : setCheckBoxActiveSecond(true);
    }
  return (
      <div>
        <div onClick={(e) => e.stopPropagation()} className="registerGift__modal__box">
            <div className="header">
                <div className="arrow_box">
                    <div onClick={toPrev} className="arrow_example_1"></div>
                </div>
                <div className="content">
                    <div className="logo__text">
                        AFTERGO
                    </div>
                    <div className="logo__img">
                        <img src = {logoImg} width = {"20px"} height = {"35px"}/>
                    </div>
                </div>
            </div>
            <div className='main__content'>
            <div className="text">
                <div className="first__text">REGISTRATION</div>
                <div className="second__text">Fill in the details to create your account</div>

                <div className="inputs">
                    <input placeholder='First name' type = "text" />
                    <input placeholder='Last name' type = "text" />
                    <input placeholder='Date of birth' type = "text" />
                </div>
            </div>
            <div className="errors__message">
                <img src = {errors2}></img>
                Incorrect password  
            </div>
            <div className="permitions">
                <button className='input__checkbox' onClick={() => checkPermitionsFirst()}>
                    <img className={checkboxActiveFirst ? 'image1 active1' : 'image1'}/>
                </button>
                <label className='first'>I agree to <label className='new__label'>Privacy Legacy</label> & <label className='new__label'>Terms and Conditions</label></label>
                
                <button className='input__checkbox' onClick={() => checkPermitionsSecond()}>
                    <img className={checkboxActiveSecond ? 'image2 active2' : 'image2'}/>
                </button>
                <label className='second'>I want to be informed about updates in the project.<br /> 
                It is important not to miss the launch of the project</label>
                <button onClick={continueToNext} className='cont__button'>CONTINUE</button>
            </div>
            </div>
        </div>
    </div>
  );
}

export default RegistrationForGift;