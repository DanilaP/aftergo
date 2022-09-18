import './LegacyBoxSettings.scss';
import store from '../../store';
import { useSelector } from 'react-redux';
import tombstone from '../../Icons/tombstoneExample.png';
import map from '../../Icons/map.png';
import legacy__room__1 from '../../Icons/legacy__room__1.png';
import { useState } from 'react';
import questionIcon from '../../Icons/questionIcon.png';
import { useNavigate } from 'react-router-dom';

function LegacyBoxSettings() {
    const history = useNavigate();
    const [checkboxActiveFirst, setCheckBoxActiveFirst] = useState(false);
    const [checkboxActiveSecond, setCheckBoxActiveSecond] = useState(false);
    const [checkboxActiveThird, setCheckBoxActiveThird] = useState(false);
    const continueToNext = () => {
        
    }
    const toPrev = () => {
        //store.dispatch({type: "LEGACYBOXSETTINGS", payload: false});
        //store.dispatch({type: "CHOOSELEGACYROOMMODALBOX", payload: true});
        history("/ChooseLegacyRoom");
    }
    const activeFirstCheckbox = () => {
        checkboxActiveFirst ? setCheckBoxActiveFirst(false) : setCheckBoxActiveFirst(true);
    }   
    const activeSecondCheckbox = () => {
        checkboxActiveSecond ? setCheckBoxActiveSecond(false) : setCheckBoxActiveSecond(true);
    }
    const activeThirdCheckbox = () => {
        checkboxActiveThird ? setCheckBoxActiveThird(false) : setCheckBoxActiveThird(true);
    }
  return (
    <div className='legacy__main__box'>
        <div className="header">
            <div className="arrow_box">
                <div onClick={toPrev} className="arrow_example_1"></div>
            </div>
        </div>
        <div className="legacyBoxSetting__modal__box">
            <div className="legacySetting">
                <div className="legacy__images">
                    <img className='map' src = {map} /> 
                    <div className='legacy__tomb__and__room'>
                        <img className='tomb' src = {tombstone} />
                        <img className='tomb' src = {legacy__room__1} />
                    </div>
                </div>
                <div className="legacy__info">
                    <div className="main__info">
                        <div className="grid__part__of__info">
                            <div className='div__info'>8th map Selected</div>
                            <div className='div__info__question'>Large Land (30 GB) 2 250$ <div><img src = {questionIcon}/></div></div>
                            <div className='div__info'>Tombstone: Moon Free</div>
                            <div className='div__info'>Legacy room Free</div>
                        </div>
                        <div className="flex__part__of__info">
                            <div className='flex__div__info'>Possibility to add 15 members to your legacy room</div>
                        </div>
                    </div>
                    <div className="addition__info">
                        <div className='box__with__checkboxes'>
                            <div className='checkbox__div'>
                                <button onClick={activeFirstCheckbox} className='input__checkbox'>
                                    <img className={checkboxActiveFirst ? 'image1 active1' : 'image1'}/>
                                </button>
                                <label>Create NFT</label>
                            </div>
                            <div className='checkbox__div'>
                                <button onClick={activeSecondCheckbox} className='input__checkbox'>
                                    <img className={checkboxActiveSecond ? 'image2 active2' : 'image2'}/>
                                </button>
                                <label>Public 50$</label>
                            </div>
                            <div className='checkbox__div'>
                                <button onClick={activeThirdCheckbox} className='input__checkbox'>
                                    <img className={checkboxActiveThird ? 'image3 active3' : 'image3'}/>
                                </button>
                                <label>DNA</label>
                            </div>
                        </div>
                        <div className='box__with__price'>
                            <div className = "price__text">Cost: </div><label>2 250$</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LegacyBoxSettings;