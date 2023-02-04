import React from "react";
import RadioButtons from "../../containers/RadioButtonContainer";
import ContinueButtonContainer from "../../containers/ContinueButtonContainer";
import MCQAreaContainer from "../../containers/MCQAreaContainer";
import "./style.scss";
export default (props) => {
  const { submitButtonPressed, commonHeadingText, answerAttempt } = props;

  return (
    <>
      <div  className="commonHeadingText">
      <p role="heading"  >{commonHeadingText}</p>
      </div>
  
      <MCQAreaContainer>

        <RadioButtons />
      </MCQAreaContainer>
      {submitButtonPressed && answerAttempt ? (
        <ContinueButtonContainer />
      ) : null}
    </>
  );
};
