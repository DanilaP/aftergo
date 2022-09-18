import './ForgetPasswordFirst.scss';
import store from '../store';
import { useSelector } from 'react-redux';
import logoImg from '../Icons/logoImg.png';
import { useState } from 'react';
import errorImg from '../Icons/errors.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ForgetPasswordFirst() {
    const [inputActive, setInputActive] = useState(false);
    const [userEmail, setUserEmail] = useState();
    const [errorMessage, setErrorMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const history = useNavigate();

    const activateInput = (email) => {
        setInputActive(true);
        setUserEmail(email);
    }
    const continueToNext = async () => {
        let rule = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
        let valid = rule.test(userEmail);

        if (valid) {    
            await axios.post('http://aftergo-dev.eastus.azurecontainer.io:3000/api/auth/forgot/password', userEmail)
            .then((response) => {
                setIsError(false);
                setErrorMessage("");
                history("/ForgetPasswordCode");
            })
            .catch((error) => {
                setErrorMessage('Incorrect email. Please try again.');
                setIsError(true);
            })
        }
        else {
            setErrorMessage('Incorrect email. Please try again.');
            setIsError(true);
        }
    }
    const toPrev = () => {
        history("/LogInFirst");
    }
  return (
      <div>
        <div onClick={(e) => e.stopPropagation()} className="forgetPassword__modal__box">
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
            <div className="forget__password__box">
                <div className="big__text">
                    FORGET PASSWORD
                </div>
                <div className="small__text">
                    Enter the email associated with your account and we'll<br /> 
                    send an email with instruction to reset your password
                </div>  
                <div className="inputBox">
                    <input className={isError ? 'errorInput' : 'inputNotActive'} onChange={(e) => activateInput(e.target.value)} type = "text" placeholder='Your email'/>
                    {isError ? <div className='error__box'><img src = {errorImg}/>{errorMessage}</div>: null}
                    {inputActive ? <button onClick={continueToNext}>CONTINUE</button> : null}
                </div>
            </div>
        </div>
    </div>
  );
}

export default ForgetPasswordFirst;