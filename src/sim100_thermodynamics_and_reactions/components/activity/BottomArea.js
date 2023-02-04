import React, { useEffect, useState } from "react";
import ButtonNextQuestion from "../../containers/ButtonNextQuestion";
import MCQcomponentContainer from "../../containers/MCQcomponentContainer";
import SelectReactionContainer from "../../containers/SelectReactionContainer";
import SelectSignContainer from "../../containers/SelectSignContainer";
import "./style.scss";
import InputAreaContainer from "../../containers/InputAreaContainer";

export default (props) => {
  const { selectedQuestion, getAnswerValue, activeQuestions } = props;

  return (
    <div className={`mcq-wrapper`}>
      <MCQcomponentContainer>
        {activeQuestions ? (
          <div>
            <SelectReactionContainer />
            <SelectSignContainer />
            <InputAreaContainer />
          </div>
        ) : (
          <></>
        )}
      </MCQcomponentContainer>

      {getAnswerValue.isSubmitBtnClicked ? <ButtonNextQuestion /> : null}
    </div>
  );
};
