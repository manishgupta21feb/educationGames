import React from "react";
import "./question.scss";

import Button from "../../../app/components/Button";
import RadioButtons from "../../containers/RadioButtonContainer";

import MCQcomponentContainer from "../../containers/MCQcomponentContainer";

const Question = (props) => {
  const {
    continueBtnText,
    onContinueHandler,
    showContinueBtn,
    questionsImages,
    questionNumber,
  } = props;

  const _onContinueHandler = () => {
    onContinueHandler();
  };

  const images = questionsImages.map((item) => {
    return (
      <div
        id={item.id}
        key={item.id}
        className={`question-img__img ${
          questionNumber != 2
            ? "question-img__img--couple"
            : "question-img__img--single"
        }`}
        style={{ backgroundImage: `url(${item.src})` }}
      >
        <span
          className="question-img__text question-img__text--spain"
          aria-hidden
        >
          {item.text1}
        </span>
        <span
          className="question-img__text question-img__text--zealand"
          aria-hidden
        >
          {item.text2}
        </span>
        <span className="question-img__option" aria-hidden>
          {item.option}
        </span>
      </div>
    );
  });

  return (
    <>
      <MCQcomponentContainer>
        <RadioButtons />
      </MCQcomponentContainer>

      <div
        className={`question-img ${
          questionNumber == 2 ? "question-img--multiple" : ""
        }`}
      >
        {images}
      </div>

      {showContinueBtn ? (
        <Button
          text={continueBtnText}
          classes="toast-secondary-button positive right-arrow"
          onClick={_onContinueHandler}
        />
      ) : null}
    </>
  );
};

export default Question;
