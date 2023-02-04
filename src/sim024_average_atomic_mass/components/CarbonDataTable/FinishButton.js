import React, { useEffect, useRef } from "react";
import Button from "../../../app/components/Button";

const NextButton = (props) => {
  const { text, isPopUpOpen, classes, onClick } = props;

  const btnRef = useRef(null);

  useEffect(() => {
    if (btnRef && btnRef.current) {
      setTimeout(() => {
        btnRef.current.focus();
      }, 300);
    }
  }, [text]);

  return (
    <Button
      ref={btnRef}
      text={text}
      isPopUpOpen={isPopUpOpen}
      classes={classes}
      onClick={onClick}
      disabled={isPopUpOpen}
    ></Button>
  );
};

export default NextButton;
