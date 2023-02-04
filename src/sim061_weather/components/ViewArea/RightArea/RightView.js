import React from "react";
import ButtonContinue from "../../../containers/ButtonContinue";
import Label from "../../../../app/components/Label";
import "./style.scss";

import RadioButton from "../../../containers/RadioButton";

const RightView = (props) => {
  const {
    rightContent,
    buttonPressed,
    question,
    backButton,
    imageText,
    isPopupActive,
  } = props;

  return (
    <>
      <div>
        {!buttonPressed ? (
          <h2 aria-hidden={isPopupActive} className="right-content">
            {rightContent}
          </h2>
        ) : (
          <div>
            <h2 id="mcq-question-heading" className="questioncss">
              {question}
            </h2>
            <RadioButton />

            <div className="image-button2">
              <div className="image">
                <img className="sr-only sr-image" alt={imageText} />
                <div className={`bullets bullets${backButton[0]}`} />
                <div className={`dottedlines dottedlines${backButton[0]}`} />
                <div aria-hidden="true">
                  <Label
                    text={backButton}
                    classes={`label disabled buttonset button${backButton[0]}`}
                  />
                </div>
              </div>
            </div>
            <ButtonContinue />
          </div>
        )}
      </div>
    </>
  );
};
export default RightView;
