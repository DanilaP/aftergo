import './LogInFirst.scss';
import store from '../store';
import { useSelector } from 'react-redux';
import logoImg from '../Icons/logo.png';
import discord from '../Icons/discordIcon.png';
import google from '../Icons/iconGoogle.png';
import facebook from '../Icons/facebookIcon.png';
import twitter from '../Icons/twitterIcon.png';
import errors from '../Icons/errors.png';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LogInFirst() {
    const [questionActive, setQuestionActive] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [isError, setIsError] = useState(false);
    let history = useNavigate();
    const lastRoute = useSelector(store => store.lastRoute);

    const continueToNext = async () => {
        let user = {
            email: userEmail,
            password: userPassword,
        }
        let rule = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
        let valid = rule.test(userEmail);
        if (valid) {
            await axios.post('https://aftergo-api-dev.azurewebsites.net/api/auth/email/login', user)
            .then((response) => {
                localStorage.setItem("userToken", response.data.token);
                history("/ChooseLandMenu");
            })
            .catch((error) => {
                if (error.response.status === 422) {
                    setIsError(true);
                }
            })
        }
        else {
            setIsError(true);
        }
    }
    const toPrev = () => {
        history("/FirstEnterMenu");
    }
    const openForgetPasswordModal = () => {
        store.dispatch({type: "LASTROUTE", payload: "/LogInFirst"});
        history("/ForgetPasswordFirst");
    }
    const openTextQuestion = () => {
        setQuestionActive(true);
    }
  return (
      <div>
        <div onClick={() => setQuestionActive(false)} className="third__modal__box">
            <div className="header">
                <div onClick={toPrev} className="arrow_box">
                    <div className="arrow_example_1"></div>
                </div>
                <div onClick={(e) => e.stopPropagation()} className="questionBox">
                    <button onClick={openTextQuestion}>How to register</button>
                    <div className='questionImg'></div>
                </div>
                <div className={questionActive ? 'questionText' : 'questionText__not__active'}>
                    <div className='head__text'>
                        Registration
                    </div>
                    <div className="main__text__question">
                        An NFT is a digital asset that <br /> 
                        represents real-world objects <br /> 
                        like art, music, in-game items <br /> 
                        and videos. They are bought <br /> 
                        and sold online, frequently <br /> 
                        with cryptocurrency, and they <br /> 
                        are generally encoded with <br /> 
                        the same underlying software <br />  
                        as many cryptos.
                    </div>
                </div>
            </div>
            <div className='main__part__of__content'>
                <div className="register__box">
                    <div className="content">
                        <div className="logo__img">
                            <img src = {logoImg} width = {"60px"} height = {"80px"}/>
                        </div>
                    </div>
                    <div className="form__inputs">
                    <input onChange={(e) => setUserEmail(e.target.value)} 
                           placeholder='Email' 
                           type = "text" 
                           className={isError ? "error__input" : null}/>
                    <input onChange={(e) => setUserPassword(e.target.value)} 
                           placeholder='Password' 
                           type = "password" 
                           className={isError ? "error__input" : null}/>
                    {isError 
                    ? 
                    <div className='errors__message'>
                        <img src = {errors}></img>Incorrect password or email. Please, try again
                    </div> 
                    : null
                    }
                    </div>
                    <div onClick={openForgetPasswordModal} className='forget__password'>Forget password?</div>
                    <button onClick={continueToNext}>LOG IN</button>
                </div>
                <div className="social__auth">
                    <a href = "http://aftergo-dev.eastus.azurecontainer.io:3000/api/auth/discord">
                        <button className='discord__button'><img src = {discord}/></button>
                    </a>
                    <a href = "http://aftergo-dev.eastus.azurecontainer.io:3000/api/auth/google">
                        <button className='google__button'><img src = {google}/></button>
                    </a>
                    <a href = "http://aftergo-dev.eastus.azurecontainer.io:3000/api/auth/facebook">
                        <button className='facebook__button'><img src = {facebook}/></button>
                    </a>
                    <a href = "http://aftergo-dev.eastus.azurecontainer.io:3000/api/auth/twitter">
                        <button className='twitter__button'><img src = {twitter}/></button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LogInFirst;