import React, { useState, useRef, useEffect } from "react";
import { isIOS, isAndroid } from "react-device-detect";
import Button from "../../../app/components/Button";
import EventManager from "../../../app/events/manager";

const Draggables = (props) => {
  const {
    helpingText,
    setInfoIndex,
    isAccessible,
    closeInfoBtn,
    setAccessible,
    isPopupActive,
    showHelpPopup,
    draggableItems,
    setShowDropZone,
    toggleInfoDialog,
    setShowHelpPopup,
    selectedDraggable,
    helpingButtonLabel,
  } = props;

  const helpButtonRef = useRef(null);
  const draggableRef = useRef(null);
  const tempRef = useRef(null);
  const closeHelpButtonRef = useRef(null);
  const [helpTextIndex, setHelpTextIndex] = useState(0);
  const isDraggableSelected =
    selectedDraggable && Object.keys(selectedDraggable).length > 0;

  useEffect(() => {
    if (showHelpPopup) {
      if (closeHelpButtonRef.current) {
        closeHelpButtonRef.current.focus();
      }
    }
    if (!showHelpPopup && tempRef.current !== null) {
      if (draggableRef.current) {
        const btn = draggableRef.current.querySelector(
          `.btn-help.help-text${tempRef.current}`
        );
        if (btn) {
          btn.focus();
        }
      }
    }
  }, [showHelpPopup]);

  const selectDraggable = (srNo) => {
    props.selectDraggable(draggableItems.find((item) => item.srNo == srNo));
  };

  const closeDialog = () => {
    props.selectDraggable(null);
    EventManager.broadcast("SECONDARY_CLICK");
    setShowHelpPopup(false);
  };

  const showInfo = () => {
    setShowHelpPopup(true);
    EventManager.broadcast("SECONDARY_CLICK");
  };

  const accessibleButtonClick = (e) => {
    console.log("here inside accessibleButtonClick");
    e.stopPropagation();
    const { source } = e.target.dataset;
    e.nativeEvent.stopImmediatePropagation();
    setAccessible(true);
    setInfoIndex(source);
    setShowDropZone(true);
    selectDraggable(source);
    toggleInfoDialog(false);
  };

  useEffect(() => {
    setTimeout(() => {
      initializeDraggables();
    }, 500);
  }, []);

  const onClick = (e, i) => {
    showInfo();
    tempRef.current = i;
    setHelpTextIndex(i);
  };

  const initializeDraggables = () => {
    if (draggableRef.current) {
      const draggableItems =
        draggableRef.current.querySelectorAll(".draggable-button");
      if (draggableItems) {
        $(draggableItems).draggable({
          scroll: false,
          helper: "clone",
          containment: ".leftright",
          start: function (event, ui) {
            toggleInfoDialog(false);
            selectDraggable(ui.helper[0].dataset.source);
            setInfoIndex(ui.helper[0].dataset.source);
          },
          revert: function () {
            props.selectDraggable(null);
            return true;
          },
        });
      }
    }
  };

  return (
    <>
      <div className="wrapper" ref={draggableRef}>
        {draggableItems.map((item, i) => {
          const selected =
            selectedDraggable && selectedDraggable.srNo === item.srNo;
          const classes = `${item.id}  ${selected ? "selectedItem" : ""}`;
          return (
            <div className="option-container draggable" key={item.srNo}>
              <div className="draggables">
                <button
                  key={isPopupActive ? "opened" : "closed"}
                  disabled={isPopupActive ? true : false}
                  data-source={item.srNo}
                  id={`draggable${item.srNo}`}
                  className={`accessible-button`}
                  onClick={accessibleButtonClick}
                  title={`${item.label} draggable`}
                ></button>
                <div
                  id={item.srNo}
                  aria-hidden={true}
                  data-source={item.srNo}
                  className={`draggable-button ${classes}`}
                  onClick={
                    isIOS
                      ? (e) => {
                          accessibleButtonClick(e);
                        }
                      : null
                  }
                >
                  <span></span>
                </div>
              </div>
              <span aria-hidden className="label">
                {item.label}
              </span>
              <div className="help-container">
                <Button
                  classes={`btn-help help-text${i} ${
                    showHelpPopup && i == helpTextIndex ? "selected" : ""
                  }`.trim()}
                  ref={helpButtonRef}
                  text={helpingText}
                  label={`${item.label} ${helpingButtonLabel}`}
                  isPopUpOpen={isPopupActive}
                  onClick={(e) => onClick(e, i)}
                />
              </div>
            </div>
          );
        })}
      </div>
      {showHelpPopup && (
        <div
          role="alertdialog"
          className="wrapper-1 show"
          aria-labelledby="pid1 pid2 pid3"
          aria-hidden={isDraggableSelected}
        >
          {draggableItems
            .filter((a, p) => p == helpTextIndex)
            .map((item, index) => {
              const { weight: w, material: m, temperature: t } = item;
              return (
                <div key={`help-popup-${index}`}>
                  <p id="pid1" dangerouslySetInnerHTML={{ __html: t }}></p>
                  <p id="pid2" dangerouslySetInnerHTML={{ __html: w }}></p>
                  <p id="pid3" dangerouslySetInnerHTML={{ __html: m }}></p>
                </div>
              );
            })}

          <Button
            text={closeInfoBtn}
            ref={closeHelpButtonRef}
            classes="hotspot-btn close"
            isPopUpOpen={isPopupActive}
            onClick={() => closeDialog()}
            labelledby={isAndroid ? "pid1 pid2 pid3" : null}
          />
        </div>
      )}
    </>
  );
};

export default Draggables;
