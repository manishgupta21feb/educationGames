import React, { useEffect, useRef } from "react";
import Button from "../../../app/components/Button";

export default (prosp) => {
  const { text, onClick, isPopupActive, classes, isFocusSend } = prosp;
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && isFocusSend) {
      setTimeout(() => {
        ref.current.focus();
      }, 100);
    }
  }, [ref.current]);

  return (
    <Button
      ref={ref}
      classes={`toast-secondary-button positive ${classes}`}
      text={text}
      onClick={onClick}
      isPopUpOpen={isPopupActive}
    ></Button>
  );
};
