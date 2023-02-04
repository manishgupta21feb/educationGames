import React from "react";
import SliderContainer from "../../containers/SliderContainer";

export default (props) => {
  const { sliderTitle, onChange, value, disabled, altValue } = props;
  return (
    <div className="slider-cont">
      <div className="slider-title">{sliderTitle}</div>
      <SliderContainer
        disabled={disabled}
        altValueText={altValue || value}
        value={value}
        onChange={onChange}
      ></SliderContainer>
    </div>
  );
};
