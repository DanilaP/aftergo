import './firstWindow.scss';
import { useEffect, useRef } from 'react';
import store from '../../store';
import { useSelector } from 'react-redux';
import logoImg from '../../Icons/logo.png';
import { useNavigate } from 'react-router-dom';

function FirstWindow() {
    const history = useNavigate();
    const continueToNext = () => {
        //history("/SecondWindow");
    }
  return (
      <div className='main__block__modal'>
        <div onClick={(e) => e.stopPropagation()} className="modal__box">
            <div className='header'>
                <div className="logo__img">
                    <img src = {logoImg} width = {"166px"} height = {"235px"}/>
                </div>
            </div>
            <div className="buttons">
                <button onClick={continueToNext}>
                    <div className='krug'>
                        <div onChange={(e) => e.stopPropagation()} className="krug2">
                            
                        </div>
                    </div>
                </button>
            </div>
            <div className="footer">
                Fisrt Online Metaverce Cemetery
            </div>
        </div>
    </div>
  );
}

export default FirstWindow;