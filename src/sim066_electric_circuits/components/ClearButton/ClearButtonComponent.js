import React, { useEffect, useRef } from "react";
import Button from "../../../app/components/Button";

export default (props) => {
  const { text, onClick, isPopUpOpen, classes, disabled, droppablesFull } =
    props;

  const btnRef = useRef(null);

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
        disabled={disabled}
        isPopUpOpen={isPopUpOpen}
      />
    </>
  );
};
