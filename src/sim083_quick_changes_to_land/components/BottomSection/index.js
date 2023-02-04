import React from "react";
import "./style.scss";
import MCQAreaContainer from "../../containers/MCQAreaContainer";
import NextButtonContainer from "../../containers/NextButtonContainer";
import SelectFirst from "../../containers/SelectFirst";
import SelectSecond from "../../containers/SelectSecond";
import { getSimLanguage } from "../../../app/helpers";

const BottomSection = (props) => {
  const { check, questionData, atStart, atEnd, section } = props;
  return (
    <div className="bottom-section">
      <MCQAreaContainer>
        <div
          className={`main-question ${getSimLanguage()} question-${section}-${
            questionData.id
          }`}
        >
          <div className="full-question">
            <p>{questionData.questionText1}</p>
            <div
              className={
                atStart
                  ? "select-option1"
                  : atEnd
                  ? "select-option2"
                  : "select-option"
              }
            >
              <SelectFirst />
            </div>
            <p>{questionData.questionText2}</p>
            {!check ? (
              <>
                <div className="select-option">
                  <SelectSecond />
                </div>
                <p>{questionData.questionText3}</p>
              </>
            ) : null}
          </div>
          <p>{questionData.questionText4}</p>
        </div>
      </MCQAreaContainer>
      {props.answerAttempted && props.correctAttempt ? (
        <NextButtonContainer />
      ) : null}
    </div>
  );
};

export default BottomSection;
