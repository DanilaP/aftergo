import './Support.scss';
import { useSelector } from 'react-redux';
import store from '../../store';
import { useNavigate } from 'react-router-dom';

function Support() {
    const history = useNavigate();
    const closeModal = () => {
        history("/ChooseLandMenu");
    }
  return (
    <div className="support__modal__box">
        <div className="support__box">
            <div onClick={closeModal} className='close__btn'>
            </div>
            <div className="header__text">
                SUPPORT
            </div>
            <div className="header__small__text">
                Write to support if you have any difficulties.
            </div>
            <div className="inputs__box">
                <input type = "text" placeholder='Topic'/>
                <input type = "text" placeholder='Your email'/>
            </div>
            <div className="text__area__box">
                <textarea placeholder='Description'></textarea>
            </div>
            <div className="buttons">
                <button>CANCEL</button>
                <button>SEND</button>
            </div>
        </div>
    </div>
  );
}

export default Support;