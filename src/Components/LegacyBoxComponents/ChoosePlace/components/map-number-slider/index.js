import { useEffect, useState } from 'react';
import './index.scss';

export const MapNumberSlider = ({number, onChange}) => {

    const [currStep, setCurrStep] = useState(1);

    const goToStep = (newStep) => {
        console.log(newStep);
        if (newStep === 11) {
            setCurrStep(1);
            return;
        }
        if (newStep === 0) {
            setCurrStep(10);
            return;
        } else {
            setCurrStep(newStep);
        }
    }
    useEffect(() => {
        onChange(currStep);
    }, [currStep]);

    return (
        <div className='number__slider'>
            <div className='number__slider-btn-prev' onClick={() => goToStep(currStep - 1)}></div>
            <div className='number__slider-text'>
                <div className='number__slider-title'>legacy map</div>
                {currStep} OF {number}
            </div>
            <div className='number__slider-btn-next' onClick={() => goToStep(currStep + 1)}></div>
        </div>
    )
}