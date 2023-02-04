import React, { useState, useEffect } from "react";
import View from "../../../../app/components/View";
import MCQArea from "../../../containers/MCQArea";
import RadioButton from "../../../containers/RadioButton";
import ButtonNextQuestion from "../../../containers/ButtonNextQuestion";
import "./style.scss";

export default (props) => {
  const {
    isPopupActive,
    headingTop,
    selectedQuestion,
    questions,
    questionCount,
    setQuestion,
    answerAttempt,
    submitButtonPressed,
    question,
  } = props;
  const [question1, setQuestion1] = useState();

  useEffect(() => {
    const q = questions.filter((q) => q.id == questionCount)[0];
    setQuestion({ ...q });
  }, []);

  return (
    <div className="screen2">
      <View ariahidden={isPopupActive}>
        <h1 className="headingtop">{headingTop}</h1>
        <MCQArea>
          <>
            <div className="optionimage">
              <div className="optionone"></div>
              <div className="optiontwo"></div>
              <div className="optionthree"></div>
              <div className="optionfour"></div>
            </div>
            <RadioButton />
          </>
        </MCQArea>
        {submitButtonPressed && answerAttempt ? <ButtonNextQuestion /> : null}
      </View>
    </div>
  );
};
