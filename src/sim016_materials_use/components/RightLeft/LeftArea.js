import React, { useEffect, useRef, useState } from "react";
import Button from "../../../app/components/Button";
import { isIOS, isAndroid } from "react-device-detect";
import EventManager from "../../../app/events/manager";
import AccessibleList from "../../containers/AccessibleList";
import "./style.scss";

const LeftArea = (props) => {
  const {
    data,
    onDrop,
    dragInfo,
    infoIndex,
    infoDialog,
    closeInfoBtn,
    isAccessible,
    showDropZone,
    setInfoIndex,
    isPopupActive,
    setAccessible,
    setShowDropZone,
    toggleInfoDialog,
    selectedDraggable,
    setResetFocusState,
    altText,
  } = props;
  const buttonRef = useRef(null);
  const animalDropRef = useRef(null);

  useEffect(() => {
    $(animalDropRef.current).droppable({
      tolerance: "touch",
      drop: (event, ui) => {
        checkForDrop(selectedDraggable.srNo);
        ui.helper[0].style.display = "none";
      },
    });
  }, [selectedDraggable]);

  const closeDialog = () => {
    toggleInfoDialog(false);
    props.selectDraggable(null);
    setResetFocusState(true);
    setInfoIndex(-1);
    EventManager.broadcast("SECONDARY_CLICK");
  };

  const checkForDrop = (index) => {
    onDrop(true);
    toggleInfoDialog(true);
    setAccessible(false);
    props.selectDraggable(null);
  };

  useEffect(() => {
    if (infoDialog) {
      console.log("infoIndex: ", infoIndex);
      setTimeout(() => {
        const closeBtn = buttonRef.current.querySelector(
          ".wrapper-1.show button"
        );
        if (closeBtn) {
          console.log("closeBtn");
          closeBtn.focus();
        }
      }, 50);
    }
  }, [infoDialog]);

  const isDraggableSelected =
    selectedDraggable && Object.keys(selectedDraggable).length > 0;
  return (
    <div className="left-area" ref={buttonRef}>
      <AccessibleList />
      <img className="sr-only sr-image" alt={altText} />
      <div ref={animalDropRef} className={`animal-div highlight`}>
        <p className={"sr-only"} aria-hidden={infoDialog}>
          <span>{data.droppableAreaAltText}</span>
        </p>
      </div>
      {dragInfo.map((item) => {
        const show = item.srNo == infoIndex && infoDialog;
        return (
          <div
            role="alertdialog"
            key={`${item.srNo}`}
            className={`wrapper-1 ${show ? "show" : ""}`}
            aria-labelledby={`dialogheading${item.srNo}`}
            aria-hidden={
              isDraggableSelected || !infoDialog || item.srNo != infoIndex
            }
          >
            <div>
              <span></span>
              <p
                id={`dialogheading${item.srNo}`}
                dangerouslySetInnerHTML={{ __html: item.infoText }}
              ></p>
            </div>
            <Button
              text={closeInfoBtn}
              onClick={closeDialog}
              isPopUpOpen={isPopupActive}
              classes={"hotspot-btn close"}
              disabled={item.srNo != infoIndex}
              labelledby={isAndroid ? `dialogheading${item.srNo}` : null}
            />
          </div>
        );
      })}
    </div>
  );
};

export default LeftArea;
