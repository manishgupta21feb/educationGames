import React from "react";
import MCQAreaContainer from "../../containers/MCQAreaContainer";
import NextButtonContainer from "../../containers/NextButtonContainer";
import RadioButtonContainer from "../../containers/RadioButtonContainer";
import ContinueButtonContainer from "../../containers/ContinueButtonContainer";
import "./style.scss";

const RightArea = (props) => {
  const {
    showMCQ,
    correctAttempt,
    answerAttempted,
    selectedQuestion,
    showMCQCommonText,
    commonTextForMCQScreen,
  } = props;

  const answerAttemptedCorrectly = answerAttempted && correctAttempt;
  const answered =
    answerAttemptedCorrectly && selectedQuestion < 14 ? "answered" : "";

  const mcqWithNextButton = (
    <>
      <MCQAreaContainer>
        <RadioButtonContainer />
      </MCQAreaContainer>
      <div style={{ display: answerAttemptedCorrectly ? "block" : "none" }}>
        <NextButtonContainer />
      </div>
    </>
  );

  return (
    <div className={`right-area ${answered} question${selectedQuestion}`}>
      {showMCQCommonText ? (
        <h1 className="additional-info-para">{commonTextForMCQScreen}</h1>
      ) : null}
      {showMCQ ? mcqWithNextButton : <ContinueButtonContainer />}
    </div>
  );
};

export default RightArea;
