import React from "react";
import Button from "../../../app/components/Button";
import "./style.scss";
import GraphContainer from "../../containers/GraphContainer";

const MCQQuestionArea = (props) => {
  const {
    onClick,
    question,
    disabled,
    children,
    uniqueId,
    ariahidden,
    buttonText,
    hideTooltip,
    isPopupActive,
    imgSrc,
    imageAlt,
    screen,
    heading,
    firstScreenQuestionsId,
    headingLevel,
  } = props;

  const id = "mcq-question-heading";
  const optionsAssociationWithText = uniqueId || id;
  return (
    <div aria-hidden={ariahidden} className="mcq-question-area">
      <div className="inner-wrapper">
        {heading && screen !== "first" ? (
          <div
            role="heading"
            className="heading"
            aria-level={headingLevel}
            aria-label={heading}
          >
            {heading}
          </div>
        ) : null}
        <div id={optionsAssociationWithText}>
          <p className="question">{question}</p>
        </div>

        {React.cloneElement(children, {
          labelledby: optionsAssociationWithText,
        })}
        {screen === "first" ? (
          <div className="img-container">
            <img
              className={`firstScreen-img firstScreen-img_${firstScreenQuestionsId}`}
              src={imgSrc}
              alt={imageAlt}
            ></img>
          </div>
        ) : (
          <div className="graph-container">
            <GraphContainer />
          </div>
        )}
        <div
          className={`submit-button ${
            screen !== "first" ? "submit-button-secondScreen" : ""
          }`}
        >
          <Button
            classes="primary"
            text={buttonText}
            onClick={onClick}
            disabled={disabled}
            hideTooltip={hideTooltip}
            isPopUpOpen={isPopupActive}
          />
        </div>
      </div>
    </div>
  );
};

export default MCQQuestionArea;
