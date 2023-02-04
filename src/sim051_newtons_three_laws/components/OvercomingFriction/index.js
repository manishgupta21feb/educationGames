import React, { useEffect, useRef, useState } from "react";
import Next from "../common/Next";
import PlayButton from "../common/PlayButton";
import SliderBox from "../common/SliderBox";
import Arrows from "../common/Arrows";
import "./style.scss";

export default (props) => {
  const {
    isPopupActive,
    screenInfo,
    selectedF1Value,
    onChange,
    btnSound,
    onIncorrect,
    onCorrect,
    resetF1Value,
    buttonLabels,
  } = props;
  const woodenBoxRef = useRef(null);
  const [animationState, setAnimationState] = useState(false);
  const [showNext, setShowNext] = useState(false);

  const onSliderChange = (value) => {
    setAnimationState(false);
    setShowNext(false);
    if (woodenBoxRef.current.classList.contains(`slide-` + selectedF1Value)) {
      woodenBoxRef.current.classList.remove(`slide-` + selectedF1Value);
      woodenBoxRef.current.classList.remove("box-pushed");
    }
    onChange(value);
  };

  const onNextClick = () => {
    btnSound();
    resetF1Value();
  };

  const onAnimationEnd = (e) => {
    setAnimationState(false);
    setShowNext(true);
    onCorrect(isPopupActive);
    if (woodenBoxRef.current) {
      woodenBoxRef.current.classList.add("box-pushed");
    }
  };

  const onClick = () => {
    EventManager.broadcast("SECONDARY_CLICK");
    if (selectedF1Value > 80) {
      setAnimationState(true);
    } else {
      onIncorrect();
    }
  };

  useEffect(() => {
    if (animationState) {
      setTimeout(() => {
        woodenBoxRef.current.classList.add("slide-" + selectedF1Value);
      }, 50);
    }
  }, [animationState]);

  return (
    <div className="overcoming-friction">
      <h1 className="heading heading-1">{screenInfo.title}</h1>
      <h2 className="heading heading-2">{screenInfo.infoText}</h2>
      <SliderBox
        value={selectedF1Value}
        sliderTitle={screenInfo.slider.title}
        altValue={screenInfo.slider.altText + selectedF1Value}
        onChange={onSliderChange}
        disabled={isPopupActive || animationState}
      ></SliderBox>
      <div
        ref={woodenBoxRef}
        className="wooden-box"
        onAnimationEnd={onAnimationEnd}
      >
        <img className="sr-only sr-image" alt={showNext ? screenInfo.altTextAfter : screenInfo.altText} />
      </div>
      {animationState || showNext ? null : (
        <Arrows
          selectedF1Value={selectedF1Value}
          leftText={screenInfo.leftText}
        ></Arrows>
      )}
      <div className="bottom-box"></div>
      <PlayButton
        text={buttonLabels.play}
        onClick={onClick}
        disabled={animationState || showNext}
        isPopupActive={isPopupActive}
      ></PlayButton>
      {showNext ? (
        <Next
          text={buttonLabels.next}
          isPopupActive={isPopupActive}
          onClick={onNextClick}
        ></Next>
      ) : null}
    </div>
  );
};
