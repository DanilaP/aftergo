import './ChooseTombstone.scss';
import store from '../../../store';
import tombstone from '../../../Icons/tombstoneExample.png';
import { getAllTombstonesInfo } from '../../../Api/request';
import { useState } from 'react';
import customStone from '../../../Icons/customStone.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function ChooseTombstone() {
    const history = useNavigate();
    const [numberOfTomb, setNumberOfTomb] = useState(1);
    const [tombImage, setTombImage] = useState(tombstone);
    const lastRoute = useSelector(store => store.lastRoute);
    const [imagesMassive, setImagesMassive] = useState([
        tombstone, tombstone, tombstone, tombstone, tombstone, customStone
    ]);

    const continueToNext = () => {
        if (numberOfTomb == 6) {
            store.dispatch({type: "LASTROUTE", payload: "/ChooseTombstone"});
            history("/CustomTombstoneDesign");
        }
        else {
            store.dispatch({type: "LASTROUTE", payload: "/ChooseTombstone"});
            history("/ChooseLegacyRoom");
        }
    }
    const toPrev = () => {
        history(lastRoute);
    }
    useEffect(() => {
        getAllTombstonesInfo()
        store.dispatch({type: "LASTROUTE", payload: "/ChoosePlace"});
    }, [])
    const chooseTomb = (vector) => {
        if (vector == "prev") {
            if (numberOfTomb === 1) {
                setNumberOfTomb(6);
            }
            else {
                setNumberOfTomb(numberOfTomb-1);
            }
        }
        else if (vector == "next") {
            if (numberOfTomb === 6) {
                setNumberOfTomb(1);
            }
            else {
                setNumberOfTomb(numberOfTomb+1);
            }
        }
    }
  return (
    <div className="choose__tombstone__modal__box">
        <div className="header">
            <div className="arrow_box">
                <div onClick={toPrev} className="arrow_example_1"></div>
            </div>
        </div>
        <div className="choose__tombstone__slider">
            <div className="slider__images">
                <div className='header'>CHOOSE TOMBSTONE</div>
                <div className="slider">
                    <button className='first__btn' onClick={() => chooseTomb("prev")}>
                        {`<`}
                    </button>
                    <div className="slider__image">
                        <img src = {tombImage} />
                    </div>
                    <button className='second__btn' onClick={() => chooseTomb("next")}>
                        {`>`}
                    </button>
                    <div className='number__of__tombstone'>
                        <div>MOON</div>
                        <div className='number'>{numberOfTomb} OF 6</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="cont__button">
            <button onClick={continueToNext}>CONTINUE</button>
        </div>
    </div>
  );
}

export default ChooseTombstone;