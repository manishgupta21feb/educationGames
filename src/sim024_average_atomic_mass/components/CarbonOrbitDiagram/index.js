import React from "react";
import { isIOS } from "react-device-detect";
import { Button } from "../../../app/components/DnD";

import "./style.scss";

export default (props) => {
  const { id, name, disabled, onDragClick, isPopupActive } = props;

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
      classes={`${id} ${disabled ? "disabled" : ""}`}
      source={id}
      onClick={onClick}
      onDraggableClick={onDraggableClick}
      disabled={disabled || isPopupActive}
    ></Button>
  );
};
