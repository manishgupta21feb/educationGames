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

    isPopupActive,
    radioDisabled,
    questionCount,
    currentQuestion,
    questionLength,
  } = props;
  return (
    <>
      <MCQcomponentContainer>
        <div className="bottomarea">
          <h3 className="questionCount">{`${questionCount.Question}: ${
            currentQuestion + 1
          } ${questionCount.of} ${questionLength}`}</h3>
          <div className="checkbox-container">
            {checkboxes.map((_cb, index) => {
              return (
                <div className="cbHolder" key={`${index}_holder`}>
                  <p className="chkBoxRowHeading" id={`heading_${index}`}>
                    {_cb.context}
                  </p>
                  <ul
                    role="group"
                    className={`check-buttons`}
                    //aria-labelledby={`heading_${index}` || null}
                  >
                    {_cb.chkBoxes.map((cb, _index) => {
                      return (
                        <li
                          key={`chk_${_index}`}
                          role="none"
                          className="check-button"
                        >
                          <CheckBox
                            {...cb}
                            onChange={() => {
                              toggleOption(index, cb.id);
                            }}
                            key={`checkbox-${cb.id}`}
                            isPopupActive={isPopupActive}
                            checked={selectedOptions[index].indexOf(cb.id) >= 0}
                            disabled={
                              !isNextButtonEnable || radioDisabled[index]
                            }
                            label={`${_cb.context} ${cb.text}`}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </MCQcomponentContainer>
      {!isNextButtonEnable ? <ButtonNextQuestion /> : ""}
    </>
  );
};
