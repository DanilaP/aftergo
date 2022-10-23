import { useState, useEffect } from "react";
import './index.scss';
import { generateCountStepsArray } from "./helper";

export const Stepper = ({ currentStep, allStep }) => {

    const [steps, setSteps] = useState(generateCountStepsArray(allStep));

    useEffect(() => {
        setSteps({
            ...steps,
            [currentStep]: {...steps[currentStep], status: true}
        })
    }, [currentStep]);
    return (
        <div className="stepper__wrapper">
            {
                Object.values(steps).map(el => (
                    <div className={`stepper__wrapper-${el.status ? 'activeStep' : 'defaultStep'}`}></div>
                ))
            }
        </div>
    )
}