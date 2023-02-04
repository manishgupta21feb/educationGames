import React from "react";
import ButtonContinue from "../../../containers/ButtonContinue";
import MCQContainer from "../../../containers/MCQContainer";
import RadioButtonContainer from "../../../containers/RadioButtonContainer";
import "./style.scss";

const RightArea = (props) => {
  const { heading, mcqShow, isPopupActive } = props;
  return (
    <div aria-hidden={isPopupActive}>
      <p aria-hidden={isPopupActive} className="main-heading">
        {heading}
      </p>
      {mcqShow ? (
        <MCQContainer>
          <RadioButtonContainer />
        </MCQContainer>
      ) : null}
      <ButtonContinue />
    </div>
  );
};

export default RightArea;
