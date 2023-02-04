import React from "react";
import MCQContainer from "../../../containers/MCQContainer";
import RadioButtons from "../../../containers/RadioButtons";
import "./style.scss";

const right = (props) => {
  return (
    <div className="right-view">
      <MCQContainer>
        <RadioButtons />
      </MCQContainer>
    </div>
  );
};

export default right;
