import React from "react";
import ContinueButton from "./ContinueButton";
import RunButton from "./RunButton";
import SliderBox from "./SliderBox";
import "./style.scss";

export default (prosp) => {
  const {
    isPopupActive,
    instruction,
    sliderLabel,
    buttonLabels,
    onChange,
    selectedValue,
    onRun,
    onContinue,
    runState,
    videoPlayed,
  } = prosp;

 const onRunClick = () => {
    onRun();
  };

  const onContinueClick = () => {
    onContinue();
  };

  const onSliderChange = (value) => {
    onChange(value);
  };

  return (
    <div className="right-container">
      <h2 className="instruction">{instruction}</h2>
      <SliderBox
        value={selectedValue.value}
        sliderTitle={sliderLabel}
        altValue={sliderLabel + " " +selectedValue.value}
        onChange={onSliderChange}
        disabled={isPopupActive}
      ></SliderBox>
      <RunButton
        text={buttonLabels.run}
        onClick={onRunClick}
        isPopupActive={isPopupActive}
        disabled={runState}
      />
      {videoPlayed.length > 2 ? (
        <ContinueButton
          text={buttonLabels.finish}
          onClick={onContinueClick}
          isPopupActive={isPopupActive}
        />
      ) : null}
    </div>
  );
};
