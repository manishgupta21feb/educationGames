import React, { useState } from "react";
import NextButton from "../../containers/NextButton";
import Button from "../../../app/components/Button";
import { common, setShow, ariaLiveText } from "../../actions";
import EventManager from "../../../app/events/manager";
import DetailBox from "./DetailBox";
import "./style.scss";

const Right = (props) => {
  const {
    heading,
    elementData,
    itemsDetail,
    infoTableCommonText,
    onClick,
    onClick2,
    onClick3,
    setButtonShow,
    showPercentLabel,
    isPopupActive,
    label,
    ariaLiveText,
    helpText,
    showText
  } = props;

  return (
    <div className="right-container">
      <h2>{heading}</h2>
      {itemsDetail.map((item, index) => {
        return (
          <DetailBox
            isPopupActive={isPopupActive}
            label={label}
            key={index}
            item={item}
            infoTableCommonText={infoTableCommonText}
            setButtonShow={setButtonShow}
            onClick={onClick}
            onClick2={onClick2}
            onClick3={onClick3}
            ariaLiveText={ariaLiveText}
            helpText={helpText}
            showText={showText}
          ></DetailBox>
        );
      })}
      {elementData && elementData.length == itemsDetail.length ? (
        <NextButton />
      ) : null}
    </div>
  );
};

export default Right;
