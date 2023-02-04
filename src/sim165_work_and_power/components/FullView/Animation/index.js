import React, { useEffect, useState } from "react";
import Button from "../../../../app/components/Button";
import "./style.scss";

const Animation = (props) => {
  const {
    postureDirection,
    animationData,
    animationEnd,
    begunAnimation,
    isPopupActive,
    disableButton,
    postureForce,
    sliderValue,
    sectionData,
    resetSection,
    onceDone,
    imgAltText,
    pushButtonLabel,
    buttonContent,
  } = props;

  let _sliderValue = sectionData == "work" ? sliderValue : 3;

  let durationBoxManAnim = sectionData == "work" ? 3.6 : 4.8;

  let durationBoxTime = sectionData == "work" ? 4 : 4;

  let perFrameValue = sectionData == "work" ? 86 : 115;

  useEffect(() => {
    if (postureForce && postureDirection) {
      setTimeout(() => {
        setPushBtn(true);
      }, 500);
    }
  }, [postureForce, postureDirection, sliderValue]);

  const totalSteps = 36;
  const baseSpriteLength = 15696;

  const equalDivideSprite =
    sectionData == "work" ? baseSpriteLength / 4 : baseSpriteLength / 3;

  const equalDivideTime =
    sectionData == "work" ? totalSteps / 4 : totalSteps / 3;

  const frameReducer = () => {
    if (_sliderValue) {
      if (
        equalDivideSprite * _sliderValue >
        baseSpriteLength - baseSpriteLength / 36
      ) {
        return baseSpriteLength - baseSpriteLength / 36;
      } else {
        return equalDivideSprite * _sliderValue;
      }
    }
  };
  document.documentElement.style.setProperty(
    "--upAnimDirection",
    `-${frameReducer()}px`
  );
  document.documentElement.style.setProperty(
    "--downAnimDirection",
    `-${frameReducer()}px`
  );
  const [pushBtn, setPushBtn] = useState(false);

  let hideBox =
    postureDirection == "Up" || postureDirection == "Down" ? "animation" : "";

  let boxMovementLeft = {
    transitionDuration: `${sliderValue ? sliderValue / durationBoxTime : 0}s`,
    left: `calc(400px - ${perFrameValue}px * ${
      _sliderValue ? _sliderValue : 1
    })`,
  };

  let boxMovementRight = {
    transitionDuration: `${sliderValue ? sliderValue / durationBoxTime : 0}s`,
    left: `calc(400px + ${perFrameValue}.6666px * ${
      _sliderValue ? _sliderValue : 1
    })`,
  };

  let upSpriteAnimation = {
    animationDuration: `${sliderValue ? sliderValue / durationBoxManAnim : 0}s`,
    animationTimingFunction: `steps(${
      _sliderValue
        ? equalDivideTime * _sliderValue > 35
          ? 35
          : equalDivideTime * _sliderValue
        : 0
    })`,
  };
  console.log(
    "boxMovementLeft",
    boxMovementLeft,
    "boxMovementRight",
    boxMovementRight
  );

  let boxAnimate =
    begunAnimation && postureDirection == "Left"
      ? boxMovementLeft
      : begunAnimation && postureDirection == "Right"
      ? boxMovementRight
      : {};

  const animationEndHandler = () => {
    animationEnd(false);
  };

  return (
    <>
      <div className="animation---parent">
        <div
          className="sr-only sr-Boundary"
          role="img"
          aria-label={imgAltText}
        />
        <div
          className={`animation--defaultStand ${
            postureDirection ? "animation" : ""
          }`}
        ></div>
        <div
          className={`animation animation--left ${
            postureDirection == "Left" ? "animation--active" : ""
          } ${
            begunAnimation && sliderValue != 0
              ? "animation--menLeftAnimation"
              : ""
          }`}
        ></div>
        <div
          className={`animation animation--right ${
            postureDirection == "Right" ? "animation--active" : ""
          } ${
            begunAnimation && sliderValue != 0
              ? "animation--menRightAnimation"
              : ""
          }`}
        ></div>
        <div
          className={`animation animation--up  ${
            postureDirection == "Up" ? "animation--active" : ""
          } ${begunAnimation ? "animation--menUpAnimation" : ""}`}
          style={begunAnimation ? upSpriteAnimation : null}
          onAnimationEnd={() => {
            animationEndHandler();
          }}
        ></div>
        <div
          className={`animation animation--down ${
            postureDirection == "Down" ? "animation--active" : ""
          } ${begunAnimation ? "animation--menDownAnimation" : ""}`}
          style={begunAnimation ? upSpriteAnimation : null}
          onAnimationEnd={() => {
            animationEndHandler();
          }}
        ></div>
        <div
          className={`animation--box ${hideBox} `}
          style={begunAnimation && sliderValue ? boxAnimate : null}
          onTransitionEnd={() => {
            animationEndHandler();
          }}
        ></div>
      </div>
      <Button
        text={pushButtonLabel.push}
        classes={`btn primary push-position`}
        onClick={() => {
          animationData(true);
          setPushBtn(false);
          if (!sliderValue) animationEnd(false);
        }}
        ariaLable={pushButtonLabel.push}
        ariaHidden={isPopupActive}
        hideTooltip={false}
        isPopUpOpen={isPopupActive}
        disabled={isPopupActive || !pushBtn}
        key={`locationBtn_${1}`}
      />
      <Button
        text={buttonContent}
        classes={`btn toast-secondary-button positive next-position right-arrow ${
          !onceDone ? "hide-internal" : "show-internal"
        }`}
        onClick={() => {
          resetSection();
        }}
        ariaLable={buttonContent}
        ariaHidden={isPopupActive}
        hideTooltip={false}
        isPopUpOpen={isPopupActive}
        disabled={isPopupActive || !onceDone || disableButton}
        key={`locationBtn_${2}`}
      />
    </>
  );
};

export default Animation;
