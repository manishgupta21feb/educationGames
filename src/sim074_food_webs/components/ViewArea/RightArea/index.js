import React from "react";
import MCQContainer from "../../../containers/MCQContainer";
import ButtonContinue from "../../../containers/ButtonContinue";
import RadioButtonContainer from "../../../containers/RadioButtonContainer";
import "./style.scss";
const RightArea = (props) => {
  const { submitButtonPressed, answerAttempt, radioButton } = props;

  return (
    <div>
      <MCQContainer>
        {radioButton ? <RadioButtonContainer /> : <p></p>}
      </MCQContainer>
      {submitButtonPressed && answerAttempt ? <ButtonContinue /> : null}
    </div>
  );
};
export default RightArea;
