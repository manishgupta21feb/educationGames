import React from "react";
import Button from "../../../../app/components/Button";
import ButtonContainer from "../../../containers/ButtonNextQuestion";
import ContinueButtonContainer from "../../../containers/ContinueButtonContainer";
import "./style.scss";

const RightScreen = (props) => {
  const {
    data,
    onClick,
    heading,
    knobsHidden,
    screenNumber,
    answerAttempt,
    isPopupActive,
    visitedButton,
    submitButtonPressed,
  } = props;

  return (
    <>
      <div
        aria-hidden={isPopupActive}
        className="description-heading"
        dangerouslySetInnerHTML={{ __html: heading }}
      ></div>
      {!knobsHidden ? (
        <div className={"button-section"}>
          {data.magnificationButtonsData.map((item, i) => {
            const sel = visitedButton.indexOf(item.id) != -1 ? "selected" : "";
            return (
              <Button
                key={item.id}
                text={item.text}
                label={item.label}
                classes={`btn-chip ${sel}`}
                isPopupActive={isPopupActive}
                onClick={() => onClick(item.id)}
                disabled={screenNumber != item.id ? true : false}
              />
            );
          })}
        </div>
      ) : (
        <ContinueButtonContainer key={`vbutton${visitedButton.length}`} />
      )}
      {submitButtonPressed && answerAttempt ? <ButtonContainer /> : null}
    </>
  );
};
export default RightScreen;
