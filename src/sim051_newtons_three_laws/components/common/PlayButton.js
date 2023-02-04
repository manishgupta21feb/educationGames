import React from "react";
import Button from "../../../app/components/Button";

export default (props) => {
  const { text, onClick, isPopupActive, disabled } = props;
  return (
    <div className="play-button">
      <Button
        classes="primary"
        text={text}
        onClick={onClick}
        disabled={disabled}
        isPopUpOpen={isPopupActive}
      />
    </div>
  );
};
