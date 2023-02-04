import React, { useEffect, useRef } from "react";

import MCComponentContainer from "../../containers/McqContainer";
import RadioButtons from "../../containers/RadioButtonContainer";
import QuestionHeader from "../../containers/QuestionHeader";
import Button from "../../../app/components/Button";
import "./assessment.scss";

const Question = ({
  buttonLabels,
  isAnswerSubmitted,
  questionNumber,
  updateQuestionCount,
  onSetReset,
  isPopupActive,
}) => {
  const nextRef = useRef(null);

  useEffect(() => {
    onSetReset();
  }, []);

  return (
    <div className="assessment">
      <QuestionHeader />
      <MCComponentContainer>
        <RadioButtons />
      </MCComponentContainer>
      {isAnswerSubmitted && (
        <Button
          text={buttonLabels}
          ref={nextRef}
          onClick={updateQuestionCount}
          hideTooltip={false}
          disabled={false}
          ariaHidden={false}
          isPopUpOpen={isPopupActive}
          classes={`toast-secondary-button positive ${
            questionNumber >= 3 ? "" : "right-arrow"
          }`}
        />
      )}
    </div>
  );
};

export default Question;
