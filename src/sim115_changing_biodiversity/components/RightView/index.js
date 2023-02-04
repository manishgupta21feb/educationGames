import React from "react";
import "./rightview.scss";
import Ecosystem from "../Ecosystem";
import EcosystemCalc from "../EcosystemCalc";

const RightView = (props) => {
  const {
    screenType,
    ecosystems,
    isPopupActive,
    onEcosystemBtn,
    options,
    value,
    disabled,
    onChange,
    answerAttempted,
    correctAnswer,
    visitedHotspots,
    nextSection,
    correctOptions,
    incorrectOptions,
    onClick,
  } = props;

  const viewFilter = () => {
    if (nextSection) {
      return (
        <div>
          <EcosystemCalc
            options={options}
            value={value}
            disabled={disabled}
            onChange={onChange}
            answerAttempted={answerAttempted}
            correctAnswer={correctAnswer}
            nextSection={nextSection}
            correctOptions={correctOptions}
            incorrectOptions={incorrectOptions}
            isPopupActive={isPopupActive}
            onClick={onClick}
          />
        </div>
      );
    } else {
      switch (screenType) {
        case "ecosystem1":
        case "ecosystem2":
        case "ecosystem3":
          return (
            <EcosystemCalc
              options={options}
              value={value}
              disabled={disabled}
              onChange={onChange}
              answerAttempted={answerAttempted}
              correctAnswer={correctAnswer}
              nextSection={nextSection}
              incorrectOptions={incorrectOptions}
              correctOptions={correctOptions}
              isPopupActive={isPopupActive}
              onClick={onClick}
            />
          );
        default:
          return (
            <Ecosystem
              ecosystems={ecosystems}
              isPopupActive={isPopupActive}
              onEcosystemBtn={onEcosystemBtn}
              visitedHotspots={visitedHotspots}
              nextSection={nextSection}
            />
          );
      }
    }
  };

  return <div className="right-content">{viewFilter()}</div>;
};

export default RightView;
