import React, { useRef, useEffect } from "react";
import EventManager from "../../../app/events/manager";
import { isIOS } from "react-device-detect";

const Draggables = (props) => {
  const draggableRef = useRef(null);
  const selectedDragRef = useRef(props.selectedDraggable);
  const {
    setAccessible,
    isPopupActive,
    draggableItems,
    selectedDraggable,
    toggleToastMessage,
  } = props;

  const selectDraggable = (id) => {
    props.selectDraggable(draggableItems.find((item) => item.id == id));
  };

  const accessibleButtonClick = (e) => {
    const { id } = e.target.dataset;
    setAccessible(true);
    selectDraggable(id);
  };

  useEffect(() => {
    setTimeout(() => {
      initializeDraggables();
    }, 500);
  }, []);

  const initializeDraggables = () => {
    if (draggableRef.current) {
      const draggableItems =
        draggableRef.current.querySelectorAll(".draggable-button");
      if (draggableItems) {
        $(draggableItems).draggable({
          helper: "clone",
          containment: ".leftright",
          start: function (event, ui) {
            toggleToastMessage();
            const { id } = ui.helper[0].dataset;
            selectDraggable(id);
          },
          revert: function (item) {
            props.selectDraggable(null);
            if (!item) {
              // EventManager.broadcast("INCORRECT_DRAG_REVERT");
            }
            return true;
          },
        });
      }
    }
  };

  const onClick = (e) => {
    isIOS ? accessibleButtonClick(e) : null;
  };

  useEffect(() => {
    if (!selectedDraggable && selectedDragRef.current) {
      const id = selectedDragRef.current.id;
      if (id && draggableRef.current) {
        const draggable = draggableRef.current.querySelector(
          `.accessible-button.${id}`
        );
        if (draggable) {
          draggable.focus();
        }
      }
    }
    selectedDragRef.current = selectedDraggable;
  }, [selectedDraggable]);

  return (
    <div className="wrapper" ref={draggableRef}>
      {draggableItems.map((item, i) => {
        const selected = selectedDraggable && selectedDraggable.id === item.id;
        const classes = `${item.id}  ${selected ? "selectedItem" : ""}`;
        return (
          <div className="option-container draggable" key={item.srNo}>
            <div className="draggables">
              <button
                data-id={item.id}
                disabled={isPopupActive}
                id={`draggable${item.srNo}`}
                onClick={accessibleButtonClick}
                title={`${item.label} draggable`}
                className={`accessible-button ${classes}`}
              ></button>
              <div
                id={item.srNo}
                data-id={item.id}
                onClick={onClick}
                aria-hidden={true}
                className={`draggable-button ${classes}`}
              >
                <span></span>
              </div>
            </div>
            <span aria-hidden className="label">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Draggables;
