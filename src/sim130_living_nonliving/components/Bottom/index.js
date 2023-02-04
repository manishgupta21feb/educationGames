import React from "react";
import RadioButtons from "../../containers/RadioButtonContainer";
import MCQcomponentContainer from "../../containers/MCQcomponentContainer";

import "./style.scss";
const Bottom = (props) => {
  const { ifSubScreen, screenOneTxt, answerAttempt } = props;

  return (
    <>
      {ifSubScreen ? (
        <p
          className="bottom-paraScreen1"
          dangerouslySetInnerHTML={{
            __html: screenOneTxt,
          }}
        ></p>
      ) : (
        <div className="bottom-area">
          <MCQcomponentContainer>
            <RadioButtons />
          </MCQcomponentContainer>
        </div>
      )}
    </>
  );
};

export default Bottom;
