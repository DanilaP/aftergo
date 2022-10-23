import './EmailConfirmationForBuying.scss';
import store from '../../store';
import { useSelector } from 'react-redux';
import { Stepper } from './LegacyBoxSettingFull/components/stepper';
import { useState } from 'react';

function EmailConfirmation() {
    const modalActive = useSelector(store => store.forgetPasswordCodeActive);
    const [inputActive, setInputActive] = useState(false);

    const continueToNext = () => {
        
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
        <div className="email__confirmation__modal__box">
            <Stepper allStep={3} currentStep={3} />
            <div className="forget__box">
                <div className="big__text">
                    EMAIL CONFIRMATION
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
    );
}

export default EmailConfirmation;