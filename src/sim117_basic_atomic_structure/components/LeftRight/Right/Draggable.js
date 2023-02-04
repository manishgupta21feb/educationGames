import React, { useEffect, useRef } from "react";
import SubmitButton from "../../../containers/SubmitButtonContainer";
import NextButton from "../../../containers/NextButtonContainer";
import { isIOS } from "react-device-detect";

import "./style.scss";
const Draggable = (props) => {
  const {
    rightHeadingText,
    draggable,
    updateAccessibleList,
    setDraggableValue,
    correctAnswer,
    disableSubmit,
    matchedItems,
    draggableValue,
    selectedQuestion,
    isPopupActive,
  } = props;

  const dragRef = useRef();
  const selectedDraggableRef = useRef(props.draggableValue);
  useEffect(() => {
    if (dragRef.current) {
      const draggable = dragRef.current.querySelectorAll(".card");
      $(draggable).draggable({
        helper: "clone",
        containment: ".leftright",
        zIndex: 999,
        revert: (dropzone) => {
          if (!dropzone) {
            setTimeout(() => {
              setDraggableValue(null);
            }, 500);
            EventManager.broadcast("INCORRECT_DRAG_REVERT");
          }

          return !dropzone;
        },

        start: (event, ui) => {
          let { dataset } = event.target;

          setDraggableValue({ ...dataset });
        },
      });
    }
  }, []);
  const accessibleButtonOption = (e) => {
    updateAccessibleList(true);

    setDraggableValue({ ...e.target.dataset });
  };

  useEffect(() => {
    if (correctAnswer || matchedItems.length == 18) {
      const _draggable = dragRef.current.querySelector(`.card`);

      if (_draggable) {
        $(_draggable).draggable("disable");
      }
    } else {
      const _draggable = dragRef.current.querySelector(`.card`);

      if (_draggable) {
        $(_draggable).draggable("enable");
      }
    }
  }, [matchedItems.length, correctAnswer]);

  useEffect(() => {
    if (!draggableValue && selectedDraggableRef.current) {
      const buttons = dragRef.current.querySelector("button.accessible");

      if (buttons.getAttribute("disabled") == null) {
        buttons.focus();
      }
    }
    selectedDraggableRef.current = draggableValue;
  }, [draggableValue]);
  return (
    <div className="right-container">
      <h2>{rightHeadingText}</h2>
      <div className="drag-box" ref={dragRef}>
        <button
          data-id={draggable.id}
          data-label={draggable.label}
          className="accessible"
          title={draggable.label}
          data-altxt={draggable.altText}
          onClick={(e) => accessibleButtonOption(e)}
          disabled={matchedItems.length == 18 || correctAnswer || isPopupActive}
        ></button>
        <div
          data-id={draggable.id}
          data-label={draggable.label}
          title={draggable.alt}
          className={`card`}
          data-altxt={draggable.altText}
          aria-hidden
          tabIndex="-1"
          onClick={isIOS ? (e) => accessibleButtonOption(e) : null}
        >
          <div style={{ pointerEvents: "none" }} className="electron-img"></div>
        </div>
      </div>
      <SubmitButton />
      {correctAnswer && disableSubmit ? <NextButton /> : null}
    </div>
  );
};

export default Draggable;
