import React, { useEffect, useRef, useState } from "react";
import Button from "../../../app/components/Button";
import EventManager from "../../../app/events/manager";
import PeriodicTableContainer from "../../containers/PeriodicTableContainer";
import RadioButtonContainer from "../../containers/RadioButtonContainer";

import "./style.scss";

export default (props) => {
  const {
    instructionText,
    onSubmitAnswer,
    onNext,
    visited,
    correctAttempt,
    onContinueClick,
    isReset,
    hideToast,
    isPopupActive,
    buttonLabels,
  } = props;

  const [attempted, setAttempted] = useState("");
  const btnRef = useRef(null);

  useEffect(() => {
    if (btnRef && btnRef.current) {
      setTimeout(() => {
        btnRef.current.focus();
      }, 100);
    }
  });

  useEffect(() => {
    setAttempted("");
  }, [isReset]);

  const onChange = (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    setAttempted(id);
    hideToast();
  };

  const onNextClick = () => {
    setAttempted(null);
    onNext();
  };

  const onContClick = () => {
    setAttempted(null);
    onContinueClick();
  };

  return (
    <div className="screen0wrapper">
      <div className={"instructor"}>
        <h2 id="heading" className="heading">
          {instructionText}
        </h2>
      </div>
      <RadioButtonContainer
        onChange={onChange}
        selectedOption={attempted ? attempted : ""}
        disabled={correctAttempt}
        labelledby={"heading"}
      ></RadioButtonContainer>
      <PeriodicTableContainer
        ariahidden={true}
        periodicTableColor={`colorByBlock ${attempted}`}
      ></PeriodicTableContainer>
      <div className="submit-button">
        <Button
          classes="primary"
          text={buttonLabels.submitAnswer}
          onClick={() => onSubmitAnswer(attempted)}
          disabled={!attempted || correctAttempt}
          isPopUpOpen={isPopupActive}
        />
      </div>
      {attempted && correctAttempt ? (
        <div className="continue-button">
          <Button
            classes="right-arrow toast-secondary-button positive"
            text={
              visited.length >= 3 ? buttonLabels.continue : buttonLabels.next
            }
            onClick={visited.length >= 3 ? onContClick : onNextClick}
            isPopUpOpen={isPopupActive}
            ref={btnRef}
          />
        </div>
      ) : null}
    </div>
  );
};
