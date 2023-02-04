import React from "react";
import Slider from "../../containers/SliderContainer";
import "./main.scss";

const SliderComponent = ({ sliderHeading, isPopupActive }) => {
  return (
    <div className="main_holder">
      <div className="sliderHolder" aria-hidden={isPopupActive}>
        <p className="speed-and-force" id="speed-and-force">
          {sliderHeading}
        </p>
        <Slider />
      </div>
    </div>
  );
};

export default SliderComponent;
