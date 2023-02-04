import React from "react";
import RadioButtonContainer from "../../containers/RadioButtonContainer";
import MCQAreaContainer from "../../containers/MCQcomponentContainer";
import ButtonNextQuestion from "../../containers/ButtonNextQuestion";
import LeftArea from "../../containers/LeftStaticAreaContainer";

const MCQArea = (props) => {
  const { submitButtonPressed, answerAttempt } = props;
  return (
    <div className="right-interactive">
      <MCQAreaContainer>
        <>
          <RadioButtonContainer />
          <LeftArea />
        </>
      </MCQAreaContainer>
      {submitButtonPressed && answerAttempt ? <ButtonNextQuestion /> : null}
    </div>
  );
};

export default MCQArea;
