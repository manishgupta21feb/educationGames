import React, { useEffect, useRef, useState } from "react";
import MCQArea from "../../../../containers/MCQAreaContainer";
import RadioButton from "../../../../containers/RadioButtonContainer";
import ButtonNextQuestion from "../../../../containers/ButtonNextQuestion";
import "./style.scss";

const QuestionArea = (props) => {
  const { correctAnswer, answerSubmitted } = props;

  return (
    <>
      <MCQArea>
        <RadioButton />
      </MCQArea>
      {answerSubmitted && correctAnswer && <ButtonNextQuestion />}
    </>
  );
};

export default QuestionArea;
