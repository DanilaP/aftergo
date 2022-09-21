import './ChooseTombstone.scss';
import store from '../../store';
import tombstone from '../../Icons/tombstoneExample.png';
import { useState } from 'react';
import customStone from '../../Icons/customStone.png';
import { useNavigate } from 'react-router-dom';

function ChooseTombstone() {
    const history = useNavigate();
    const [numberOfTomb, setNumberOfTomb] = useState(1);
    const [tombImage, setTombImage] = useState(tombstone);
    const [imagesMassive, setImagesMassive] = useState([
        tombstone, tombstone, tombstone, tombstone, tombstone, customStone
    ]);

    const continueToNext = () => {
        if (numberOfTomb == 6) {
            history("/CustomTombstoneDesign");
        }
        else {
            history("/ChooseLegacyRoom");
        }
    }
    const toPrev = () => {
        history("/ChoosePlace");
    }
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
                    <button className='first__btn'>
                        <div onClick={() => chooseTomb("prev")} className="arrow_example_1"></div>
                    </button>
                    <div className="slider__image">
                        <img src = {tombImage} />
                    </div>
                    <button className='second__btn'>
                        <div onClick={() => chooseTomb("next")} className="arrow_example_1"></div>
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