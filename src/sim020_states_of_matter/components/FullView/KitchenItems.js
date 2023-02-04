import React, { useState, useEffect } from "react";
import Button from "../../../app/components/Button";
import "./style.scss";

const KitchenItems = (props) => {
  const {
    questions,
    onItemClick,
    fullViewBGAlt,
    isPopupActive,
    answered,
    continueButton,
    onContinueClick,
    tempButtonClick,
    setArrayValues,
    arrayValues,
    selectedQuestion,
    deleteArrayValues,
    ariaLiveText,
  } = props;

  const [buttonIndex, setButtonIndex] = useState("0");
  const [continueBtn, setContinueBtn] = useState(true);
  const [question1, setQuestion1] = useState();

  useEffect(() => {
    if (!arrayValues.includes(buttonIndex)) {
      setArrayValues(buttonIndex);
    }
    if (arrayValues.length == 3) {
      setContinueBtn(false);
    }
  }, [selectedQuestion, buttonIndex, arrayValues]);

  useEffect(() => {
    setButtonIndex("0");
    deleteArrayValues();
  }, [answered]);

  useEffect(() => {
    setContinueBtn(true);
  }, [selectedQuestion]);

  const tempButtonFunction = (item) => {
    setButtonIndex(item.backgroundImg);
    tempButtonClick();
    ariaLiveText(item.liveText);
    setTimeout(() => {
      ariaLiveText(" ");
    }, 300);
  };

  useEffect(() => {
    const q = questions.filter((q) => q.id == selectedQuestion)[0];
    setQuestion1({ ...q });
  }, [selectedQuestion]);

  return (
    <div>
      <img
        className={`sr-only sr-image`}
        alt={
          answered
            ? question1 &&
              question1.buttons &&
              question1.buttons.filter((b) => b.backgroundImg == buttonIndex)[0]
                .altText
            : fullViewBGAlt
        }
      />
      {!answered
        ? questions.map((q) => {
            return (
              <div key={`${q.id}-int`}>
                <button
                  title={q.alt}
                  aria-label={q.alt}
                  onClick={() => onItemClick(q.id)}
                  aria-hidden={isPopupActive || null}
                  tabIndex={isPopupActive ? -1 : null}
                  className={`btn highlighter ${q.className}`}
                ></button>
                <Button
                  key={q.id}
                  isPopupActive
                  text={q.label}
                  label={q.altText}
                  ariaHidden={true}
                  onClick={() => onItemClick(q.id)}
                  classes={`hotspot-btn label ${q.className}`}
                />
              </div>
            );
          })
        : null}
      {questions.map((question) => {
        return question.buttons.map((item, i) => {
          return (
            <div
              key={item.className}
              aria-hidden={
                !selectedQuestion || selectedQuestion !== question.id
              }
              style={{ opacity: selectedQuestion == question.id ? "1" : "0" }}
            >
              <div
                key={i}
                aria-hidden="true"
                className={`bg-image ${`${question.className}${
                  item.backgroundImg
                } ${
                  answered && buttonIndex == item.backgroundImg
                    ? "show"
                    : "hide"
                }`}`}
              ></div>
              <Button
                key={item.id}
                classes={`hotspot-btn label ${item.className} ${
                  buttonIndex == item.backgroundImg ? "active" : ""
                }`}
                text={item.label}
                isPopupActive={isPopupActive}
                onClick={() => tempButtonFunction(item)}
                disabled={!selectedQuestion || selectedQuestion !== question.id}
                ariaPressed={buttonIndex == item.backgroundImg ? true : false}
              />
              {buttonIndex == item.backgroundImg ? (
                <div className={"label-div"}>
                  <p className={`label-state label${question.className}${i}`}>
                    {item.state}
                  </p>
                </div>
              ) : null}
            </div>
          );
        });
      })}
      {answered ? (
        <Button
          key={`continue-btn`}
          text={continueButton}
          onClick={onContinueClick}
          classes="positive toast-secondary-button right-arrow"
          disabled={continueBtn || isPopupActive}
          isPopupActive={isPopupActive}
        />
      ) : null}
    </div>
  );
};

export default KitchenItems;
