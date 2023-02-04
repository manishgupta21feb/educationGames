import React, { useEffect, useRef } from "react";
import Button from "../../../../app/components/Button";
import ButtonNextQuestion from "../../../containers/ButtonNextQuestion";

const ViewA = ({
  question: { level1, level2 },
  isPopupActive,
  currentLevel,
  checkAnswers,
  submitActive,
  isNextButtonEnable,
  submitFocus,
  submitData,
}) => {
  const submitRef = useRef(null);

  useEffect(() => {
    if (!submitFocus) return;
    setTimeout(() => {
      submitRef.current.focus();
    }, 200);
  }, [submitFocus]);

  return (
    <div className="view-a-question-panel">
      <p
        className="question-content"
        dangerouslySetInnerHTML={{
          __html: currentLevel == 0 ? level1.ques : level2.ques,
        }}
      ></p>
      <Button
        ref={submitRef}
        text={submitData.submitAnswer}
        classes={`btn primary`}
        onClick={() => {
          checkAnswers();
        }}
        ariaLable={submitData.submitAnswer}
        ariaHidden={isPopupActive}
        hideTooltip={false}
        isPopUpOpen={isPopupActive}
        disabled={submitActive}
        key={`locationBtn_${0}`}
      />
      {!isNextButtonEnable ? <ButtonNextQuestion /> : ""}
    </div>
  );
};
export default ViewA;
