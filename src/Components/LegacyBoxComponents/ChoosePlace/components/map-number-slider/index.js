import { useEffect, useState } from 'react';
import './index.scss';

export const MapNumberSlider = ({number, onChange}) => {

    const [currStep, setCurrStep] = useState(0);

    const goToStep = (newStep) => {
        if (newStep - 1 !== number && newStep >= 0) {
            setCurrStep(newStep);
        } else {
            setCurrStep(0);
        }
    }
    useEffect(() => {
        onChange(currStep);
    }, [currStep]);

    return (
        <div className='number__slider'>
            <div className='number__slider-btn' onClick={() => goToStep(currStep - 1)}>{'<'}</div>
            <div className='number__slider-text'>
                <div className='number__slider-title'>legacy map</div>
                {currStep} / {number}
            </div>
            <div className='number__slider-btn' onClick={() => goToStep(currStep + 1)}>{'>'}</div>
        </div>
    )
}