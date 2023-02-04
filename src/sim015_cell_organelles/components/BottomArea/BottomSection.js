import React, { useEffect } from "react";
import ContinueButtonContainer from "../../containers/ContinueButtonContainer";
import NextButtonContainer from "../../containers/NextButtonContainer";
import "./style.scss";

const BottomSection = (props) => {
  const {
    introductionText,
    showContinueButton,
    showNextButton,
    showSecondryText,
    secondaryIntroText,
    audioStatePlay,
  } = props;

  useEffect(() => {
    if (audioStatePlay && showContinueButton) {
      EventManager.broadcast("SCREEN_TEXT");
    } else if (audioStatePlay && showNextButton) {
      EventManager.broadcast("SCREEN_TEXT2");
    }
  }, [audioStatePlay]);

  return (
    <div className="instruction-area">
      <p
        dangerouslySetInnerHTML={{
          __html: showSecondryText ? secondaryIntroText : introductionText,
        }}
      ></p>

      <div className="button">
        {showContinueButton && <ContinueButtonContainer />}
        {showNextButton && <NextButtonContainer />}
      </div>
    </div>
  );
};

export default BottomSection;
