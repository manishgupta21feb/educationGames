import React, { useRef, useEffect, useState } from "react";
import Button from "../../../../app/components/Button";
import Dropdown from "../../../containers/DropdownContainer";
import SubmitButton from "../../../containers/SubmitBtnContainer";
import "./style.scss";

const FooterArea = (props) => {
  const {
    data,
    submitAnswer,
    seasonChange,
    isPopupActive,
    answerSubmitted,
    seasonsSequenceLength,
  } = props;

  const buttonRef = useRef(null);
  const check = seasonsSequenceLength <= 1;
  const [focus, setFocus] = useState(submitAnswer && answerSubmitted);
  const classes = `toast-secondary-button positive ${
    check ? "" : "right-arrow"
  }`;

  useEffect(() => {
    setFocus(submitAnswer && answerSubmitted);
  }, [submitAnswer, answerSubmitted]);

  useEffect(() => {
    if (focus) {
      if (buttonRef.current) {
        buttonRef.current.focus();
      }
    }
  }, [focus]);

  return (
    <div className={`footer-section`}>
      <Dropdown />
      <SubmitButton />
      {submitAnswer && answerSubmitted ? (
        <Button
          ref={buttonRef}
          classes={classes}
          onClick={seasonChange}
          isPopupActive={isPopupActive}
          text={`${
            check ? data.buttonLabels.finish : data.buttonLabels.continue
          }`}
        />
      ) : null}
    </div>
  );
};

export default FooterArea;
