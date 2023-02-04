import React from "react";
import "./style.scss";
import Button from "../../../app/components/Button";

const FirstScreenRightView = (props) => {
  const {
    firstScreenOnClick,
    continueButtonLabel,
    isPopupActive,
    firstScreenRightOST,
    currentScreen,
  } = props;

  return (
    <div className="first-screen-right-main">
      <div className="first-screen-right-text">
        <p>{firstScreenRightOST}</p>
      </div>
      <Button
        label={continueButtonLabel}
        text={continueButtonLabel}
        classes="toast-secondary-button positive right-arrow"
        onClick={firstScreenOnClick}
        isPopupActive={isPopupActive}
        disable={currentScreen !== "first"}
      />
    </div>
  );
};

export default FirstScreenRightView;
