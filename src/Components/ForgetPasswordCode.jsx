import './ForgetPasswordCode.scss';
import store from '../store';
import { useSelector } from 'react-redux';
import logoImg from '../Icons/logoImg.png';
import { useState } from 'react';
import errorImg from '../Icons/errors.png';
import { useNavigate } from 'react-router-dom';

function ForgetPasswordCode() {
    const [inputActive, setInputActive] = useState(false);
    const history = useNavigate();
    const lastRoute = useSelector(store => store.lastRoute);

    const continueToNext = () => {
        store.dispatch({type: "LASTROUTE", payload: "/ForgetPasswordCode"});
        history("/CreatePassword");
    }
    const toPrev = () => {
        history(lastRoute);
    }
    const setFocus = (el) => {
        setInputActive(true);
        let ml = ~~el.getAttribute('maxlength');
            if(ml && el.value.length >= ml){
                do {
                    el = el.nextSibling;
                }
                while(el && !(/text/.test(el.type)));
                    if(el && /text/.test(el.type)){
                    el.focus();
                }
            }
    }
  return (
      <div>
        <div onClick={(e) => e.stopPropagation()} className="forgetPassword__code__modal__box">
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
            <div className="forget__box">
                <div className="big__text">
                    FORGET PASSWORD
                </div>
                <div className="small__text">
                    Enter the code sent to your email
                </div>
                <div className="input__box">
                    <input onChange={(e) => setFocus(e.target)} maxLength="1" type = "text" />
                    <input onChange={(e) => setFocus(e.target)} maxLength="1" type = "text" />
                    <input onChange={(e) => setFocus(e.target)} maxLength="1" type = "text" />
                    <input onChange={(e) => setFocus(e.target)} maxLength="1" type = "text" />
                    <input onChange={(e) => setFocus(e.target)} maxLength="1" type = "text" />
                </div>
                <div className="send__again__text">
                    Send again: 59s
                </div>
                <div className="send__button">
                    {inputActive ? <button onClick={continueToNext} >CONTINUE</button> : null}
                </div>
            </div>
        </div>
    </div>
  );
}

export default ForgetPasswordCode;