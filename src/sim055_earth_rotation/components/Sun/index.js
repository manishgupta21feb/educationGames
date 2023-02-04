import React, { useEffect, useState, useRef } from "react";
import "./sun.scss";

const Sun = (props) => {
  const { sliderValue } = props;

  const sliderValueRef = useRef(sliderValue);

  const [currentState, setCurrentState] = useState({
    animClass: "sun-0-0",
  });

  useEffect(() => {
    setCurrentState(dynamicValues(sliderValue));
    sliderValueRef.current = sliderValue;
  }, [sliderValue]);

  const dynamicValues = (sliderVal) => {
    let gapBetweenPoints = Math.abs(sliderValueRef.current - sliderVal);
    let animClass = `sun-${sliderValueRef.current}-${sliderVal}`;

    return {
      animClass,
      duration: 0.15 * gapBetweenPoints,
    };
  };

  return (
    <div
      className={`animation-container ${currentState.animClass}`}
      style={{ animationDuration: currentState.duration + "s" }}
    >
      <div className={`sun`}></div>
    </div>
  );
};

export default Sun;
