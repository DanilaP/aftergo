import './OrderNewLand.scss';
import { useSelector } from 'react-redux';
import store from '../../store';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderNewLand() {
    const [numberOfLand, setNumberOfLand] = useState(1);
    const history = useNavigate();
    const lastRoute = useSelector(store => store.lastRoute);

    const continueToNext = () => {
        store.dispatch({type: "LASTROUTE", payload: "/OrderNewLand"});
        history("/ChoosePlace");
    }
    const toPrev = () => {
        history(lastRoute);
    }
    const toNextMap = () => {
        if ((numberOfLand + 1) === 10) {
            setNumberOfLand(1);
        }
        else {
            setNumberOfLand(numberOfLand+1);
        }  
    }
    const toPrevMap = () => {
        if (numberOfLand === 1) {
            setNumberOfLand(10);
        }
        else {
            setNumberOfLand(numberOfLand-1);
        }
    }
  return (
    <div className="order__land__modal__box">
        <div className="header">
            <div className="arrow_box">
                <div onClick={toPrev} className="arrow_example_1"></div>
            </div>
        </div>
        <div className="order__land__footer">
            <div className="choose__map">
                <div className="main__text">
                    CHOOSE THE MAP AND AREA
                </div>
                <div className="choose__map__box">
                    <div onClick={toPrevMap} className="arrow_example_2"></div>
                    <div className="text">
                        <div>LEGACY MAP</div>
                        <div className='text__colofour'>{numberOfLand} OF 10</div>
                    </div>
                    <div onClick={toNextMap} className="arrow_example_3"></div>
                </div>
            </div>
            <div className="price">
                <div className='price__box'>
                    <div>
                        LARGE AREA
                    </div>
                    <div>2250 $</div>
                </div>
            </div>
            <div className="information">
                <div className="information__box">
                    <div className="first__row">
                        <div className='content__div'>30 GB</div>
                        <div className='content__div'>Better Grave and Place</div>
                        <div className='content__div'>Possible DNA</div>
                    </div>
                    <div className="second__row">
                        <div className='content__div'>Possibility to be publicly displayed on the map</div>
                        <div className='content__div'>Privacy</div>
                    </div>
                    <div className="third__row">
                        <div className='content__div'>Possibility to add 15 members to your legacy room</div>
                    </div>
                </div>
            </div>
            <div className="cont__button">
                <button onClick={continueToNext}>CONTINUE</button>
            </div>
        </div>
    </div>
  );
}

export default OrderNewLand;