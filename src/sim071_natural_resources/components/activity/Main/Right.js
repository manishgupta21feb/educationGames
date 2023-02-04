import React from "react";
import RadioButton from "../../../containers/RadioButton";
import MCQArea from "../../../containers/MCQArea";
import NextButton from "../../../containers/NextButton";
import data from "../../../data";

const Right = (props) => {
  const {
    instruction,
    buttonPressed,
    question,
    buttonLabels,
    buttonsInfo,
    onClickValue,
    questionCount,
  } = props;

  return (
    <div className="right-view">
      {!buttonPressed ? (
        <div>
          <h2 className="right-content">{instruction}</h2>
        </div>
      ) : (
        <div>
          <MCQArea>
            <RadioButton />
          </MCQArea>
        </div>
      )}

      {questionCount ? <NextButton /> : null}
    </div>
  );
};

export default Right;
