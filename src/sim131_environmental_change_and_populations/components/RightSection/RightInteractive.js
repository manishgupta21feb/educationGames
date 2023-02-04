import React from "react";
import MCQAreaContainer from "../../containers/MCQAreaContainer";
import RadioButtonContainer from '../../containers/RadioButtonContainer';
import NextButtonContainer from '../../containers/NextButtonContainer';
import "./style.scss";

const RightInteractive = (props) => {

  const {
    answerAttempted,
    correctAttempt,
    questionNo
  } = props;

  return (
    <>
      <div className={`mcq-wrapper ${questionNo == 2 ? 'scrollable-mcq' : ''} ${correctAttempt ? 'with-correct-answer' : ''}`}>
        <MCQAreaContainer>
          <RadioButtonContainer />
        </MCQAreaContainer>
      </div>
      {answerAttempted && correctAttempt ? <NextButtonContainer /> : null}
    </>
  )
}

export default RightInteractive;