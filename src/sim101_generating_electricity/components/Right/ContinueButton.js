import React from "react";
import Button from "../../../app/components/Button";
import "./style.scss";

export default (prosp) => {
  const { text, onClick, isPopupActive } = prosp;
  return (
    <Button
      classes={`toast-secondary-button positive`}
      text={text}
      onClick={onClick}
      isPopUpOpen={isPopupActive}
    ></Button>
  );
};