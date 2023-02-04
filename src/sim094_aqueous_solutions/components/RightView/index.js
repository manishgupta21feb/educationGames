import React from "react";
import RadioButtons from "../../containers/RadioButtonContainer";
import MCQcomponentContainer from "../../containers/MCQcomponentContainer";
import Button from "../../../app/components/Button";
import "./rightview.scss";

const RightView = (props) => {
  const { answer, continueBtnText, onContinue, questionNumber, isPopupActive } =
    props;

  return (
    <div className={`${questionNumber == 3 ? "screenWithoutQuestion" : ""}`}>
      <MCQcomponentContainer>
        <RadioButtons />
      </MCQcomponentContainer>

      {answer || questionNumber == 3 ? (
        <Button
          text={continueBtnText}
          classes={`toast-secondary-button positive ${questionNumber == 6 ? "" : "right-arrow"}`}
          onClick={onContinue}
          isPopupActive={isPopupActive}
          disabled={isPopupActive}
        />
      ) : null}
    </div>
  );
};

export default RightView;
