import React, { useRef, useEffect, useState } from "react";
import { isIOS, isMobileSafari } from "react-device-detect";
import "./style.scss";

const Draggable = (props) => {
  const ref = useRef(null);
  const dragIndexRef = useRef(null);
  const selectedDraggableRef = useRef(props.selectedDraggable);

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
    circuitNameProps,
  } = props;

  useEffect(() => {
    if (ref.current) {
      const draggables = ref.current.querySelectorAll(".draggable-item");
      if (draggables && draggables.length) {
        $(draggables).draggable({
          helper: "clone",
          cancel: true,
          containment: circuitNameProps == "series" ? ".left" : ".leftright",
          start: (ev, ui) => {
            const dataset = {
              id: ev.target.dataset.id,
              index: ev.target.dataset.index,
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
    if (!selectedDraggable && selectedDraggableRef.current) {
      const buttons = ref.current.querySelectorAll("button.accessible-button");
      for (let button of buttons) {
        if (button.getAttribute("disabled") == null) {
          button.focus();
          break;
        }
      }
    }
    selectedDraggableRef.current = selectedDraggable;
  }, [selectedDraggable]);

  useEffect(() => {
    for (let item of items) {
      if (item.maxDrops == item.totalDrops) {
        const _draggable = ref.current.querySelector(
          `.draggable-item.${`${circuitNameProps}--${item.id}`}`
        );

        if (_draggable) {
          $(_draggable).draggable("disable");
        }
      } else if (item.totalDrops == 0) {
        const _draggable = ref.current.querySelector(
          `.draggable-item.${`${circuitNameProps}--${item.id}`}`
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
          `.draggable-item.${`${circuitNameProps}--${item.id}`}`
        );

        if (_draggable) {
          $(_draggable).draggable("disable");
        }
      }
    }
  }, [droppableFull, items, correctAnswer]);

  const onClick = (e) => {
    const { dataset } = e.target;
    setDraggable({ ...dataset });
    updateAccessibleList(true);
  };

  const _onClick = (e, item) => {
    isIOS && item.maxDrops !== item.totalDrops ? onClick(e) : null;
  };

  return (
    <div className={`draggables--${circuitNameProps}`}>
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
                data-label={item.label}
                onClick={onClick}
                title={`${item.altText}`}
                className={`accessible-button`}
                disabled={check || isPopupActive}
              ></button>
              <div
                aria-hidden
                data-id={item.id}
                data-index={index}
                data-label={item.label}
                title={`${item.altText}`}
                onClick={(e) => _onClick(e, item)}
                className={`draggable-item ${`${circuitNameProps}--${item.id}`} 
                 ${classes} ${check ? "disabled" : ""}`}
              >
                <div
                  className={`images ${item.id}`}
                  style={{ pointerEvents: "none" }}
                ></div>
              </div>
              {circuitNameProps == "parallel" ? (
                <p className="label" aria-hidden="true">
                  {item.label}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Draggable;
