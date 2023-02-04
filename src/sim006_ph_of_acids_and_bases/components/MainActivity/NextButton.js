import React, { useEffect, useRef } from "react";
import Button from "../../../app/components/Button";

const NextButton = (props) => {
  const { text, isPopUpOpen, classes, onClick } = props;

  const btnRef = useRef(null);

  useEffect(() => {
    if (btnRef && btnRef.current) {
      btnRef.current.focus();
    }
  }, [text]);

  return (
    <Button
      ref={btnRef}
      text={text}
      isPopUpOpen={isPopUpOpen}
      classes={classes}
      onClick={onClick}
    ></Button>
  );
};

export default NextButton;
