import React from "react";
import "./style.scss";
import Button from "../../../app/components/Button";

const ForthScreenRight = (props) => {
  const {
    forthScreenOnClick,
    nextButtonLabel,
    isPopupActive,
    forthScreenRightOST,
    currentScreen,
  } = props;

  return (
    <div className="forth-screen-right-main">
      <div className="forth-screen-right-text">
        <p>{forthScreenRightOST}</p>
      </div>
      <Button
        label={nextButtonLabel}
        text={nextButtonLabel}
        classes="toast-secondary-button positive right-arrow"
        onClick={forthScreenOnClick}
        isPopupActive={isPopupActive}
        disable={currentScreen !== "forth"}
      />
    </div>
  );
};

export default ForthScreenRight;
