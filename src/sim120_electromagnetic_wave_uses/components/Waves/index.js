import React, { useState } from "react";
import ContinueButton from "../common/ContinueButton";
import DottedLines from "./DottedLines";
import InstumentButtons from "./InstumentButtons";
import "./style.scss";

export default (props) => {
  const {
    text,
    instruments,
    isPopupActive,
    questions,
    waveCommonText,
    questionText,
    buttonLabels,
    onFinalFinish,
    onIncorrect,
    onCorrect,
    onContinueClick,
    baseAltText,
  } = props;

  const [selectedPage, setselectedPage] = useState(1);
  const [submitted, setsubmitted] = useState(false);

  const onContinue = () => {
    setselectedPage((state) => state + 1);
    setsubmitted(false);
    onContinueClick();
  };

  const onFinalSubmit = () => {
    setsubmitted(true);
  };

  const onFinish = () => {
    onFinalFinish();
  };

  return (
    <div className="screen_two_container">
      <div className="title-container">
        <h2>
          {selectedPage === 1 ? text : questions[selectedPage - 2].detail}
        </h2>
        {selectedPage !== 1 ? (
          <>
            <p className="ques-title">
              {questionText
                .replace("-1-", selectedPage - 1)
                .replace("-2-", questions.length)}
            </p>
            <p
              className="ques-text"
              dangerouslySetInnerHTML={{
                __html: waveCommonText.replace(
                  "-1-",
                  `<strong>${questions[selectedPage - 2].text}</strong>`
                ),
              }}
            ></p>
          </>
        ) : null}
      </div>
      <div className="wave-image">
        <img className="sr-only sr-image" alt={baseAltText}></img>
      </div>
      {selectedPage !== 1 ? (
        <>
          <DottedLines instruments={instruments}></DottedLines>
          <InstumentButtons
            isPopupActive={isPopupActive}
            buttonLabels={buttonLabels}
            instruments={instruments}
            selectedQuestion={questions[selectedPage - 2]}
            onFinalSubmit={onFinalSubmit}
            selectedPage={selectedPage}
            onIncorrect={onIncorrect}
            onCorrect={onCorrect}
          ></InstumentButtons>
        </>
      ) : null}
      {submitted || selectedPage === 1 ? (
        <ContinueButton
          isFocusSend={selectedPage !== 1}
          text={selectedPage > 7 ? buttonLabels.finish : buttonLabels.continue}
          onClick={selectedPage > 7 ? onFinish : onContinue}
          classes={`${selectedPage > 7 ? "" : "right-arrow"}`}
          isPopupActive={isPopupActive}
        ></ContinueButton>
      ) : null}
    </div>
  );
};
