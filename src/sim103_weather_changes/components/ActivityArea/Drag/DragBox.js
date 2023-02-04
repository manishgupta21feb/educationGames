import React, { useRef, useEffect } from "react";
import { isIOS } from "react-device-detect";

const DragBox = (props) => {
  const {
    element,
    selectedDay,
    currentseason,
    itemDroppedAt,
    isPopupActive,
    setDraggableItem,
    updateAccessibleList,
    dragTag,
  } = props;

  const draggableRef = useRef(null);
  useEffect(() => {
    draggable();
  }, [element]);

  const draggable = () => {
    $(draggableRef.current)?.draggable({
      cancel: false,
      helper: "clone",
      cursor: "grabbing",
      containment: ".activity_area",
      revert: (val) => {
        if (!val) {
          setDraggableItem(null);
          EventManager.broadcast("INCORRECT_DRAG_REVERT");
        }
        return !val;
      },
      start: (event, ui) => {
        const dataset = {
          value: event.currentTarget.dataset.value,
          target: event.currentTarget.dataset.target,
          id: event.currentTarget.dataset.index,
        };
        setDraggableItem({ ...dataset });
      },
    });
  };

  const selectDraggable = (event) => {
    const dataset = {
      value: event.currentTarget.dataset.value,
      target: event.currentTarget.dataset.target,
      id: event.currentTarget.dataset.index,
    };
    updateAccessibleList(true);
    setDraggableItem({ ...dataset });
  };

  return (
    <div className="drag-box">
      <button
        data-index={element.id}
        data-value={element.name}
        onClick={selectDraggable}
        data-target={element.accept}
        aria-label={element.altText}
        className={`option accessible-button ${
          selectedDay ? "" : "non-intractiveBtn"
        }`}
        disabled={!!itemDroppedAt || isPopupActive || !selectedDay}
      ></button>
      <div
        aria-hidden
        tabIndex="-1"
        ref={draggableRef}
        data-index={element.id}
        data-value={element.name}
        data-target={element.accept}
        className={`bgButton ${currentseason} ${element.id} ${
          element.isDisable ? "element-dragged" : ""
        }`}
        onClick={
          isIOS
            ? (e) => {
                selectDraggable(e);
              }
            : null
        }
      >
        <span className={`bgImg ${selectedDay ? "" : "non-intractive"}`}></span>
      </div>
    </div>
  );
};

export default DragBox;
