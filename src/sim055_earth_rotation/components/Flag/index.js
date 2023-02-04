import React, { useState, useEffect, useRef } from "react";
import "./flag.scss";

const Flag = (props) => {
  const { sliderValue } = props;

  const sliderValueRef = useRef(sliderValue);

  const [currentState, setCurrentState] = useState({
    animClass: "shadow-0-0",
  });

  useEffect(() => {
    setCurrentState(dynamicValues(sliderValue));
    sliderValueRef.current = sliderValue;
  }, [sliderValue]);

  const dynamicValues = (sliderVal) => {
    let gapBetweenPoints = Math.abs(sliderValueRef.current - sliderVal);
    let animClass = `shadow-${sliderValueRef.current}-${sliderVal}`;

    return {
      animClass,
      duration: 0.15 * gapBetweenPoints,
    };
  };
  return (
    <div className="flag">
      <div
        className={`flag__shadow ${currentState.animClass}`}
        style={{ animationDuration: currentState.duration + "s" }}
      ></div>
    </div>
  );
};

export default Flag;
