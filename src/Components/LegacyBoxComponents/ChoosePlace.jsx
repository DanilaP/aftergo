import './ChoosePlace.scss';
import { useSelector } from 'react-redux';
import store from '../../store';
import userAvatar from '../../Icons/userAvatar.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function ChoosePlace() {
    const history = useNavigate();
    const lastRoute = useSelector(store => store.lastRoute);
    const continueToNext = () => {
        store.dispatch({type: "LASTROUTE", payload: "/ChoosePlace"});
        history("/ChooseTombstone");
    }
    const toPrev = () => {
        history(lastRoute);
    }
    useEffect(() => {
        store.dispatch({type: "LASTROUTE", payload: "/OrderNewLand"});
    }, [])
  return (
    <div className="choose__place__modal__box">
        <div className="header">
            <div className="arrow_box">
                <div onClick={toPrev} className="arrow_example_1"></div>
            </div>
        </div>
        <div className="order__land__footer">
        <div className="price">
            <div className='price__box'>
                <div>
                    LARGE AREA
                </div>
                <div>2250 $</div>
            </div>
        </div>
        <div className="place__status">
            PRIVATE
        </div>
        <div className="info__about__owner__of__place">
            <div className='text'>NAME HIDDEN</div>
            <div><img src = {userAvatar}/></div>
        </div>
        <div className="cont__button">
            <button onClick={continueToNext}>CONTINUE</button>
        </div>
        </div>
    </div>
  );
}

export default ChoosePlace;