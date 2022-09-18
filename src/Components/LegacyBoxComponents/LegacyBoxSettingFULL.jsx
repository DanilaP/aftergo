import { useState } from 'react';
import './LegacyBoxSettingFULL.scss';
import LegacyBoxSettings from './LegacyBoxSettings';
import store from '../../store';
import { useNavigate } from 'react-router-dom';

function LegacyBoxSettingFULL() {
    const [checkboxActiveFirst, setCheckBoxActiveFirst] = useState(false);
    const [checkboxActiveSecond, setCheckboxActiveSecond] = useState(false);
    const [checkboxActiveThird, setCheckBoxActiveThird] = useState(false);
    const history = useNavigate();

    const activeFirstCheckbox = () => {
        checkboxActiveFirst ? setCheckBoxActiveFirst(false) : setCheckBoxActiveFirst(true);
    }
    const activeSecondCheckbox = () => {
        checkboxActiveSecond ? setCheckboxActiveSecond(false) : setCheckboxActiveSecond(true);
    }
    const activeThirdCheckbox = () => {
        if (checkboxActiveThird) {
            setCheckBoxActiveThird(false);
        }
        else {
            setCheckBoxActiveThird(true);
            history("/LegacyBoxFriendData");
        }
    }
    const continueToNext = () => {
        history("/EmailConfirmation");
    }
  return (
    <div className='legacy__FULL__main__box'>
        <div className="main__block">
            <LegacyBoxSettings />
            <div className="personal__data">
                <div className="header__in__box">
                    <div className='big__text'>
                        your personal data
                    </div>
                    <div className='small__text'>
                        Enter your personal details to register your<br /> 
                        account and make a purchase
                    </div>
                </div>
                <div className="main__form">
                    <input placeholder='First name' type = "text"/>
                    <input placeholder='Last name' type = "text"/>
                    <input placeholder='Date of birth' type = "text"/>
                    <input placeholder='Your email' type = "text"/>
                    <div className="main__form__text">
                        Your account will be automatically registered after purchase.<br /> 
                        An email will be sent with your username and password
                    </div>
                    <div className="permitions">
                        <div className="checkboxes">
                            <button onClick={activeFirstCheckbox} className='input__checkbox'>
                                <img className={checkboxActiveFirst ? 'image1 active1' : 'image1'}/>
                            </button>
                            <button onClick={activeSecondCheckbox} className='input__checkbox'>
                                <img className={checkboxActiveSecond ? 'image2 active2' : 'image2'}/>
                            </button>
                            
                        </div>
                        <div className="texts__to__checkboxes">
                            <div>I agree to <label>Privacy Legacy</label> & <label>Terms and Conditions</label></div>
                            <div>
                                I want to be informed about updates in the project.<br />
                                It is important not to miss the launch of the project
                            </div>
                        </div>
                    </div>
                    <div className="gift__to__friend">
                        <button onClick={activeThirdCheckbox} className='input__checkbox'>
                            <img className={checkboxActiveThird ? 'image3 active3' : 'image3'}/>
                            <div className={checkboxActiveThird ? 'big__div' : null}>Gift to friend or family member </div>
                        </button>
                    </div>
                </div>
                <div className="make__buy__button">
                    <button onClick={continueToNext}>BUY</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LegacyBoxSettingFULL;