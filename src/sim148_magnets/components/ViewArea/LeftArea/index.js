import React, { useRef, useEffect } from "react";
import Button from "../../../../app/components/Button";
import DescriptionContainer from "../../../containers/DescriptionContainer";
import Slider from "../../../containers/SliderContainer";
import "./style.scss";
const index = (props) => {
  const {
    onClick,
    description,
    mcqShow,
    secondScreen,
    sliderValue,
    buttonLabel,
    isPopupActive,
    imageAltText,
  } = props;
  const buttonRef = useRef(null);
  useEffect(() => {
    if (!description) {
      if (buttonRef.current) {
        buttonRef.current.focus();
      }
    }
  }, [description]);
  return (
    <div className="left-area">
      <img className="sr-only sr-image" alt={imageAltText} />
      <div className="slider">
        <div aria-hidden className="bg-color" />
        <Slider />
      </div>
      <div
        aria-hidden="true"
        className={`thingimg ${
          !secondScreen ? `pin-image ` : `coin-image `
        } slider${sliderValue}`}
      />
      <div aria-hidden="true" className={`magnet-image slider${sliderValue}`} />

      {!mcqShow ? (
        <div className="glowing-button">
          <Button
            ref={buttonRef}
            classes={`btn icon-only glowing-hotspot ${
              description ? "selected" : ""
            }`}
            onClick={onClick}
            label={buttonLabel}
            disabled={isPopupActive}
          />
        </div>
      ) : null}
      {description ? (
        <>
          <div className="lineOne" />
          <div className="lineTwo" />
          <div className="dot" />
          <DescriptionContainer />
        </>
      ) : null}
    </div>
  );
};

export default index;
