import React from "react";
import Slider from "../../containers/SliderContainer";
import Button from "../../../app/components/Button";
import "./main.scss";

const SliderComponent = ({
  sliderHeading,
  isPopupActive,
  updateWarForce,
  testBtnText,
  isActivityRunning,
}) => {
  return (
    <div className="main_holder">
      <div
        className="sliderHolder"
        aria-hidden={isPopupActive || isActivityRunning}
      >
        <p className="speed-and-force" id="speed-and-force">
          {sliderHeading}
        </p>
        <Slider />
      </div>
      <Button
        text={testBtnText}
        ariaLable={testBtnText}
        ariaHidden={isPopupActive || isActivityRunning}
        hideTooltip={false}
        classes={`positive primary testBtn`}
        onClick={() => {
          updateWarForce();
        }}
        isPopupActive={isPopupActive || isActivityRunning}
        isPopUpOpen={isActivityRunning}
        disabled={isPopupActive || isActivityRunning}
      />
    </div>
  );
};

export default SliderComponent;
