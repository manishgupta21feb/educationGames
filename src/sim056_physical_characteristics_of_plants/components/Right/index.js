import React, { useEffect, useState } from "react";
import BoxArea from "../../containers/BoxAreaContainer";
import FinishButton from "../../containers/FinishButtonContainer";
import "./style.scss";
import { getNumbers } from "../../helper.js";

const RightArea = (props) => {
  const {
    introHeading,
    activityCompleted,
    questionSet,
    selectedOptions,
    toastMsg,
    getNextQuestion,
    isPopupActive,
    currentPopup,
    questionHeading,
  } = props;
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!getNextQuestion || currentPopup == 1) {
      getQuestions();
    }
  }, [getNextQuestion, currentPopup]);

  const getQuestions = () => {
    let nextQuestion = questionSet.filter((item) => {
      if (!selectedOptions.includes(item.answerId)) {
        return item;
      }
    });
    setQuestions(findNextQuestion(selectedOptions, nextQuestion, questionSet));
    let { id } = findNextQuestion(
      selectedOptions,
      nextQuestion,
      questionSet
    )[0];

    setCount(getNumbers(id));
  };
  useEffect(() => {
    if (currentPopup == 1) {
      setCount(1);
    }
  }, [currentPopup]);
  const findNextQuestion = (selectedOptions, nextQuestion, questionSet) => {
    if (selectedOptions.length == 0) {
      return questionSet.slice(0, 1); //first question
    } else if (selectedOptions.length != 0 && nextQuestion.length == 0) {
      // last question
      return questionSet.slice(questionSet.length - 1, questionSet.length);
    } else {
      return nextQuestion.slice(0, 1); //rest question
    }
  };

  return (
    <div className="right-area">
      <h2 className="questionNumber">
        {/* {questionHeading.replace("-1-", count)} */}
        {questionHeading}
      </h2>
      <p className="introHeading">{introHeading}</p>
      {questions.map((val, index) => {
        return (
          <div key={`heading` + index} className="questionBoxArea">
            <p
              key={val.id}
              className="heading-text position-change"
              dangerouslySetInnerHTML={{
                __html: getNextQuestion ? val.textWithAnswer : val.text,
              }}
              aria-hidden
            ></p>

            <p
              key={"hidden" + val.id}
              className="heading-text hidden"
              dangerouslySetInnerHTML={{
                __html: getNextQuestion ? val.textWithAnswer : val.textWithAria,
              }}
            ></p>
            <BoxArea />
          </div>
        );
      })}
      <FinishButton />
    </div>
  );
};

export default RightArea;
