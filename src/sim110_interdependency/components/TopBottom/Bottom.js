import React from "react";
import RadioButtons from "../../containers/RadioButtonContainer";
import MCQcomponentContainer from "../../containers/MCQcomponentContainer";

import "./style.scss";
const Bottom = (props) => {
  const { ifSubScreen, screenTwoTxt } = props;

  return (
    <div>
      {ifSubScreen ? (
        <div>
          <p
            className="bottom-paraScreen1"
            dangerouslySetInnerHTML={{
              __html: screenTwoTxt,
            }}
          ></p>
        </div>
      ) : (
        <div className="bottom-area">
          <MCQcomponentContainer>
            <RadioButtons />
          </MCQcomponentContainer>
        </div>
      )}
    </div>
  );
};

export default Bottom;
