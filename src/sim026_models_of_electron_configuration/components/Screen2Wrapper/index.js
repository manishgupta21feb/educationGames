import React, { useEffect, useRef, useState } from "react";
import Button from "../../../app/components/Button";
import EventManager from "../../../app/events/manager";
import PeriodicTableContainer from "../../containers/PeriodicTableContainer";

import "./style.scss";

export default (props) => {
  const {
    instructionText,
    selectedSection,
    selectedSectionsOptions,
    onSubmitAnswer,
    correctAttempt,
    visited,
    onNext,
    onContinueClick,
    hideToast,
    isPopupActive,
    instructionTextLabel,
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

  const onNextClick = () => {
    hideToast();
    setAttempted(null);
    onNext();
  };

  const onContClick = () => {
    setAttempted(null);
    onContinueClick();
  };

  const onOptionClick = (val) => {
    hideToast();
    EventManager.broadcast("PRIMARY_CLICK");
    setAttempted(val.id);
  };

  return (
    <div className="screen2wrapper">
      <div className={"instructor"}>
        <h2
          id="heading"
          className="heading"
          aria-label={instructionTextLabel}
          dangerouslySetInnerHTML={{ __html: instructionText }}
        ></h2>
      </div>
      <PeriodicTableContainer
        ariahidden={true}
        periodicTableColor={`colorByBlock ${selectedSection} ${attempted}`}
      ></PeriodicTableContainer>
      <div className={`options ${selectedSection}`}>
        {selectedSectionsOptions.map((val, i) => {
          return (
            <button
              title={val.label}
              key={i}
              disabled={correctAttempt}
              onClick={() => onOptionClick(val)}
              className={`${val.id} ${correctAttempt ? "disabled" : ""}`}
              tabIndex={isPopupActive ? -1 : null}
              aria-pressed={attempted === val.id}
            ></button>
          );
        })}
      </div>
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
              visited.length >= 4 ? buttonLabels.continue : buttonLabels.next
            }
            onClick={visited.length >= 4 ? onContClick : onNextClick}
            isPopUpOpen={isPopupActive}
            ref={btnRef}
          />
        </div>
      ) : null}
    </div>
  );
};
