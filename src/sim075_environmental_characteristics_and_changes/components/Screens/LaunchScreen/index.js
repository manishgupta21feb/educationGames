import React, { useEffect, useState } from "react";
import Button from "../../../../app/components/Button";
import View from "../../../../app/components/View";
import MCQContainer from "../../../containers/MCQContainer";
import RadioButtonContainer from "../../../containers/RadioButtonContainer";
import RatingBox from "../../RatingBox";
import "./style.scss";

export default (props) => {
  const {
    isPopupActive,
    buttonLabels,
    screenData,
    questionCounterString,
    onNextClick,
    selectedAnsId,
    starRatings,
    setStarRating,
    setSelectedAnsId,
    activeReset,
    resetBtnState,
  } = props;

  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [qId, setQId] = useState(1);

  useEffect(() => {
    if (resetBtnState) {
      submitted && setSubmitted(false);
      selected && setSelected(null);
      qId !== 1 && setQId(1);
    }
  }, [resetBtnState]);

  const questionId = screenData.questions[qId - 1].id;
  const question = screenData.questions[qId - 1].text;
  const altText = selected
    ? selected.altText
    : screenData.questions[qId - 1].altText;
  const heading = questionCounterString
    .replace("-1-", qId)
    .replace("-2-", screenData.questions.length);
  const radiobuttons = screenData.questions[qId - 1].options.map((m) => ({
    text: m.text,
    id: m.id,
  }));

  const className = submitted
    ? !selected
      ? selectedAnsId
      : `${selectedAnsId ? selectedAnsId + "-" : ""}${
          questionId + "-" + selected.id
        }`
    : selectedAnsId
    ? selectedAnsId
    : "";

  const onChange = (id) => {
    const selected = screenData.questions[qId - 1].options.filter(
      (m) => m.id === id
    )[0];
    activeReset();
    setSelected(selected);
    setSubmitted(false);
  };

  const onClick = () => {
    EventManager.broadcast("PRIMARY_CLICK");
    setSubmitted(true);
    setStarRating(selected.ratings);
  };

  const onContClick = () => {
    setQId(2);
    setSelected(null);
    setSubmitted(false);
    setSelectedAnsId(className);
  };

  const onNext = () => {
    onNextClick(className);
  };

  return (
    <View ariahidden={isPopupActive || null}>
      <div className={`images`}>
        <div className={`initial ${!className ? "show" : ""}`}></div>
        <div className={`q1-one ${className === "q1-one" ? "show" : ""}`}></div>
        <div className={`q1-two ${className === "q1-two" ? "show" : ""}`}></div>
        <div
          className={`q1-three ${className === "q1-three" ? "show" : ""}`}
        ></div>
        <div
          className={`q1-one-q2-one ${
            className === "q1-one-q2-one" ? "show" : ""
          }`}
        ></div>
        <div
          className={`q1-one-q2-two ${
            className === "q1-one-q2-two" ? "show" : ""
          }`}
        ></div>
        <div
          className={`q1-one-q2-three ${
            className === "q1-one-q2-three" ? "show" : ""
          }`}
        ></div>
        <div
          className={`q1-one-q2-four ${
            className === "q1-one-q2-four" ? "show" : ""
          }`}
        ></div>
        <div
          className={`q1-two-q2-one ${
            className === "q1-two-q2-one" ? "show" : ""
          }`}
        ></div>
        <div
          className={`q1-two-q2-two ${
            className === "q1-two-q2-two" ? "show" : ""
          }`}
        ></div>
        <div
          className={`q1-two-q2-three ${
            className === "q1-two-q2-three" ? "show" : ""
          }`}
        ></div>
        <div
          className={`q1-two-q2-four ${
            className === "q1-two-q2-four" ? "show" : ""
          }`}
        ></div>
        <div
          className={`q1-three-q2-one ${
            className === "q1-three-q2-one" ? "show" : ""
          }`}
        ></div>
        <div
          className={`q1-three-q2-two ${
            className === "q1-three-q2-two" ? "show" : ""
          }`}
        ></div>
        <div
          className={`q1-three-q2-three ${
            className === "q1-three-q2-three" ? "show" : ""
          }`}
        ></div>
        <div
          className={`q1-three-q2-four ${
            className === "q1-three-q2-four" ? "show" : ""
          }`}
        ></div>
      </div>
      <div className="radio-box"></div>

      <div className={`screen0-container`}>
        <img className="sr-only sr-image" alt={altText} />
        <MCQContainer
          heading={heading}
          question={question}
          onClick={onClick}
          isPopupActive={isPopupActive}
          disabled={!selected || submitted}
        >
          <>
            <RadioButtonContainer
              onChange={onChange}
              radiobuttons={radiobuttons}
              labelledby="mcq-question-heading"
              selectedOption={selected ? selected.id : ""}
            ></RadioButtonContainer>
            <RatingBox
              isPopupActive={isPopupActive}
              starRatings={starRatings}
              submitted={submitted}
              qId={qId}
            />
          </>
        </MCQContainer>
        {submitted ? (
          <div className="continue-button">
            {qId != screenData.questions.length ? (
              <Button
                classes="right-arrow toast-secondary-button positive"
                text={buttonLabels.continue}
                onClick={onContClick}
                isPopUpOpen={isPopupActive}
              />
            ) : (
              <Button
                classes="right-arrow toast-secondary-button positive"
                text={buttonLabels.next}
                onClick={onNext}
                isPopUpOpen={isPopupActive}
              />
            )}
          </div>
        ) : null}
      </div>
    </View>
  );
};
