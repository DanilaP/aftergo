import { useState, useEffect } from "react";
import './index.scss';
import { generateCountStepsArray } from "./helper";

export const Stepper = ({ currentStep, allStep }) => {

    const [steps, setSteps] = useState(generateCountStepsArray(allStep));

    return (
        <div className="stepper__wrapper">
            {
                steps.map(el => (
                    <div className="stepper__wrapper-activeStep"></div>
                ))
            }
        </div>
    )
}