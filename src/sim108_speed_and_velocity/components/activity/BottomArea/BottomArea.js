import React from "react";
import RadioButtons from "../../../containers/RadioButtonContainer";
import ButtonNextQuestion from "../../../containers/ButtonNextQuestion";
import MCQcomponentContainer from "../../../containers/MCQcomponentContainer";
import "./style.scss";
export default (props) => {
  const {
    scenarioHeading,
    mcqView,
    questionId,
    questionScenario,
    submitButtonPressed,
    answerAttempt,
  } = props;

  return (
    <div className="bottom_area">
      {!mcqView ? (
        <p
          role="heading"
          aria-level="2"
          className="bottom_heading pria"
          dangerouslySetInnerHTML={{ __html: scenarioHeading }}
        ></p>
      ) : (
        <div className={`bottom_area_${questionScenario}${questionId} `}>
          <MCQcomponentContainer>
            <RadioButtons />
          </MCQcomponentContainer>
        </div>
      )}
      {!mcqView || (submitButtonPressed && answerAttempt) ? (
        <ButtonNextQuestion />
      ) : null}
    </div>
  );
};
