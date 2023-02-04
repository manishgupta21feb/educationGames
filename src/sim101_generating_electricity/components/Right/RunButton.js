import React from "react";
import Button from "../../../app/components/Button";
import "./style.scss";

export default (prosp) => {
  const { text, onClick, isPopupActive, disabled } = prosp;
  return (
    <Button
      classes={`primary`}
      text={text}
      onClick={onClick}
      isPopUpOpen={isPopupActive}
      disabled={disabled}
    ></Button>
  );
};
