import React from "react";
import RadioButtons from "../../containers/RadioButton";
import SubmitAnswer from "../../containers/SubmitAnswerButton";
import NextScreenButton from "../../containers/NextScreenButton";

const Right = (props) => {
  const {
    resources,
    selectedResource,
    instructionOSTText,
    correctAnswerSubmitted,
  } = props;
  return (
    <div className="right-wrapper">
      <p id="main-instruction-ost" className="instructions-ost">
        {instructionOSTText}
      </p>
      {selectedResource ? (
        <div className="mcq-options">
          <p id="selected-item-label" className="resource-label">
            {resources.filter((r) => r.id == selectedResource)[0].text}
          </p>
          <RadioButtons />
          <SubmitAnswer />
        </div>
      ) : null}
      {correctAnswerSubmitted ? <NextScreenButton /> : null}
    </div>
  );
};

export default Right;
