import React from "react";
import ButtonContinue from "../../../containers/ButtonContinue";
import MCQContainer from "../../../containers/MCQContainer";
import "./style.scss";
const RightArea = (props) => {
  const {
    screenIntro,
    mcqShow,
    answerAttempt,
    submitButtonPressed,
    chartShow,
    chartHeading,
  } = props;

  return (
    <div className="right-area">
      {!mcqShow ? (
        <p className="intro-heading" dangerouslySetInnerHTML={{ __html: screenIntro }}></p>
      ) : !chartShow ? (
        <MCQContainer>
          <p></p>
        </MCQContainer>
      ) : (
        <p className="intro-heading">{chartHeading}</p>
      )}
      {!mcqShow || (submitButtonPressed && answerAttempt) || chartShow ? (
        <ButtonContinue />
      ) : null}
    </div>
  );
};
export default RightArea;
