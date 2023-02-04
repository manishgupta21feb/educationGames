import React from "react";
import CheckBox from "../../../../app/components/Checkbox";
import ButtonNextQuestion from "../../../containers/ButtonNextQuestion";
import MCQcomponentContainer from "../../../containers/MCQcomponentContainer";

const ViewB = (props) => {
  const {
    toggleOption,
    selectedOptions,
    checkboxes,
    isNextButtonEnable,
    question,
    isPopupActive,
    radioDisabled,
    questionCount,
    currentQuestion,
    questionLength,
  } = props;
  return (
    <>
      <MCQcomponentContainer>
        <div className="viewBAssessment">
          <h2 className="questionCount">{`${questionCount.Question}: ${currentQuestion} ${questionCount.of} ${questionLength}`}</h2>
          <p
            className="questionHeader"
            dangerouslySetInnerHTML={{ __html: question.questionContent }}
            id="heading"
          />
          <div className="checkbox-container">
            <ul
              role="group"
              className={`check-buttons`}
              aria-labelledby={`heading` || null}
            >
              {checkboxes.map((cb, index) => {
                return (
                  <li key={`chk_${index}`} role="none" className="check-button">
                    <CheckBox
                      {...cb}
                      onChange={() => {
                        toggleOption(cb.id);
                      }}
                      key={`checkbox-${cb.id}`}
                      isPopupActive={isPopupActive}
                      checked={selectedOptions.indexOf(cb.id) >= 0}
                      disabled={!isNextButtonEnable || radioDisabled}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </MCQcomponentContainer>
      {!isNextButtonEnable ? <ButtonNextQuestion /> : ""}
    </>
  );
};

export default ViewB;
