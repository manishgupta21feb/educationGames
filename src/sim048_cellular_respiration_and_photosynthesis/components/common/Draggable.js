import React from "react";
import { isIOS } from "react-device-detect";
import { Button } from "../../../app/components/DnD";

export default (props) => {
  const { id, name, text, disabled, onDragClick, isPopupActive, draghtml, isSign } = props;

  const onClick = (e) => {
    onDragClick(e);
  };

  const onDraggableClick = (e) => {
    if (isIOS) {
      onDragClick(e);
    }
  };

  return (
    <Button
      label={name}
      text={text}
      classes={`${id} ${disabled ? "disabled" : ""}`}
      source={id}
      onClick={onClick}
      onDraggableClick={onDraggableClick}
      disabled={disabled}
      isPopupActive={isPopupActive}
      draghtml={draghtml}
      ariaHiddenLabel= {isSign ? true : !disabled}
    >
      {isSign && disabled ? <p className="sr-only">{isSign}</p> : null }
    </Button>
  );
};
