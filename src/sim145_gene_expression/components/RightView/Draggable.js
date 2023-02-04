import React, { useRef, useEffect, useState } from "react";
import "./style.scss";
import { isIOS } from "react-device-detect";

import Button from "../../../app/components/Button";
import EventManager from "../../../app/events/manager";
const RightView = (props) => {
  const {
    matchedItems,
    onCheck,
    setDraggableValue,
    data,
    updateAccessibleList,
    isPopupActive,
    setDraggable,
    hideCheckButton,
    nextOnClick,
    currentScreen,
    OST,
    codonChartPopup,
    lastScreenPart,
    fifthScreenOnContinue,
    setzindexStatus,
    buttonLabels,
  } = props;

  const dragRef = useRef();
  const draggableElement =
    currentScreen === "second"
      ? data.screen2Draggabels
      : currentScreen === "third"
      ? data.screen3Draggabels
      : data.screen5Draggabels;
  const dropRef = useRef(props.matchedItems);
  const btnRef = useRef();
  const dragRefFocus = useRef();
  const [dragCountState, setDragCountState] = useState(false);

  const createDraggables = (domElement) => {
    $(domElement).draggable({
      helper: "clone",
      containment: ".leftright",
      start: (event, ui) => {
        let { dataset } = event.target;
        setDraggableValue({ ...dataset });
        setzindexStatus(true);
      },

      revert: (dropzone) => {
        setTimeout(() => {
          setzindexStatus(false);
        }, 500);
        setDraggableValue(null);
        EventManager.broadcast("INCORRECT_DRAG_REVERT");
        return !dropzone;
      },
    });
  };

  useEffect(() => {
    if (dragRef.current) {
      const draggable = dragRef.current.querySelectorAll(".card");
      createDraggables(draggable);
    }
  }, [draggableElement]);

  useEffect(() => {
    if (dropRef.current.length < matchedItems.length) {
      const item = { ...matchedItems[matchedItems.length - 1] };
      const dragBox = dragRef.current.querySelector(`.card.${item.drag.id}`);
      $(dragBox).draggable("disable");
      if (dragRefFocus.current != null) {
        const buttons = dragRef.current.querySelectorAll(".accessible-button");
        const index = parseInt(dragRefFocus.current);

        let newIndex = null;
        for (let i = index + 1; i < buttons.length; i++) {
          if (buttons[i].getAttribute("disabled") == null) {
            newIndex = buttons[i];
            break;
          }
        }
        if (newIndex == null) {
          for (let i = 0; i < index; i++) {
            if (buttons[i].getAttribute("disabled") == null) {
              newIndex = buttons[i];
              break;
            }
          }
        }
        if (newIndex) {
          newIndex.focus();
        }
        dragRefFocus.current = null;
      }
    } else {
      const filterDragItem = dropRef.current.filter((ele) => {
        return matchedItems.findIndex((m) => m.drag == ele.drag) == -1;
      });
      for (let item of filterDragItem) {
        const dragBox = dragRef.current.querySelector(`.card.${item.drag.id}`);
        $(dragBox).draggable("enable");
      }
    }
    dropRef.current = matchedItems;

    if (currentScreen === "fifth") {
      if (lastScreenPart === "first" && matchedItems.length == 2) {
        setDragCountState(true);
      } else if (lastScreenPart === "second" && matchedItems.length == 5) {
        setDragCountState(true);
      } else setDragCountState(false);
    } else {
      if (matchedItems.length == draggableElement.length) {
        setDragCountState(true);
      } else {
        setDragCountState(false);
      }
    }
  }, [matchedItems]);

  const fifthScreenOnContinueFun = () => {
    setDragCountState(false);
    fifthScreenOnContinue();
  };

  useEffect(() => {
    const emptyDragFocus = dragRef.current.querySelectorAll(
      ".accessible-button"
    );
    const indexOld = parseInt(dragRefFocus.current);

    if (emptyDragFocus[indexOld]) {
      emptyDragFocus[indexOld].focus();
    }
  }, [setDraggable]);

  const accessibleButtonOption = (e) => {
    updateAccessibleList(true);
    dragRefFocus.current = e.target.dataset.index;
    setDraggableValue({ ...e.target.dataset });
  };

  useEffect(() => {
    if (dragCountState) {
      const btnFocus = btnRef.current.querySelector(".toast-secondary-button");
      if (dragCountState) {
        btnFocus.focus();
      }
    }
  }, [dragCountState]);

  return (
    <>
      <div className="position">
        <div>
          <p
            role="heading"
            aria-level="2"
            className={
              "right-text " +
              (currentScreen === "third"
                ? "third-screen-right-text"
                : "second-screen-right-text")
            }
            dangerouslySetInnerHTML={{ __html: OST }}
          ></p>
        </div>
        {currentScreen === "third" ? (
          <div className="codon-chart-container">
            <div className="codon-chart-txt">{data.codonChartTxt}</div>
            <button
              title={data.codonChartTxt}
              aria-label={data.codonChartTxt}
              className="codon-chart-button"
              tabIndex={isPopupActive ? "-1" : "0"}
              onClick={codonChartPopup}
            >
              <div className="codon-chart-mark">?</div>
            </button>
          </div>
        ) : (
          ""
        )}
        <div className="draggables" ref={dragRef}>
          {draggableElement.map((ele, index) => {
            const getDropped =
              matchedItems.findIndex((m) => m.drag.id == ele.id) != -1;
            return (
              <div
                key={ele.id}
                className={
                  "drag-box " +
                  (currentScreen === "third" ? "drag-box-thirdScreen" : "")
                }
              >
                <button
                  className="accessible-button"
                  aria-label={ele.ariaLabel}
                  data-arialabel={ele.ariaLabel}
                  data-id={ele.id}
                  data-text={ele.text}
                  data-index={index}
                  data-answer-id={ele.answerId}
                  disabled={getDropped || isPopupActive}
                  onClick={accessibleButtonOption}
                ></button>
                <div
                  aria-hidden
                  tabIndex="-1"
                  data-id={ele.id}
                  data-text={ele.text}
                  data-index={index}
                  data-answer-id={ele.answerId}
                  data-arialabel={ele.ariaLabel}
                  onClick={
                    isIOS && !(getDropped || isPopupActive)
                      ? (e) => accessibleButtonOption(e)
                      : null
                  }
                  className={`draggable-card card ${ele.id} ${
                    currentScreen === "fifth"
                      ? "fifthScreen-draggable-card"
                      : ""
                  }`}
                >
                  <span
                    className={
                      currentScreen === "fifth" ? "fifthScreen-span" : ""
                    }
                  >
                    {ele.text}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="submit-button" ref={btnRef}>
          <Button
            label={buttonLabels}
            text={buttonLabels}
            classes="toast-secondary-button positive right-arrow"
            onClick={
              !hideCheckButton
                ? onCheck
                : currentScreen === "fifth" && lastScreenPart === "first"
                ? () => fifthScreenOnContinueFun()
                : nextOnClick
            }
            isPopupActive={isPopupActive}
            disabled={!hideCheckButton ? !dragCountState : ""}
          />
        </div>
      </div>
    </>
  );
};

export default RightView;
