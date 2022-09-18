import './createPassword.scss';
import store from '../store';
import { useSelector } from 'react-redux';
import logoImg from '../Icons/logoImg.png';
import { useState } from 'react';
import errorImg from '../Icons/errors2.png';
import { useNavigate } from 'react-router-dom';

function CreatePassword() {
    const [inputActive, setInputActive] = useState(false);
    const [userPassword, setUserPassword] = useState();
    const [secondPassword, setUserSecondPassword] = useState();
    const [errorsActive, setErrorsActive] = useState(false);
    const [errorsMessages, setErrorsMessages] = useState({
        lenght: "Be a mimimum of 8 characters",
        lowerCase: "Include at least one lowercase (a-z)",
        upperCase: "Include at least one uppercase (A-Z)",
        number: "Include at least one number (0-9)",
    })
    const history = useNavigate();
    const continueToNext = () => {  
        const rule = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        const isPasswordRight = rule.test(userPassword);
        if ((isPasswordRight == true) && (userPassword == secondPassword)) {
            alert(1)
        }
        else {
            setInputActive(false);
            setErrorsActive(true);
        }
    }
    const toPrev = () => {
        history("/ForgetPasswordCode");
    }
    const activateInput = (password, inputNumber) => {
        setErrorsActive(false);
        setInputActive(true);
        if (inputNumber == "1") {
            setUserPassword(password);
        }
        else {
            setUserSecondPassword(password);
        } 
    }
  return (
      <div>
        <div onClick={(e) => e.stopPropagation()} className="createPassword__modal__box">
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
            <div className="create__password__box">
                <div className="big__text">
                    CREATE PASSWORD
                </div>
                <div className="small__text">
                     Enter the email associated with your account and we'll<br />
                     send an email with instruction to reset your password
                </div>
                <div className="inputs">
                    <input onChange={(e) => activateInput(e.target.value, "1")} type = "password" placeholder='Password' />
                    <input onChange={(e) => activateInput(e.target.value, "2")} type = "password" placeholder='Confirm password' />
                    {inputActive ? <button onClick={continueToNext}>CONTINUE</button> : null}
                </div>
                {errorsActive ? (
                <div className="errors__box">
                    <img src = {errorImg}/>
                    <div className='error1'>{errorsMessages.lenght}</div>
                    <div className='error2'>{errorsMessages.lowerCase}</div>
                    <div className='error3'>{errorsMessages.upperCase}</div>
                    <div className='error4'>{errorsMessages.number}</div>
                </div>
                ): null}
            </div>
        </div>
    </div>
  );
}

export default CreatePassword;