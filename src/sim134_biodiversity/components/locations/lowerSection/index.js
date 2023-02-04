import React from "react";
import IntroText from "../../../containers/IntroContainer";
import Question from "../../../containers/QuestionContainer";

const LocationALower = ({
  questionData,
  questionState,
  radioButtons,
  onOptionUpdate,
  currentOption,
  currentLocation,
  data,
}) => {
  const { buttonLabels } = data;
  const updateOption = (ref) => {
    onOptionUpdate(ref);
  };
  return (
    <div className="locationALower">
      {currentLocation == "locationF" && !questionState ? (
        <IntroText
          content={questionData.introContent}
          ariaLabel={questionData.altContent}
          buttonLabels={buttonLabels}
        />
      ) : (
        <Question
          heading={questionData.questionHeader}
          radioButtons={radioButtons}
          updateOption={updateOption}
          currentOption={currentOption}
          buttonLabels={buttonLabels}
        />
      )}
    </div>
  );
};

export default LocationALower;
