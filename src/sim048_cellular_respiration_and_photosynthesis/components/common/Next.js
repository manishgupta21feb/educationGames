import React, { useEffect, useRef } from "react";
import Button from "../../../app/components/Button";

export default (props) => {
  const { text, onClick, isPopupActive, classes } = props;
  const btnRef = useRef(null);

  useEffect(() => {
    if (btnRef && btnRef.current) {
      setTimeout(() => {
        btnRef.current.focus();
      }, 100);
    }
  }, [btnRef]);
  return (
    <div className="continue-button">
      <Button
        ref={btnRef}
        classes={classes}
        text={text}
        onClick={onClick}
        isPopUpOpen={isPopupActive}
      />
    </div>
  );
};
