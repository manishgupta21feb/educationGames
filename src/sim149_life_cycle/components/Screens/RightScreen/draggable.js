import React, { useEffect, useRef } from "react";

import { isIOS } from "react-device-detect";
const draggable = (props) => {
  const {
    draggables,
    data,
    isPopupActive,
    setDraggableValue,
    matchedItems,
    updateAccessibleList,
    draggableValue,
    dndCount,
  } = props;
  const dragRef = useRef();
  const dropRef = useRef(props.matchedItems);

  let countRef = 1;

  const dragRefFocus = useRef();
  useEffect(() => {
    if (dragRef.current) {
      const draggable = dragRef.current.querySelectorAll(".card");
      $(draggable)
        .draggable({
          helper: "clone",
          containment: ".leftright",
          start: (event, ui) => {
            let { dataset } = event.target;

            setDraggableValue({ ...dataset });
          },

          revert: function (dropped) {
            if (dropped && dropped[0]) {
              const target = dropped[0].dataset.id;
              const source = $(this).data("id");
              if (!source.includes(target) && countRef < 5) {
                EventManager.broadcast("INCORRECT_DRAG_REVERT");
                countRef++;
                return !source.includes(target);
              } else {
                return false;
              }
            } else {
              setDraggableValue(null);
              EventManager.broadcast("INCORRECT_DRAG_REVERT");
              return true;
            }
          },
        })
        .draggable("enable");
    }
  }, []);

  useEffect(() => {
    if (dropRef.current.length < matchedItems.length) {
      const item = { ...matchedItems[matchedItems.length - 1] };
      const dragBox = dragRef.current.querySelector(`.card.${item.drag.id}`);
      $(dragBox).draggable("disable");

      if (dragRefFocus.current != null) {
        const buttons = dragRef.current.querySelectorAll(".accessible");
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
  }, [matchedItems]);

  const accessibleButtonOption = (e) => {
    updateAccessibleList(true);
    dragRefFocus.current = e.target.dataset.index;

    setDraggableValue({ ...e.target.dataset });
  };
  return (
    <div className="rightdnd-container">
      <h2>{data.dndLabel}</h2>
      <div className="flex" ref={dragRef}>
        {draggables.map((drag, idx) => {
          const getDropped =
            matchedItems &&
            matchedItems.findIndex((m) => m.drag.id == drag.id) != -1;
          return (
            <div key={drag.id} className="drag-box">
              <button
                key={`button--${drag.id}`}
                aria-label={drag.altText}
                data-id={drag.id}
                data-text={drag.text}
                data-index={idx}
                data-label={drag.altText}
                tabIndex={isPopupActive ? "-1" : null}
                aria-hidden={isPopupActive}
                className="accessible"
                disabled={getDropped || isPopupActive}
                onClick={(e) => accessibleButtonOption(e)}
              ></button>
              <div
                key={`div--${drag.id}`}
                aria-label={drag.altText}
                data-id={drag.id}
                data-text={drag.text}
                data-index={idx}
                data-label={drag.altText}
                aria-hidden
                tabIndex="-1"
                className={`card ${drag.id}`.trim()}
                onClick={
                  isIOS && !(getDropped || drag.isDisable)
                    ? (e) => accessibleButtonOption(e)
                    : null
                }
              >
                {drag.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default draggable;
