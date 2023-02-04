import React from "react";
import ButtonContainer from "../../../containers/ButtonNextQuestion";
import MCQContainer from "../../../containers/MCQContainer";
import RadioButtonContainer from "../../../containers/RadioButtonContainer";
import "./style.scss";
const RightScreen = (props) => {
  const {
    heading,
    specimenClicked,
    isClicked,
    mcqView,
    submitButtonPressed,
    answerAttempt,
    isPopupActive,
  } = props;
  return (
    <>
      <div>
        <h2 aria-hidden={isPopupActive} className="description-heading">
          {heading}
        </h2>
      </div>
      <div className="table-info">
        {specimenClicked ? (
          !mcqView ? null : (
            <MCQContainer>
              <RadioButtonContainer />
            </MCQContainer>
          )
        ) : null}
      </div>

      {specimenClicked && isClicked ? (
        !mcqView ? (
          <ButtonContainer />
        ) : null
      ) : null}
      {submitButtonPressed && answerAttempt ? <ButtonContainer /> : null}
    </>
  );
};
export default RightScreen;
