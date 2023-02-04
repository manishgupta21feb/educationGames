import React from "react";
import RadioButton from "../../../containers/RadioButtonContainer";
import MCQcomponent from "../../../containers/MCQcomponentContainer";
import Images from "./Images";
import ContinueButton from "../../../containers/ContinueButton";
import "./style.scss";

const index = (props) => {
  const {
    data,
    submitButtonPressed,
    answerAttempt,
    selectedVehicle,
    correctAnswerMcq,
  } = props;
  return (
    <div className="mcqs">
      <MCQcomponent>
        <>
          <p className="mcq-custom-head" id="mcq-custome">
            {selectedVehicle.mcqHeading}
          </p>
          <RadioButton />
          <Images selectedVehicle={selectedVehicle} data={data} />
        </>
      </MCQcomponent>
      {correctAnswerMcq ? <ContinueButton /> : null}
    </div>
  );
};

export default index;
