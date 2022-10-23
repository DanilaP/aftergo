import { useEffect, useState } from "react";
import "./index.scss";
import arrowLeft from "../../../../../Icons/arrow-left.png";
import arrowRight from "../../../../../Icons/arrow-right.png";

export const StringSlider = ({ array, onChange }) => {
  const [currStep, setCurrStep] = useState(0);

  const goToStep = (newStep) => {
    if (newStep !== array.length && newStep >= 0) {
      setCurrStep(newStep);
    } else {
      setCurrStep(0);
    }
  };
  useEffect(() => {
    onChange(array[currStep], currStep);
  }, [currStep, array]);

  return (
    <div className="string__slider">
      <div
        className="string__slider-btn"
        onClick={() => goToStep(currStep - 1)}
      >
        <img src={arrowLeft} alt="prev slide" />
      </div>
      <div className="string__slider-text">{array[currStep]?.type}</div>
      <div
        className="string__slider-btn"
        onClick={() => goToStep(currStep + 1)}
      >
        <img src={arrowRight} alt="next slide" />
      </div>
    </div>
  );
};
