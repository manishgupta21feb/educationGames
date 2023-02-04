import React, { useEffect, useRef } from "react";
import Button from "../../../../../app/components/Button";

const IntroContent = ({
  content,
  buttonLabels,
  isPopupActive,
  onQuestionState,
  onSetReset,
}) => {
  const continueRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      onSetReset();
    }, 200);
  }, []);

  return (
    <div className="introContent">
      <p dangerouslySetInnerHTML={{ __html: content }}></p>
      <Button
        text={buttonLabels.continue}
        ref={continueRef}
        onClick={onQuestionState}
        hideTooltip={false}
        disabled={false}
        ariaHidden={isPopupActive}
        isPopUpOpen={isPopupActive}
        classes="toast-secondary-button positive right-arrow"
      />
    </div>
  );
};

export default IntroContent;
