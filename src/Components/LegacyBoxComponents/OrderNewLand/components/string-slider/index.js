import { useEffect, useState } from 'react';
import './index.scss';

export const StringSlider = ({array, onChange}) => {

    const [currStep, setCurrStep] = useState(0);

    const goToStep = (newStep) => {
        if (newStep !== array.length && newStep >= 0) {
            setCurrStep(newStep);
        } else {
            setCurrStep(0);
        }
    }
    useEffect(() => {
        onChange(array[currStep]);
    }, [currStep]);

    return (
        <div className='string__slider'>
            <div className='string__slider-btn' onClick={() => goToStep(currStep - 1)}>{'<'}</div>
            <div className='string__slider-text'>{array[currStep]?.name}</div>
            <div className='string__slider-btn' onClick={() => goToStep(currStep + 1)}>{'>'}</div>
        </div>
    )
}