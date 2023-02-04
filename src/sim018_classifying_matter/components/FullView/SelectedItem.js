import React from "react";
import Button from "../../../app/components/Button";
import "./style.scss";

const SelectedItem = (props) => {
  const {
    question,
    continueButton,
    onContinueClick,
    selectedQuestion,
    isPopupActive,
  } = props;

  return (
    <React.Fragment>
      <div className="instructions">
        {question &&
          question.answerText &&
          question.answerText.map((a, i) => (
            <p
              key={`answ-${i}-${question.id}`}
              dangerouslySetInnerHTML={{ __html: a }}
            ></p>
          ))}
      </div>
      <div
        role="img"
        aria-label={question.alt}
        className={`image-alt ${question.className}`}
      ></div>
      <Button
        key={`continue-btn`}
        text={continueButton}
        onClick={onContinueClick}
        classes="positive toast-secondary-button right-arrow"
        ariaHidden={isPopupActive || null}
        isPopupActive={isPopupActive}
      />
    </React.Fragment>
  );
};

export default SelectedItem;
