import React, { useEffect, useRef } from "react";
import data from "../../../data";
import Stepper from "../../../containers/Stepper";
import RightContainer from "../../../containers/Right";
import ButtonContinue from "../../../containers/ButtonContinue";
import SubmitAnswer from "../../../containers/SubmitAnswer";
import "./style.scss";

const Right = (props) => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const {
    instruction,
    currentMolarity,
    currentVolume,
    desiredMolarity,
    amountSolvent,
    stepperValue,
    stepperCheck,
    currentMolarityText,
    currentVolumeText,
    desiredMolarityText,
    onClick,
    answer,
    correctButton,
    correctAttempted,
    isDisabled,
    onClick2,
    correct,
    onStepperChange,
    ariaLiveText,
    data,
  } = props;

  const _onChange = (count) => {
    let liveText = "";
    ariaLiveText(" ");
    clearTimeout(ref.current);
    clearTimeout(ref1.current);
    if (stepperValue - count < 0) {
      liveText = `${data.incrementLiveText} ${count}`;
    } else {
      liveText = `${data.decrementLiveText} ${count}`;
    }
    ref1.current = setTimeout(() => {
      ariaLiveText(liveText);
    }, 100);
    ref.current = setTimeout(() => {
      ariaLiveText(" ");
    }, 500);
    onStepperChange(count);
  };

  return (
    <div className="right-view">
      <p className="right-content">{instruction}</p>
      <div className="molarity">
        <p className="currentMolarity">{currentMolarityText}</p>
        <p className="currentMolarityValue"> {currentMolarity}</p>
      </div>
      <div className="volume">
        <p className="currentVolume">{currentVolumeText} </p>
        <p className="currentVolumeValue">{currentVolume}</p>
      </div>
      <div className="desired">
        <p className="desiredMolarity">{desiredMolarityText}</p>
        <p className="desiredMolarityValue">{desiredMolarity}</p>
      </div>

      <Stepper
        initialValue={0}
        classes={correct}
        onChange={_onChange}
        reset={!stepperValue}
        countValue={stepperValue}
        disabled={correctAttempted}
      />

      <div className="submitAnswer">
        <SubmitAnswer
          disabled={stepperValue == 0 || isDisabled || correctAttempted}
          onClick={onClick}
        />
      </div>

      <ButtonContinue
        disabled={stepperValue == 0 || isDisabled || !correctAttempted}
        onClick={onClick2}
      />
    </div>
  );
};

export default Right;
