import React, { useEffect } from "react";
import ButtonNextQuestion from "../../containers/ButtonNextQuestion";
import MCQcomponentContainer from "../../containers/MCQcomponentContainer";
import SelectProtonsContainer from "../../containers/SelectProtonsContainer";
import SelectElectronsContainer from "../../containers/SelectElectronsContainer";
import SelectMassNumberContainer from "../../containers/SelectMassNumberContainer";
import SelectElementNameContainer from "../../containers/SelectElementNameContainer";
import "./style.scss";

export default (props) => {
  const { clearOptions, answerAttempt, selectedQuestion, submitButtonPressed } =
    props;

  useEffect(() => {
    clearOptions();
  }, []);

  const showContinue = submitButtonPressed && answerAttempt;

  return (
    <div className={`mcq-wrapper ${showContinue ? "hide-submit" : ""}`}>
      <MCQcomponentContainer>
        {selectedQuestion && selectedQuestion.selectOptions ? (
          <div>
            <SelectProtonsContainer />
            <SelectElectronsContainer />
            <SelectElementNameContainer />
            <SelectMassNumberContainer />
          </div>
        ) : (
          <></>
        )}
      </MCQcomponentContainer>
      {showContinue ? <ButtonNextQuestion /> : null}
    </div>
  );
};
