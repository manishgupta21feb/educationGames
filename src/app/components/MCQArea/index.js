import React from "react";
import Button from "../Button";
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
    subheadingLevel,
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
            <p
              className="question"
              aria-level={subheadingLevel}
              id={optionsAssociationWithText}
              role={subheadingLevel ? "heading" : null}
              dangerouslySetInnerHTML={{ __html: question }}
            />
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
  subheadingLevel: null,
};

MCQQuestionArea.propTypes = {
  heading: PropTypes.string,
  question: PropTypes.string,
  buttonLabel: PropTypes.string,
  headingLabel: PropTypes.string,
  headingLevel: PropTypes.string,
  subheadingLevel: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
};

export default MCQQuestionArea;
