import React from "react";
import RadioButtons from "../../../containers/RadioButtonContainer";
import MCQcomponentContainer from "../../../containers/MCQcomponentContainer";
import Button from "../../../../app/components/Button";
import ButtonNext from "../../../containers/ButtonNextContainer";
import "./style.scss";
const Bottom = (props) => {
  const { ifSubScreen, text } = props;

  return (
    <div>
      {ifSubScreen ? (
        <div>
          <p
            className="bottom-paraScreen1"
            dangerouslySetInnerHTML={{
              __html: text,
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
