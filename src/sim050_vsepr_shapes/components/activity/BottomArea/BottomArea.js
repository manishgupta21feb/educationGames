import React from "react";
import RadioButtons from "../../../containers/RadioButtonShapeContainer";
import RadioButtonsNew from "../../../containers/RadioButtonLonePairContainer";
import ButtonNextQuestion from "../../../containers/ButtonNextQuestion";
import MCQcomponentContainer from "../../../containers/MCQcomponentContainer";
import "./style.scss";

export default (props) => {
  const { showNextBtn, data } = props;

  return (
    <>
      <div className="bottom-area">
        <MCQcomponentContainer>
          <div>
            <RadioButtons />
            <p id="question2-para" className="para">
              {data.reactionTypeQuestion2}
            </p>
            <RadioButtonsNew />
          </div>
        </MCQcomponentContainer>
      </div>

      {showNextBtn ? <ButtonNextQuestion /> : null}
    </>
  );
};
