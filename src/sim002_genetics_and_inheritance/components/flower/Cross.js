import React, { useRef } from "react";
import Button from "../../../app/components/Button";

const Cross = (props) => {
  const buttonRef = useRef(null);
  const { visible, onCrossClick, crossText, isPopupActive } = props;

  return (
    <Button
      ref={buttonRef}
      text={crossText}
      label={crossText}
      onClick={onCrossClick}
      ariaHidden={!visible || isPopupActive}
      isPopupActive={!visible || isPopupActive}
      classes={visible ? "cross-button visible" : "cross-button"}
    />
  );
};

export default Cross;
