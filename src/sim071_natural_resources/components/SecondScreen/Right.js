import React from "react";
import MCQArea from "../../containers/MCQAreaSecond";
import "./style.scss";
import NextButton from "../../containers/NextButton";
const Right = (props) => {
  const {
    submitButtonPressed,
    answerAttempt,
  } = props;

  return (
    <div className="right-sideview">
      <MCQArea>
        <p></p>
      </MCQArea>
      {submitButtonPressed && answerAttempt ? <NextButton /> : null}
    </div>
  );
};

export default Right;

