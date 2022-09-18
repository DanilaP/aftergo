import { useState } from 'react';
import './LegacyBoxFriendData.scss';
import LegacyBoxSettings from './LegacyBoxSettings';
import store from '../../store';
import { useNavigate } from 'react-router-dom';

function LegacyBoxFriendData() {
    const [checkboxActiveFirst, setCheckBoxActiveFirst] = useState(true);
    const [checkboxActiveSecond, setCheckboxActiveSecond] = useState(false);
    const history = useNavigate();

    const activeSecondCheckbox = () => {
        checkboxActiveSecond ? setCheckboxActiveSecond(false) : setCheckboxActiveSecond(true);
    }
    const activeFirstCheckbox = () => {
        if (checkboxActiveFirst) {
            setCheckBoxActiveFirst(false);
            history("/LegacyBoxSettingFULL");
        }
        else {
            setCheckBoxActiveFirst(true)
        }
    }
    
  return (
    <div className="friend__main">
        <div className='legacy__friend__data__box'>
            <div className="main__block">
                <LegacyBoxSettings />
                <div className="friend__data">
                    <div className="big__text">
                        Friend personal data
                    </div>
                    <div className="small__text">
                        Enter personal friend details to enable him to create an account.<br/> 
                        We will send him a unique link by email
                    </div>
                    <div className="main__content__of__data__fields">
                        <div>
                            <input placeholder='Fisrt friend’s name' />
                        </div>
                        <div>
                            <input placeholder='Last friend’s name'/>
                        </div>
                        <div>
                            <input placeholder='Email'/>
                        </div>
                        <div>
                            <textarea placeholder='Comment' /> 
                        </div>
                        <div className='after__area__input' >
                            <input placeholder='Confirm email'/>
                        </div>
                        <div className="permitions">
                            <div className="gift__to__friend">
                                <button onClick={activeFirstCheckbox} className='input__checkbox'>
                                    <img className={checkboxActiveFirst ? 'image3 active3' : 'image3'}/>
                                    <div className={checkboxActiveFirst ? 'big__div' : null}>Gift to friend or family member </div>
                                </button>
                            </div>
                            <div className="main__form__text">
                                Your account will be automatically registered after purchase.<br /> 
                                An email will be sent with your username and password
                            </div>
                        </div>
                        <div className="privacy__legacy">
                            <div>
                                <button onClick={activeSecondCheckbox} className='input__checkbox'>
                                    <img className={checkboxActiveSecond ? 'image2 active2' : 'image2'}/>
                                </button>
                            </div>
                            <div className={checkboxActiveSecond ? 'first__active' : null}>
                                <label>I agree to <label className='new__label'>Privacy Legacy</label> & <label className='new__label'>Terms and Conditions</label></label>
                            </div>
                        </div>
                    </div>
                    <div className="buy__button">
                        <button>BUY</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LegacyBoxFriendData;