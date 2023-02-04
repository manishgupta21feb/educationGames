import React, { useState, useEffect, useRef } from "react";
import NextBtn from "../../containers/ButtonNext";
import Button from "../../../app/components/Button";

export default (props) => {
  const btnRef = useRef(null);
  const tempRef = useRef(true);

  useEffect(() => {
    if (btnRef.current && tempRef.current && props.buttonShow) {
      setTimeout(() => {
        btnRef.current.focus();
        tempRef.current = false;
      }, 500);
    }
  });
  return (
    <div className="nextButton">
      <Button ref={btnRef} {...props} />
    </div>
  );
};
