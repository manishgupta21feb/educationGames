import React, { useRef, useEffect, useState } from "react";
import { isIOS } from "react-device-detect";

const DragBox = (props) => {
  const {
    isPopupActive,
    element,
    selectDraggableFull,
    dragBtnText,
    matchedItems,
    accessibleListVisible,
    updateAccessibleList,
    index,
    disableDrag,
    selectedDraggableFull,
  } = props;

  const selectedDraggableRef = useRef(false);
  const draggableRef = useRef(null);
  const dropRef = useRef(props.matchedItems);
  const dragRef = useRef();
  const [dragCountState, setDragCountState] = useState(false);
  const dragRefFocus = useRef();
  useEffect(() => {
    draggable();
  }, []);

  const draggable = () => {
    const draggable = dragRef.current.querySelectorAll(".card");
    $(draggable)
      ?.draggable({
        cancel: false,
        helper: "clone",
        cursor: "grabbing",
        containment: ".layout_inside",
        revert: (val) => {
          if (!val) {
            selectDraggableFull(null);
            EventManager.broadcast("INCORRECT_DRAG_REVERT");
          }
          return !val;
        },
        start: (event, ui) => {
          const dataset = {
            value: event.currentTarget.dataset.value,
            target: event.currentTarget.dataset.target,
            text: event.target.dataset.text,
            id: event.currentTarget.dataset.id,
          };

          selectDraggableFull({ ...dataset });
        },
      })
      .draggable("enable");
  };

  const selectDraggable = (event) => {
    // const dataset = {
    //   value: event.currentTarget.dataset.value,
    //   target: event.currentTarget.dataset.target,
    // };
    props.updateAccessibleList(true);
    selectDraggableFull({ ...dataset });
  };

  useEffect(() => {
    if (dropRef.current.length < matchedItems.length) {
      const item = { ...matchedItems[matchedItems.length - 1] };
      const dragBox = dragRef.current.querySelector(`.card.${item.drag.id}`);

      $(dragBox).draggable("disable");
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
    if (matchedItems.length == 8) {
      setDragCountState(true);
    } else {
      setDragCountState(false);
    }
  }, [matchedItems]);
  console.log("abcd");
  const accessibleButtonOption = (e) => {
    updateAccessibleList(true);

    dragRefFocus.current = e.target.dataset.index;
    selectDraggableFull({ ...e.target.dataset });
  };

  return (
    <div className="drag-box" ref={dragRef}>
      <button
        tabIndex={isPopupActive ? -1 : 0}
        data-target={element.accept}
        data-value={element.name}
        className={`option accessible-button ${element.id}`}
        data-text={element.ariaLabel}
        aria-label={`${element.name} ${dragBtnText}`}
        onClick={(event) => accessibleButtonOption(event)}
        disabled={disableDrag.length && disableDrag[0].drag.id ? true : false}
        data-id={element.id}
        data-index={index}
      >
        <span dangerouslySetInnerHTML={{ __html: element.name }}></span>
      </button>
      <div
        className={
          element.isDisable
            ? `option draggable-button element-dragged ${element.id}`
            : `option draggable-button card ${element.id}`
        }
        tabIndex="-1"
        aria-hidden="true"
        data-target={element.accept}
        data-value={element.name}
        data-text={element.ariaLabel}
        onClick={
          isIOS
            ? (e) => {
                accessibleButtonOption(e);
              }
            : null
        }
        disabled={disableDrag}
        data-id={element.id}
        data-index={index}
        data-text={element.ariaLabel}
      >
        <span
          style={{ pointerEvents: "none" }}
          dangerouslySetInnerHTML={{ __html: element.name }}
        ></span>
      </div>
    </div>
  );
};

export default DragBox;
