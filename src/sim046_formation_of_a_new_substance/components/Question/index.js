import React from "react";
import "./question.scss";

import Button from "../../../app/components/Button";
import RadioButtons from "../../containers/RadioButtonContainer";

import MCQcomponentContainer from "../../containers/MCQcomponentContainer";

const Question = (props) => {
  const {
    continueBtnText,
    onContinueHandler,
    showContinueBtn,
  } = props;


  const _onContinueHandler = () => {
    onContinueHandler();
  };

  return (
    <>
      <MCQcomponentContainer>
        <RadioButtons />
      </MCQcomponentContainer>

      {showContinueBtn ? (
        <Button
          text={continueBtnText}
          classes="toast-secondary-button positive right-arrow"
          onClick={_onContinueHandler}
        />
      ) : null}
    </>
  );
};

export default Question;
