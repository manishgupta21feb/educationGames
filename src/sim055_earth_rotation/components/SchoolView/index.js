import React from "react";
import Wrapper from "../Wrapper";
import Slider from "../../containers/SliderContainer";
import Sun from "../../containers/SunContainer";
import Flag from "../../containers/FlagContainer";
import Button from "../../../app/components/Button";

import cloud1 from "../../assets/images/clouds/cloud_1.png";
import cloud2 from "../../assets/images/clouds/cloud_2.png";
import cloud3 from "../../assets/images/clouds/cloud_3.png";
import cloud4 from "../../assets/images/clouds/cloud_4.png";

import "./schoolView.scss";

const schoolView = (props) => {
  const { sliderTitle, nextBtnText, resetActivity, updateSliderValue } = props;

  return (
    <Wrapper className="wrapper--wrap full-area">
      <h2 id="schoolViewHeading" className="paragraph gap">
        {sliderTitle}
      </h2>
      <div className="school">
        <div className={`cloud ${updateSliderValue == 2 ? "cloud--show" : ""}`}>
          <img src={cloud1} className="cloud__1" alt="" />
          <img src={cloud4} className="cloud__2" alt="" />
          <img src={cloud3} className="cloud__3" alt="" />
          <img src={cloud4} className="cloud__4" alt="" />
          <img src={cloud2} className="cloud__5" alt="" />
        </div>
        <Sun />
        <Flag />
        <Slider />
        <Button
          text={nextBtnText}
          classes="toast-secondary-button positive right-arrow"
          onClick={resetActivity}
          disabled={updateSliderValue === 0 ? true : false}
        />
      </div>
    </Wrapper>
  );
};

export default schoolView;
