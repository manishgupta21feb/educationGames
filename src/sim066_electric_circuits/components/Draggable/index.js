import React, { useRef, useEffect, useState } from "react";
import { isIOS, isMobileSafari } from "react-device-detect";
import "./style.scss";

const Draggable = (props) => {
  const ref = useRef(null);
  const dragIndexRef = useRef(null);
  const selectedDraggableRef = useRef(props.selectedDraggable);

  const temp = useRef(null);
  const {
    items,
    droppedItems = [],
    setDraggable,
    selectedDraggable,
    setDragType,
    isPopupActive,
    updateAccessibleList,
    clearButtonPressed,
    clearButtonState,
    correctAnswer,
    droppableFull,
    setResetFocusState,
  } = props;

  useEffect(() => {
    if (ref.current) {
      const draggables = ref.current.querySelectorAll(".draggable-item");
      if (draggables && draggables.length) {
        $(draggables).draggable({
          helper: "clone",
          cancel: true,
          containment: ".full-view-inner",
          start: (ev, ui) => {
            const dataset = {
              id: ev.target.dataset.id,
              index: ev.target.dataset.index,
              label: ev.target.dataset.label,
            };
            setDraggable({ ...dataset });
            setDragType({ dragType: dataset.id });
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
    const draggables = ref.current.querySelectorAll(".draggable-item");
    for (let item of droppedItems) {
      const draggableState = item.disable ? "disable" : "enable";
      for (let _draggable in draggables) {
        if (_draggable.getAttribute("data-id") == item.draggable.id) {
          $(_draggable).draggable(draggableState);
          break;
        }
      }
    }
  }, [droppedItems]);

  useEffect(() => {
    if (!selectedDraggable && selectedDraggableRef.current) {
      // send focus to your draggable
      // setTimeout(() => {
      const buttons = ref.current.querySelectorAll("button.accessible-button");
      for (let button of buttons) {
        if (button.getAttribute("disabled") == null) {
          button.focus();
          break;
        }
      }
      // }, 10);
    }
    selectedDraggableRef.current = selectedDraggable;
  }, [selectedDraggable]);

  useEffect(() => {
    if (clearButtonPressed) {
      setTimeout(() => {
        const buttons = ref.current.querySelectorAll(
          "button.accessible-button"
        );
        for (let button of buttons) {
          if (button.getAttribute("disabled") == null) {
            setTimeout(() => {
              button.focus();
            }, 100);
            break;
          }
        }
        clearButtonState(false);
      }, 10);
    }
  }, [clearButtonPressed]);

  useEffect(() => {
    for (let item of items) {
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

  useEffect(() => {
    for (let item of items) {
      if (correctAnswer || droppableFull) {
        const _draggable = ref.current.querySelector(
          `.draggable-item.${item.id}`
        );
        if (_draggable) {
          $(_draggable).draggable("disable");
        }
      }
    }
  }, [correctAnswer, droppableFull, items]);

  const onClick = (e) => {
    const { dataset } = e.target;
    setDraggable({ ...dataset });
    updateAccessibleList(true);
  };

  const _onClick = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    if (!temp.current && item.maxDrops !== item.totalDrops) {
      onClick(e);
    }
    temp.current = false;
  };

  return (
    <div className="draggables">
      <div className="draggables-wrapper" ref={ref}>
        {items.map((item, index) => {
          const classes =
            selectedDraggable && selectedDraggable.id == item.id
              ? "selectedItem"
              : "";
          const check =
            item.maxDrops == item.totalDrops || correctAnswer || droppableFull;
          return (
            <div key={item.id} className="draggable">
              <button
                data-id={item.id}
                data-index={index}
                data-label={item.altText}
                onClick={onClick}
                className={`accessible-button ${
                  isIOS && isMobileSafari ? "ipad" : ""
                }`.trim()}
                title={`${item.id} draggable`}
                disabled={check || isPopupActive}
              ></button>
              <div
                aria-hidden
                data-id={item.id}
                data-index={index}
                data-label={item.altText}
                className={classes}
                onClick={(e) => _onClick(e, item)}
                className={`draggable-item ${item.id} ${classes} ${
                  check ? "disabled" : ""
                }`}
              >
                <div
                  className={`images ${item.id}`}
                  style={{ pointerEvents: "none" }}
                ></div>
              </div>
              <p className="label" aria-hidden="true">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Draggable;
