import React, { useRef } from "react";
import Button from "../../../app/components/Button";
import "./style.scss";

const SecondScreen = ({
  secondScreenText,
  smallBeakedBirdTxt,
  largeBeakedBirdTxt,
  continueButtonLabels,
  isPopupActive,
  onSecondScreenContinue,
  SecondScreenImgAria,
}) => {
  const nextRef = useRef(null);

  return (
    <div className="SecondScreen">
      <div className="SecondScreenText">
        <p dangerouslySetInnerHTML={{ __html: secondScreenText }}></p>
      </div>
      <div
        role="img"
        className="SecondScreenImg sr-only sr-image"
        aria-label={SecondScreenImgAria}
      ></div>
      <div className="largeBeakedBirdTxt birdText">{largeBeakedBirdTxt}</div>
      <div className="smallBeakedBirdTxt birdText">{smallBeakedBirdTxt}</div>
      <div className="SecondScreenBtn">
        <Button
          text={continueButtonLabels}
          ref={nextRef}
          onClick={onSecondScreenContinue}
          hideTooltip={false}
          disabled={false}
          ariaHidden={false}
          isPopUpOpen={isPopupActive}
          classes="toast-secondary-button positive right-arrow"
        />
      </div>
    </div>
  );
};

export default SecondScreen;
