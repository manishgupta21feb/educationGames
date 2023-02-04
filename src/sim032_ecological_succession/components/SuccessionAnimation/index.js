import React, { useEffect, useState } from "react";
import Button from "../../../app/components/Button";
import EventManager from "../../../app/events/manager";
import Footer from "./Footer";
import InstructionTextBox from "../InstructionTextBox";
import "./style.scss";

export default (props) => {
  const {
    stopData,
    onNext,
    screenName,
    infoText,
    isPopupActive,
    animationAltText,
    finalStages,
    buttonNext,
  } = props;

  const [isDisabled, setIsDisabled] = useState(true);

  const onNextClick = () => {
    onNext(0);
  };

  useEffect(() => {
    let timer = setTimeout(() => setIsDisabled(false), 13000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`${screenName}-animation`}>
      <InstructionTextBox instructionText={infoText}></InstructionTextBox>
      <div className="label-container">
        {stopData.map((stop, index) => {
          return (
            <div key={index} className={`label-wrapper ${stop.name}`}>
              <p>{stop.buttonText}</p>
            </div>
          );
        })}
      </div>
      <div className={`${screenName}-img`}>
        <img className="sr-only sr-image" alt={animationAltText} />
        {stopData.map((stop, index) => {
          return (
            <div aria-hidden={true} key={index} className={`anim${index + 1}`}>
              <div className={`stop stop${index + 1}`}></div>
            </div>
          );
        })}
      </div>
      <Footer finalStages={finalStages}></Footer>
      <Button
        text={buttonNext}
        onClick={onNextClick}
        airaHidden={isPopupActive}
        isPopupActive={isPopupActive}
        disabled={isDisabled || isPopupActive}
        classes={`next-btn toast-secondary-button positive right-arrow`}
      ></Button>
    </div>
  );
};
