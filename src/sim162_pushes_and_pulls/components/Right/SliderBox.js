import React from "react";
import Slider from "../../containers/SliderContainer";

export default (props) => {
  const { sliderTitle, onChange, value, disabled, altValue } = props;
  return (
    <div className="slider-box">
      <div className="slider-title">{sliderTitle}</div>
      <Slider
        disabled={disabled}
        altValueText={altValue || value}
        value={value}
        onChange={onChange}
      ></Slider>
    </div>
  );
};
