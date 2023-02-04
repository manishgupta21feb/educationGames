import React from "react";
import RadioButtons from "../../containers/RadioButtonContainer";
import ButtonNextQuestion from "../../containers/ButtonNextQuestion";
import MCQcomponentContainer from "../../containers/MCQcomponentContainer";
import './style.scss';

export default (props) => {
  const { submitButtonPressed, answerAttempt } = props;

  return (
    <>
      <MCQcomponentContainer>
        <RadioButtons />
      </MCQcomponentContainer>
      {submitButtonPressed && answerAttempt ? <ButtonNextQuestion /> : null}
    </>
  );
};
