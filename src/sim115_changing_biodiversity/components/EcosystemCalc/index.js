import React from "react";
import Select from "../../../app/components/Select";
import "./ecosystem_calc.scss";
import MCQAreaContainer from "../../containers/MCQAreaContainer";
import NextButtonContainer from "../../containers/NextButtonContainer";

const EcosystemCalc = (props) => {
  const {
    options,
    value,
    onChange,
    answerAttempted,
    correctAnswer,
    nextSection,
    correctOptions,
    incorrectOptions,
    isPopupActive,
    onClick,
  } = props;

  const valueChange = (e, ind) => {
    onChange(e, ind);
  };

  const dropdownLists = Object.keys(options).map((item, index) => {
    return options[item].map((animalItem, animalIndex) => {
      if (animalIndex < 1) {
        return (
          <Select
            isPopupActive={isPopupActive}
            key={item}
            index={index}
            options={options[item]}
            value={value[index]}
            disabled={correctAnswer || correctOptions.indexOf(item) >= 0}
            heading={animalItem.title}
            onChange={(e) => valueChange(e, index)}
            onClick={onClick}
            classes={`horizontal ${
              incorrectOptions.includes(item) ? "incorrect" : ""
            }`}
          />
        );
      }
    });
  });

  return (
    <div className="question-area">
      <MCQAreaContainer>
        {nextSection ? <></> : <div>{dropdownLists}</div>}
      </MCQAreaContainer>
      {answerAttempted && correctAnswer ? <NextButtonContainer /> : null}
    </div>
  );
};

export default EcosystemCalc;
