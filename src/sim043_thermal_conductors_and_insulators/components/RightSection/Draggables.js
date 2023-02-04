import React, { useRef, useEffect } from "react";
import { isIOS } from "react-device-detect";
import EventManager from "../../../app/events/manager";

const Draggables = (props) => {
  const draggableRef = useRef(null);

  const {
    draggableItems,
    selectDraggable,
    selectedDraggable,
    isDropped,
    selectedGlass,
    isPopupActive,
    updateAccessibleList,
    setzindexStatus
  } = props;

  useEffect(() => {
    setTimeout(() => {
      initializeDraggables();
    }, 500);
  }, []);

  const selectDraggableValues = (id) => {
    selectDraggable(draggableItems.find((item) => item.id == id));
  }

  const onClick = (e) => {
    const id = e.currentTarget.getAttribute("data-id");
    updateAccessibleList(true);
    selectDraggable(draggableItems.find((item) => item.id == id));
  };

  const accessibleButtonClick = (e) => {
    const { id } = e.target.dataset;
    updateAccessibleList(true);
    selectDraggable(draggableItems.find((item) => item.id == id));
  };

  const initializeDraggables = () => {
    if (draggableRef.current) {
      const draggableItems =
        draggableRef.current.querySelectorAll(".draggable-button");
      if (draggableItems) {
        $(draggableItems).draggable({
          helper: "clone",
          containment: ".leftright",
          start: function (event, ui) {
            const { id } = ui.helper[0].dataset;
            selectDraggableValues(id);
            setzindexStatus(true);
          },
          revert: function (val) {
            selectDraggable(null);
            setTimeout(() => {
              setzindexStatus(false);
            }, 500);
            if (!val) {
              EventManager.broadcast("INCORRECT_DRAG_REVERT");
            }
            return true;
          },
        });
      }
    }
  };

  return (
    <div className="draggables-wrapper" ref={draggableRef}>
      {draggableItems.map((item, i) => {

        const selectionButton = selectedDraggable && selectedDraggable.id === item.id;

        const selected = selectedGlass.id == item.id;

        const classes = `${item.id} ${selectionButton ? 'selected-button' : ''} ${isDropped ? 'disabled' : ''} ${selected ? 'selected' : ''}`;

        return (
          <div className="option-container" key={item.srNo}>
            <div className="draggables">
              <button
                data-id={item.id}
                disabled={isPopupActive || isDropped}
                id={`draggable${item.srNo}`}
                onClick={accessibleButtonClick}
                title={`${item.label}`}
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
