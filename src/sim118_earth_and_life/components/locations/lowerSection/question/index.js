import React, { useEffect, useRef, useState } from "react";
import RadioButton from "../../../../../app/components/RadioButton/index.jsx";
import MCQContainer from "../../../../../app/components/MCQArea";
import Button from "../../../../../app/components/Button";

const Question = ({
  heading,
  radioButtons,
  currentOption,
  buttonLabels,
  onSubmitUpdate,
  onWindowUpdate,
  correctAnswer,
  onOptionUpdate,
  currentOptionUpdate,
  onSetReset,
  isPopupActive,
  currentAttempts,
  onAttemptUpdate,
}) => {
  const submitRef = useRef(null);
  const continueRef = useRef(null);
  const [isAnswer, setIsAnswer] = useState(false);

  const answerSubmission = () => {
    if (currentOption == correctAnswer) {
      onSubmitUpdate("correct");
      setIsAnswer(true);
    } else {
      onSubmitUpdate("incorrect");
      setIsAnswer(false);
      onAttemptUpdate(currentAttempts + 1);
    }
  };

  useEffect(() => {
    onSetReset();
  }, []);
  useEffect(() => {
    if (currentAttempts == 2) {
      onSubmitUpdate("incorrect");
      setIsAnswer(true);
      onOptionUpdate(correctAnswer);
    }
  }, [currentAttempts]);

  useEffect(() => {
    if (currentOptionUpdate) {
      setTimeout(() => {
        submitRef.current.focus();
      }, 200);
    }
  }, [currentOptionUpdate]);

  return (
    <div className="questionHolder">
      <MCQContainer
        question={heading}
        onClick={() => {
          answerSubmission();
        }}
        headingLevel={"2"}
        buttonText={buttonLabels.submitAnswer}
        disabled={currentOption && !isAnswer ? false : true}
        isPopupActive={isPopupActive}
      >
        <RadioButton
          radiobuttons={radioButtons}
          disabled={isAnswer}
          selectedOption={currentOption}
          onChange={onOptionUpdate}
          isPopupActive={isPopupActive}
        />
      </MCQContainer>

      {isAnswer && (
        <Button
          text={buttonLabels.next}
          ref={continueRef}
          onClick={() => {
            onWindowUpdate("launchScreen");
          }}
          hideTooltip={false}
          disabled={false}
          ariaHidden={false}
          isPopUpOpen={isPopupActive}
          classes="toast-secondary-button positive right-arrow"
        />
      )}
    </div>
  );
};

export default Question;
