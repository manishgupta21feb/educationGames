import React from "react";
import IntroText from "../../../containers/IntroContainer";
import Question from "../../../containers/QuestionContainer";

const LocationALower = ({
  questionData,
  questionState,
  radioButtons,
  onOptionUpdate,
  currentOption,
  data,
}) => {
  const { buttonLabels } = data;

  const updateOption = (ref) => {
    onOptionUpdate(ref);
  };
  return (
    <div className="locationALower">
      {questionState ? (
        <Question
          heading={questionData.questionHeader}
          radioButtons={radioButtons}
          updateOption={updateOption}
          currentOption={currentOption}
          buttonLabels={buttonLabels}
        />
      ) : (
        <IntroText
          content={questionData.introContent}
          ariaLabel={questionData.altContent}
          buttonLabels={buttonLabels}
        />
      )}
    </div>
  );
};

export default LocationALower;
