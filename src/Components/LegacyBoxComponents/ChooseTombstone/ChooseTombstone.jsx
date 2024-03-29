import './ChooseTombstone.scss';
import store from '../../../store';
import tombstone from '../../../Icons/tombstoneExample.png';
import { useState } from 'react';
import { getAllTombstonesInfo } from '../../../Api/request';
import customStone from '../../../Icons/customStone.png';
import { GoBackButton } from '../OrderNewLand/components/go-back-button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function ChooseTombstone() {
    const history = useNavigate();
    const dispatch = useDispatch();
    const [numberOfTomb, setNumberOfTomb] = useState(1);
    const [tombImage, setTombImage] = useState(tombstone);
    const lastRoute = useSelector(store => store.lastRoute);
    const [imagesMassive, setImagesMassive] = useState([
        tombstone, tombstone, tombstone, tombstone, tombstone, customStone
    ]);

    const continueToNext = () => {
        dispatch({ type: "SET_SELECTED_TOMBSTONE", payload: imagesMassive[numberOfTomb - 1] });
        dispatch({ type: "LASTROUTEMENU", payload: '/ChooseTombStone' });
        if (numberOfTomb === imagesMassive.length) {
            history("/CustomTombstoneDesign");
        } else {
            history("/LegacyBoxSettingFULL");
        }
    }
    const toPrev = () => {
        history(lastRoute);
    }
    useEffect(() => {
        /*getAllTombstonesInfo().then(res => {
            setImagesMassive([...res.data, ...res.data]);
        });*/
        dispatch({ type: "LASTROUTEMENU", payload: '/ChooseLand' });
    }, [])
    const chooseTomb = (vector) => {
        if (vector === "prev") {
            if (numberOfTomb === 1) {
                setNumberOfTomb(imagesMassive.length);
                return;
            }
            else {
                setNumberOfTomb(numberOfTomb-1);
                return;
            }
        }
        else if (vector === "next") {
            if (numberOfTomb === imagesMassive.length) {
                setNumberOfTomb(1);
                return;
            }
            else {
                setNumberOfTomb(numberOfTomb+1);
                return;
            }
        }
    }
  return (
    <div className="choose__tombstone__modal__box">
        <div className="header">
            <GoBackButton />
        </div>
        <div className="media__div">
        <div className="choose__tombstone__slider">
            <div className="slider__images">
                <div className='header'>CHOOSE TOMBSTONE</div>
                <div className="slider">
                    <button className='first__btn' onClick={() => chooseTomb("prev")}>
                        {`<`}
                    </button>
                    <div className="slider__image">
                        <img src = {imagesMassive[numberOfTomb - 1]} />
                    </div>
                    <button className='second__btn' onClick={() => chooseTomb("next")}>
                        {`>`}
                    </button>
                    <div className='number__of__tombstone'>
                        <div>MOON</div>
                        <div className='number'>{numberOfTomb} OF {imagesMassive.length}</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="cont__button__1">
            <button onClick={continueToNext}>CONTINUE</button>
        </div>
        </div>
    </div>
  );
}

export default ChooseTombstone;