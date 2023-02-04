import React, { useEffect, useRef } from "react";

import MCComponentContainer from "../../containers/McqContainer";
import RadioButtons from "../../containers/RadioButtonContainer";
import Button from "../../../app/components/Button";
import "./style.scss";

const Question = ({
  buttonLabels,
  isAnswerSubmitted,
  onSetReset,
  isPopupActive,
  screen,
  hotSpots,
  updateLocation,
}) => {
  const nextRef = useRef(null);

  useEffect(() => {
    onSetReset();
  }, []);

  useEffect(() => {
    if (isAnswerSubmitted && screen === "first") {
      nextRef.current.focus();
    }
  }, [isAnswerSubmitted]);

  const onClickFunction = () => {
    updateLocation("launchScreen");
    onSetReset();
  };

  return (
    <div className="assessment">
      <MCComponentContainer>
        <RadioButtons />
      </MCComponentContainer>
      {isAnswerSubmitted && screen === "first" ? (
        <Button
          text={buttonLabels}
          ref={nextRef}
          onClick={onClickFunction}
          hideTooltip={false}
          disabled={false}
          ariaHidden={false}
          isPopUpOpen={isPopupActive}
          classes="toast-secondary-button positive right-arrow"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Question;
