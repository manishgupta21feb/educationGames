import React from "react";
import "./style.scss";
import CheckBox from "../../../../app/components/Checkbox";
import ButtonNextQuestion from "../../../containers/ButtonNextQuestion";
import MCQcomponentContainer from "../../../containers/MCQcomponentContainer";

export default (props) => {
  const {
    toggleOption,
    selectedOptions,
    checkboxes,
    isNextButtonEnable,
    question,
    isPopupActive,

    data,
  } = props;

  return (
    <>
      <MCQcomponentContainer>
        <div className="bottomarea">
          {question.srNo == 3 || question.srNo == 5 ? (
            <React.Fragment>
              <ol className={`olcontent${question.srNo}`}>
                {question.alldata.map((val, index) => {
                  return (
                    <li className={`li${val.id}`} key={val.id}>
                      {val.label}
                    </li>
                  );
                })}
              </ol>
              <p id="question2-para" className="para">
                {question.questionSubText}
              </p>
            </React.Fragment>
          ) : null}

          <div className="checkbox-container">
            {checkboxes.map((cb) => (
              <CheckBox
                {...cb}
                onChange={toggleOption}
                key={`checkbox-${cb.id}`}
                isPopupActive={isPopupActive}
                checked={selectedOptions.indexOf(cb.id) >= 0}
                disabled={!isNextButtonEnable || isPopupActive}
              />
            ))}
          </div>
        </div>
      </MCQcomponentContainer>
      {!isNextButtonEnable ? <ButtonNextQuestion /> : ""}
    </>
  );
};
