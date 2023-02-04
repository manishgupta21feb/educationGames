import React from "react";
import "./style.scss";
import RadioButtons from "../../containers/RadioButtonContainer";
import MCQcomponentContainer from "../../containers/MCQContainer";

export default (props) => {
  return (
    <>
      <div className="bottom-area">
        <MCQcomponentContainer>
          <RadioButtons />
        </MCQcomponentContainer>
      </div>
    </>
  );
};
