import React from "react";
import ButtonContinue from "../../containers/ButtonNextQuestion";
import MCQContainer from "../../containers/MCQContainer";
import RadioButtonContainer from "../../containers/RadioButtonContainer";
import "./style.scss";
const index = (props) => {
  const { heading, answerAttempt, submitButtonPressed } = props;

  return (
    <div className="full-container">
      <h2 className="screen-heading">{heading}</h2>
      <div className="mcq-area">
        <MCQContainer>
          <RadioButtonContainer />
        </MCQContainer>
      </div>
      {submitButtonPressed && answerAttempt ? <ButtonContinue /> : null}
    </div>
  );
};

export default index;
