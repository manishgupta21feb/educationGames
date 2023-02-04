import React, { useEffect, useRef, useState } from "react";
import Arrows from "../common/Arrows";
import Next from "../common/Next";
import PlayButton from "../common/PlayButton";
import SliderBox from "../common/SliderBox";
// import Arrows from "./Arrows";
import "./style.scss";

export default (props) => {
  const {
    isPopupActive,
    screenInfo,
    buttonLabels,
    selectedF1Value,
    selectedF2Value,
    onF1Change,
    onF2Change,
    btnSound,
    onIncorrect,
    onCorrect,
    resetF1F2Value,
  } = props;

  const woodenBoxRef = useRef(null);
  const [animationState, setAnimationState] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [boxAltText, setBoxAltText] = useState("");

  useEffect(() => {
    setBoxAltText(screenInfo.altText);
  }, []);

  const onSliderF1Change = (value) => {
    setAnimationState(false);
    setShowNext(false);
    onF1Change(value);
    const res = selectedF1Value - selectedF2Value;
    const className = res > 0 ? "slide-left-" + res : "slide-right" + res;
    if (woodenBoxRef.current.classList.contains(className)) {
      woodenBoxRef.current.classList.remove(className);
      woodenBoxRef.current.classList.remove("box-pushed-left");
      woodenBoxRef.current.classList.remove("box-pushed-right");
    }
    setBoxAltText(screenInfo.altTextDynamic.replace("-1-", value).replace("-2-", selectedF2Value));
  };

  const onSliderF2Change = (value) => {
    setAnimationState(false);
    setShowNext(false);
    onF2Change(value);
    const res = selectedF1Value - selectedF2Value;
    const className = res > 0 ? "slide-left-" + res : "slide-right" + res;
    if (woodenBoxRef.current.classList.contains(className)) {
      woodenBoxRef.current.classList.remove(className);
      woodenBoxRef.current.classList.remove("box-pushed-left");
      woodenBoxRef.current.classList.remove("box-pushed-right");
    }
    setBoxAltText(screenInfo.altTextDynamic.replace("-1-", selectedF1Value).replace("-2-", value));
  };

  const onNextClick = () => {
    btnSound();
    resetF1F2Value();
  };

  const onAnimationEnd = (e) => {
    setAnimationState(false);
    setShowNext(true);
    onCorrect(isPopupActive);
    if (woodenBoxRef.current) {
      const className =
        selectedF1Value - selectedF2Value > 0
          ? "box-pushed-left"
          : "box-pushed-right";
      woodenBoxRef.current.classList.add(className);
      setBoxAltText(
        selectedF1Value - selectedF2Value > 0
          ? screenInfo.altTextLeft
          : screenInfo.altTextRight
      );
    }
  };

  const onClick = () => {
    EventManager.broadcast("SECONDARY_CLICK");
    const res = selectedF1Value - selectedF2Value;
    if (res !== 0) {
      setAnimationState(true);
    } else {
      onIncorrect();
    }
  };

  useEffect(() => {
    if (animationState) {
      const res = selectedF1Value - selectedF2Value;
      const className = res > 0 ? "slide-left-" + res : "slide-right" + res;
      woodenBoxRef.current.classList.add(className);
    }
  }, [animationState]);

  return (
    <div className="net-force">
      <h1 className="heading heading-1">{screenInfo.title}</h1>
      <h2 className="heading heading-2">{screenInfo.infoText}</h2>
      <div className="slider-wrapper">
        <SliderBox
          value={selectedF1Value}
          sliderTitle={screenInfo.slider.title1}
          altValue={screenInfo.slider.altText1 + selectedF1Value}
          onChange={onSliderF1Change}
          disabled={isPopupActive || animationState}
        ></SliderBox>
        <SliderBox
          value={selectedF2Value}
          sliderTitle={screenInfo.slider.title2}
          altValue={screenInfo.slider.altText2 + selectedF2Value}
          onChange={onSliderF2Change}
          disabled={isPopupActive || animationState}
        ></SliderBox>
      </div>
      <div
        ref={woodenBoxRef}
        className="wooden-box"
        onAnimationEnd={onAnimationEnd}
      >
        <img className="sr-only sr-image" alt={boxAltText} />
      </div>
      {animationState || showNext ? null : (
        <Arrows
          selectedF1Value={selectedF1Value}
          selectedF2Value={selectedF2Value}
          leftText={screenInfo.leftText}
          rightText={screenInfo.rightText}
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
