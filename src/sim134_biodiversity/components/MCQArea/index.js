import React from "react";
import Button from "../../../app/components/Button";
import PropTypes from "prop-types";
import "./style.scss";

const MCQQuestionArea = (props) => {
  const {
    heading,
    onClick,
    question,
    disabled,
    children,
    uniqueId,
    ariahidden,
    buttonText,
    hideTooltip,
    buttonLabel,
    headingLabel,
    headingLevel,
    isPopupActive,
    questionLabel,
  } = props;

  const id = "mcq-question-heading";
  const optionsAssociationWithText = uniqueId || id;
  return (
    <div aria-hidden={ariahidden} className="mcq-question-area">
      <div className="inner-wrapper">
        {heading ? (
          <div
            role="heading"
            className="heading"
            aria-level={headingLevel}
            aria-label={headingLabel || heading}
          >
            {props.heading}
          </div>
        ) : null}
        {question ? (
          heading ? (
            <>
              <div className="sr-only" id={optionsAssociationWithText}>
                {questionLabel || question}
              </div>
              <p
                className="question"
                id="mcq-heading"
                aria-hidden="true"
                // aria-label={questionLabel || question}
                dangerouslySetInnerHTML={{ __html: question }}
              />
            </>
          ) : (
            <div
              role="heading"
              aria-level={headingLevel}
              id={optionsAssociationWithText}
              aria-label={questionLabel || question}
            >
              <p
                aria-hidden="true"
                className="question"
                dangerouslySetInnerHTML={{ __html: question }}
              ></p>
            </div>
          )
        ) : null}
        {React.cloneElement(children, {
          labelledby: optionsAssociationWithText,
        })}
        <div className="submit-button">
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

MCQQuestionArea.defaultProps = {
  headingLevel: "1",
};

MCQQuestionArea.propTypes = {
  heading: PropTypes.string,
  question: PropTypes.string,
  buttonLabel: PropTypes.string,
  headingLabel: PropTypes.string,
  headingLevel: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
};

export default MCQQuestionArea;
