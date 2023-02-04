import React from "react";
import "./question.scss";
import Wrapper from "../../containers/WrapperContainer";

import Button from "../../../app/components/Button";
import RadioButtons from "../../containers/RadioButtonContainer";

import MCQcomponentContainer from "../../containers/MCQcomponentContainer";

const Question = (props) => {
  const {
    continueBtnText,
    showContinueBtn,
    questionsImages,
    questionNumber,
    onContinueHandler,
    getScreenNumber,
    bigBang,
    stateModel,
    isPopupActive,
    imagesAltText
  } = props;

  const _onContinueHandler = () => {
    onContinueHandler();
  };

  const images = questionsImages.map((item, index) => {
    return (
      <img key={index}
        aria-hidden="true"
        src={item.src}
        className={`question-img ${item.id}
      `}
      />
    );
  });

  return (
    <>
      <Wrapper className="wrapper--wrap full-area " layout="topbottom">
        <div role="img" aria-label={imagesAltText}
          className={`question-img ${
            questionNumber == 2 ? "question-img--multiple" : ""
          }`}
        >
          {images}
          <p className="stateModel" aria-hidden="true">
            {stateModel}
          </p>
          <p className="bigBang_screen2" aria-hidden="true">
            {bigBang}
          </p>
        </div>
        <div className={"screen-mcq-" + getScreenNumber.screen}>
          <MCQcomponentContainer>
            <RadioButtons />
          </MCQcomponentContainer>

          {showContinueBtn ? (
            <Button
              text={continueBtnText}
              classes="toast-secondary-button positive right-arrow"
              disabled={isPopupActive}
              onClick={_onContinueHandler}
            />
          ) : null}
        </div>
      </Wrapper>
    </>
  );
};

export default Question;
