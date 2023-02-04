import React from "react";
import RadioButtonContainer from "../../containers/RadioButtonContainer";
import MCQAreaContainer from "../../containers/MCQAreaContainer";
import NextButtonMCQContainer from "../../containers/NextButtonMCQContainer";

const RightInteractive = (props) => {
  const { question, selectedQuestion, correctAttempt } = props;
  return (
    <div
      className="right-interactive"
      key={`question-wrapper${selectedQuestion}`}
    >
      <MCQAreaContainer>
        <RadioButtonContainer />
      </MCQAreaContainer>
      <NextButtonMCQContainer />
    </div>
  );
};

export default RightInteractive;
