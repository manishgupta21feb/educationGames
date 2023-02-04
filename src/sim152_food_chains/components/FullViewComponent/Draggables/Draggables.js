import React, { useRef, useEffect } from "react";
import data from "../../../data/data.en";
import { isIOS, isMobileSafari } from "react-device-detect";

import "./style.scss";

const Draggables = (props) => {
  const {
    items,
    isPopupActive,
    setDraggable,
    selectedDraggable,
    updateAccessibleList,
    correctAnswer,
    dragIds,
  } = props;

  console.log(dragIds);

  const ref = useRef(null);
  const selectedDraggableRef = useRef(props.selectedDraggable);

  useEffect(() => {
    if (dragIds.length) {
      // send focus to your draggable
      const buttons = ref.current.querySelectorAll("button.accessible-button");
      for (let button of buttons) {
        if (button.getAttribute("disabled") == null) {
          button.focus();
          break;
        }
      }
    }
    selectedDraggableRef.current = selectedDraggable;
  }, [dragIds]);

  useEffect(() => {
    if (ref.current) {
      const draggables = ref.current.querySelectorAll(".draggable-item");
      if (draggables && draggables.length) {
        $(draggables).draggable({
          helper: "clone",
          cancel: true,
          containment: ".dndArea",
          start: (ev, ui) => {
            const dataset = {
              id: ev.target.dataset.id,
              index: ev.target.dataset.index,
              label: ev.target.dataset.label,
            };
            setDraggable({ ...dataset });
          },
          revert: (ev, ui) => {
            setDraggable({});
            if (!ev) {
              EventManager.broadcast("INCORRECT_DRAG_REVERT");
            }
            return true;
          },
        });
      }
    }
  }, []);

  useEffect(() => {
    for (let item of items) {
      // console.log(item.maxDrops, item.totalDrops);
      if (item.maxDrops == item.totalDrops) {
        const _draggable = ref.current.querySelector(
          `.draggable-item.${item.id}`
        );
        if (_draggable) {
          $(_draggable).draggable("disable");
        }
      } else if (item.totalDrops == 0) {
        const _draggable = ref.current.querySelector(
          `.draggable-item.${item.id}`
        );
        if (_draggable) {
          $(_draggable).draggable("enable");
        }
      }
    }
  }, [items]);

  const onClick = (e) => {
    const { dataset } = e.target;
    // console.log("Accessible", dataset);
    setDraggable({ ...dataset });
    updateAccessibleList(true);
  };

  return (
    <div className="draggable-wrapper" ref={ref}>
      {items.map((item, index) => {
        const hideImage = dragIds.indexOf(item.id) > -1;
        // console.log("HideImage", hideImage, dragIds);
        return (
          <div className="draggable" key={item.id}>
            <button
              id={`${item.id}-${item.srNo}`}
              data-id={item.id}
              onClick={onClick}
              data-index={index}
              data-label={item.altText}
              className={`accessible-button ${
                isIOS && isMobileSafari ? "ipad" : ""
              }`.trim()}
              title={`${item.label} ${data.draggable}`}
              disabled={isPopupActive || hideImage}
            ></button>
            <div
              id={item.id}
              aria-hidden
              data-id={item.id}
              data-index={index}
              data-label={item.altText}
              // className={classes}
              onClick={(e) => (isIOS ? onClick(e, item) : null)}
              className={`draggable-item images ${item.id} ${
                (selectedDraggable && selectedDraggable.id == item.id) ||
                hideImage
                  ? "hide"
                  : ""
              } ${
                selectedDraggable && selectedDraggable.id == item.id
                  ? "selectedItem"
                  : ""
              }`}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default Draggables;
