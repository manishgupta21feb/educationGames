import React, { useRef } from "react";
import RadioContainer from "../../../containers/radioContainer";
import Button from "../../../../app/components/Button";
import { element } from "prop-types";

const RightSection = ({
  sectionContent,
  updateCurrentFriction,
  nextButton,
  isPopupActive,
  questionContent,
  resetActivity,
  frictionTest,
}) => {
  const continueRef = useRef(null);

  const isContinue = () => {
    return frictionTest.every((element) => element == 1);
  };
  return (
    <div className="frictionRightHolder">
      <p dangerouslySetInnerHTML={{ __html: sectionContent }}></p>
      <p
        id="mcq-question-heading"
        dangerouslySetInnerHTML={{ __html: questionContent }}
      ></p>
      <RadioContainer onChange={updateCurrentFriction} />
      {isContinue() && (
        <Button
          text={nextButton}
          ref={continueRef}
          onClick={() => {
            resetActivity();
          }}
          hideTooltip={false}
          disabled={!isContinue()}
          ariaHidden={isPopupActive}
          isPopUpOpen={isPopupActive}
          classes="toast-secondary-button positive right-arrow frictionRight"
        />
      )}
    </div>
  );
};

export default RightSection;
