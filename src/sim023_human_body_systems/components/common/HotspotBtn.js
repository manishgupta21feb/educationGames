import React from "react";
import Button from "../../../app/components/Button";

export default (props) => {
  const { onClick, classes, id, text, isPopupActive } = props;

  return (
    <Button
      id={id}
      text={text}
      label={text}
      isPopupActive={isPopupActive}
      disabled={isPopupActive}
      classes={classes}
      onClick={onClick}
    />
  );
};
