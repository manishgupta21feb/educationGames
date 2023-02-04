import "./style.scss";

import React, { useEffect, useRef } from "react";
import Button from "../../../../app/components/Button";

export default (props) => {
  const {
    text,
    onClick,
    isPopupActive,
    classes,
    disabled,
    droppablesFull,
    correct,
  } = props;

  const btnRef = useRef(null);
  const diableBtn = correct ? true : false;

  useEffect(() => {
    if (btnRef && btnRef.current && droppablesFull) {
      btnRef.current.focus();
    }
  }, [droppablesFull]);
  return (
    <>
      <Button
        text={text}
        ref={btnRef}
        classes={classes}
        onClick={onClick}
        disabled={disabled || diableBtn}
        isPopUpOpen={isPopupActive}
      />
    </>
  );
};
