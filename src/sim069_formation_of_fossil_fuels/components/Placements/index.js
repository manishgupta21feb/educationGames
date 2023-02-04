import React, { useState, useEffect, useRef } from "react";
import Wrapper from "../Wrapper";
import Button from "../../../app/components/Button";
import "./placement.scss";

const Placements = (props) => {
  const timeoutRef = useRef(null);
  const refContinueBtn = useRef(null);
  const droppedItemRef = useRef(props.droppedItem);
  const {
    fossil,
    onPlacement,
    dropzoneText,
    isPopupActive,
    placementZones,
    showFinalScreen,
    operatablesData,
    continueBtnText,
    dropzoneBlankText,
    dropzoneBlankTextEnd,
    setDroppedItem,
    droppedItem,
  } = props;

  const length = operatablesData[fossil].length;
  let _placementZones = [...placementZones];
  _placementZones = _placementZones.slice(0, length);

  useEffect(() => {
    if (
      _placementZones &&
      _placementZones.every((p) => p.hidden) &&
      ((fossil == "oil" && _placementZones.length == 6) ||
        (fossil == "coal" && _placementZones.length == 5) ||
        (fossil == "sedimentary" && _placementZones.length == 4))
    ) {
      if (refContinueBtn.current) {
        refContinueBtn.current.focus();
      }
    }
  }, [_placementZones]);

  useEffect(() => {
    if (droppedItem !== droppedItemRef.current) {
      if (!droppedItemRef.current && droppedItem) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setDroppedItem(null);
        }, 1500);
      } else if (!droppedItem) {
        clearTimeout(timeoutRef.current);
        setDroppedItem(null);
      }
    }
    droppedItemRef.current = droppedItem;
  }, [droppedItem]);

  const placementZone = _placementZones?.map((item, index) => {
    const { id, accept, disabled, hidden, placedText } = item;
    return (
      <button
        key={`${id}`}
        disabled={disabled}
        data-accept={accept}
        onClick={onPlacement}
        aria-hidden={isPopupActive}
        tabIndex={isPopupActive ? "-1" : null}
        className={`placement ${disabled || hidden ? "placement--placed" : ""}`}
      >
        {hidden ? (
          <p className="sr-only sr-image">{`${dropzoneText} ${
            index + 1
          } ${placedText}`}</p>
        ) : (
          <p className="sr-only sr-image">{`${dropzoneBlankText}${
            index + 1
          } ${dropzoneBlankTextEnd}`}</p>
        )}
        <div
          style={{ pointerEvents: "none" }}
          className={`${hidden ? accept : ""} ${
            droppedItem && droppedItem.index == index ? droppedItem.active : ""
          }`}
        ></div>
      </button>
    );
  });
  return (
    <>
      <Wrapper className={`wrapper--space-around wrapper--placement ${fossil}`}>
        {placementZone}
      </Wrapper>

      {_placementZones &&
      _placementZones.every((p) => p.hidden) &&
      ((fossil == "oil" && _placementZones.length == 6) ||
        (fossil == "coal" && _placementZones.length == 5) ||
        (fossil == "sedimentary" && _placementZones.length == 4)) ? (
        <Button
          ref={refContinueBtn}
          text={continueBtnText}
          classes="toast-secondary-button positive right-arrow"
          onClick={showFinalScreen}
          isPopupActive={isPopupActive}
        />
      ) : null}
    </>
  );
};

export default Placements;
