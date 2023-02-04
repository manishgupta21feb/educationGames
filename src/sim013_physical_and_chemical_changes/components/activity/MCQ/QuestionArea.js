import React from "react"
import RadioButton from "../../../containers/RadioButtonContainer"
import ButtonNextQuestion from "../../../containers/ButtonNextQuestion";
import MCQArea from "../../../containers/MCQAreaContainer"
import "./question.scss"
const QuestionArea = (props) => {
  const { answerSubmitted, correctAttempt } = props;
  return (
    <div className="physical-class">
      <MCQArea>
        <RadioButton />
      </MCQArea>
      {answerSubmitted && correctAttempt ? <ButtonNextQuestion /> : null}
    </div>
  )
}


export default QuestionArea