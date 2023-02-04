import React from "react";
import Button from "../../../../app/components/Button";
import ButtonContinue from "../../../containers/ButtonContinue";
import MCQContainer from "../../../containers/MCQContainer";
import RadioButtonContainer from "../../../containers/RadioButtonContainer";
import "./style.scss";
const RightArea = (props) => {
  const {
    heading,
    mcqView,
    buttonAdded,
    buttonClicked,
    buttonDisable,
    clickButton,
    scroll,
    isPopupActive,
    questionClass,
  } = props;
  const clickedButton = (e) => {
    clickButton(e.target.id);
  };
  return (
    <div>
      {!mcqView ? (
        <>
          <h2 className="heading-css">{heading}</h2>
          {buttonAdded.map((items) => {
            return (
              <div key={items.id} className={`right-button ${items.id}`}>
                <Button
                  id={items.id}
                  text={items.text}
                  classes={`btn primary`}
                  disabled={
                    isPopupActive ||
                    buttonDisable ||
                    (!buttonClicked ? items.disable1 : items.disable2)
                  }
                  onClick={clickedButton}
                />
              </div>
            );
          })}
        </>
      ) : (
        <div
          className={`mcq-wrapper ${scroll ? "scrollable-mcq" : ""} ${
            questionClass == "screen3" ? "radiobutton-css" : ""
          }`}
        >
          <MCQContainer>
            <RadioButtonContainer />
          </MCQContainer>
        </div>
      )}

      <ButtonContinue />
    </div>
  );
};

export default RightArea;
