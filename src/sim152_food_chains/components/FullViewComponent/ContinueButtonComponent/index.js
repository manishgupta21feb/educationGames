import "./style.scss";

import React, { useEffect, useRef } from "react";
import Button from "../../../../app/components/Button";

export default (props) => {
  const { text, onClick, classes, disabled, isPopupActive, focusOnButton } =
    props;

  const btnRef = useRef(null);

  useEffect(() => {
    if (btnRef && btnRef.current && focusOnButton) {
      btnRef.current.focus();
    }
  }, [focusOnButton]);

  return (
    <>
      <Button
        text={text}
        ref={btnRef}
        classes={classes}
        onClick={onClick}
        disabled={disabled}
        isPopUpOpen={isPopupActive}
      />
    </>
  );
};
