import React from "react";
import RadioButtonContainer from "../../containers/RadioButtonContainer";
import MCQAreaContainer from "../../containers/MCQAreaContainer";
import NextButtonContainer from "../../containers/NextButtonContainer";

const RightInteractive = (props) => {
  return (
    <div className="right-interactive">
      <h1 className="question-instruction">{props.heading}</h1>
      <MCQAreaContainer>
        <RadioButtonContainer />
      </MCQAreaContainer>
      {props.answerAttempted && props.correctAttempt ? (
        <NextButtonContainer />
      ) : null}
    </div>
  );
};

export default RightInteractive;
