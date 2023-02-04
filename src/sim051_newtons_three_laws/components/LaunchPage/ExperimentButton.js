import React from "react";
import Button from "../../../app/components/Button";

export default (props) => {
  const { btn, onBtnClick, isPopupActive } = props;

  const onClick = () => {
    if(onBtnClick){
        onBtnClick(btn);
    }
  };

  return (
    <Button
      text={btn.name}
      disabled={isPopupActive}
      isPopupActive={isPopupActive}
      classes={`hotspot-btn label`}
      id={btn.id}
      onClick={onClick}
    ></Button>
  );
};
