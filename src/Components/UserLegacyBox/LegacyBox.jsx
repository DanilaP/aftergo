import './LegacyBox.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import $api from '../Axios';
import store from '../../store';
import { useSelector } from 'react-redux';
import legacy__room from '../../Icons/legacy__room__4.png';
import file__img from '../../Icons/file__image.png'
import map from '../../Icons/map.png';
import tomb from '../../Icons/tombstoneExample.png';

function LegacyBox() {
    const history = useNavigate();
      
  return (
    <div className="user__legacy__box">
        <div className="mini__menu">
            <div className="profile__button">Profile</div>
            <div className="aboutUs__button">About us</div>
            <div className="support__button">Support</div>
        </div>
        <div className="legacy__box__main">
            <div className="file__box">
                <div><img src = {file__img}/></div>
                <div><img src = {file__img}/></div>
                <div><img src = {file__img}/></div>
                <div><img src = {file__img}/></div>
                <div><img src = {file__img}/></div>
                <div><img src = {file__img}/></div>
                <div><img src = {file__img}/></div>
                <div><img src = {file__img}/></div>
            </div>
            <div className="info__box">
                <div className='information'>
                    <div className="info__elem">8th map</div>
                    <div className="info__elem">Legacy room</div>
                    <div className="info__elem">Large land</div>
                    <div className="info__elem">Tombstone: moon</div>
                </div>
                <div className="legacy__storage__size">
                    <progress max={100} value = {20}></progress>
                    <div>free 24 GB of 30 GB</div>
                </div>
                <div className="images__stone__map">
                    <img className='map__img' src = {map} />
                    <img src = {tomb} />
                </div>
                <div className="images__room">
                    <img src = {legacy__room}/>
                </div>
            </div>
            <div className="redaction__buttons">
                <div className='new__folder'>
                    + New folder
                </div>
                <button>UDPLOAD FILES</button>
                <button>UDPLOAD FROM LINK</button>
            </div>
            <div className="navigate__buttons">
                <button>VISIT CEMETRY</button>
                <button>ORDER NEW LAND</button>
            </div>
        </div>
    </div>
  );
}

export default LegacyBox;