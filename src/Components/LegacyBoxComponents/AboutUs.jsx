import './AboutUs.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import store from '../../store';
import { useSelector } from 'react-redux';
import backgroundImage from '../../Icons/background__abousUs.png';

function AboutUs() {
  const history = useNavigate();
  const backToFirst = useSelector(store => store.aboutUsBackToFirstMenu);
  const backToSecond = useSelector(store => store.aboutUsBackToSecondMenu);
  const lastRoute = useSelector(store => store.lastRoute);

  const goBack = () => {
    if (backToFirst) {
        store.dispatch({type: "ABOUTUSBACKTOFIRST", payload: false});
        history("/FirstEnterMenu");
    }
    else if (backToSecond) {
        store.dispatch({type: "ABOUTUSBACKTOSECOND", payload: false});
        history("/ChooseLandMenu");
    }
    else {
        history(lastRoute);
    }
  }
  return (
    <div className="about__us__modal__box">
        <div className="main__box">
            <div onClick={goBack} className="close__button">x</div>
            <div className="header">ABOUT AFTERGO</div>
            <div className="buttons">
                <button>AFTERGO</button>
                <button>UPDATE</button>
            </div>
            <div className="info">
                <div className="info__block">
                    <div className="head">H. Rackham</div>
                    <div className="main">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</div>
                </div>
                <div className="info__block">
                    <div className="main"><img src = {backgroundImage}/></div>
                </div>
                <div className="info__block">
                    <div className="head">H. Rackham</div>
                    <div className="main">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutUs;
