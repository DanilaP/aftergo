import './Cropper.scss';
import { useNavigate } from 'react-router-dom';
import store from '../../store';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ReactCrop from 'react-image-crop'
import { useEffect } from 'react';
import 'react-image-crop/dist/ReactCrop.css';
import { useRef } from 'react';
import {getCroppedImg} from '../Utils/CropUtil';

function Cropper() {
    const imageUrl = useSelector(store => store.userImage);
    const image = useRef();
    const [crop, setCrop] = useState({
        unit: 'px',
        x: 25,
        y: 25,
        width: 380,
        height: 500,
      })
    useEffect(() => {
        console.log(crop)
    }, [crop])
    const saveImg = async () => {
        const croppedImg = await getCroppedImg(image.current, crop, 'cropped.jpg');
        console.log(croppedImg);
    }
  return (
    <div className='cropper__modal__box'>
        <div className="crop__box">
            <div className="header">
                FRAMING
            </div>
            <ReactCrop minHeight={200} minWidth = {200} maxWidth = {400} maxHeight = {400} 
                crop = {crop} onChange = {(e) => setCrop(e)}>
                <img crossOrigin="anonymous" ref = {image} width={380} height = {500} src = {imageUrl}/>
            </ReactCrop>
            <button onClick={saveImg}>SELECT</button>
        </div>
    </div>
  );
}

export default Cropper;