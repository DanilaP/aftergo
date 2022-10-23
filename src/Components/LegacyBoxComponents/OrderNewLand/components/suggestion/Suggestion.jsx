import React from "react";
import "./suggestion.scss";

export const Suggestion = ({ text, classname }) => {
  return <div className={`suggestion ${classname}`}>{text}</div>;
};
