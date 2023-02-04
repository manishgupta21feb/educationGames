import React from "react";
import Button from "../../../../app/components/Button";
import "./style.scss";

export default (props) => {
  const { text, onCardClick, disabled, labelledby, label, ariaPressed } = props;
  return (
    <Button
      ariaPressed={ariaPressed}
      disabled={disabled}
      onClick={onCardClick}
      text={text}
      label={label}
      classes={`disasterBox`}
      labelledby={labelledby}
    ></Button>
  );
};
