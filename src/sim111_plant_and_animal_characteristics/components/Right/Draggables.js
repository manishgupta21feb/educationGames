import React, { useRef, useEffect } from "react";
import { isIOS } from "react-device-detect";
import EventManager from "../../../app/events/manager";

const Draggables = (props) => {
  const draggableRef = useRef(null);
  const selectedDragRef = useRef(props.selectedDraggable);
  const {
    flag,
    draggable,
    matchedItems,
    setAccessible,
    isPopupActive,
    selectedDraggable,
    setzindexStatus,
  } = props;

  const matchedItemsRef = useRef([...matchedItems]);

  const selectDraggable = (id) => {
    props.selectDraggable(draggable.find((item) => item.id == id));
  };

  const accessibleButtonClick = (e) => {
    const { id } = e.target.dataset;
    setAccessible(true);
    selectDraggable(id);
  };

  const createDraggables = (domElements) => {
    $(domElements).draggable({
      helper: "clone",
      containment: ".leftright",
      start: function (event, ui) {
        flag.current = null;
        const { id } = event.target.dataset;
        selectDraggable(id);
        setzindexStatus(true);
      },
      revert: function (dropzone) {
        setTimeout(() => {
          setzindexStatus(false);
        }, 500);
        if (!dropzone) {
          props.selectDraggable(null);
        }

        if (!dropzone) {
          EventManager.broadcast("INCORRECT_DRAG_REVERT");
        }
        return !dropzone;
      },
    });
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

  useEffect(() => {
    if (matchedItems !== matchedItemsRef.current) {
      const length1 = matchedItems.length;
      const length2 = matchedItemsRef.current.length;
      if (length1 > length2) {
        const currentDroppedItem = { ...matchedItems[matchedItems.length - 1] };
        if (draggableRef.current) {
          const droppedItem = draggableRef.current.querySelector(
            `.draggables #${currentDroppedItem.id}`
          );
          if (droppedItem) {
            $(droppedItem).draggable("disable");
          }
        }
      }
    }
    matchedItemsRef.current = matchedItems;
  }, [matchedItems]);

  useEffect(() => {
    if (draggableRef.current) {
      const draggables = draggableRef.current.querySelectorAll(
        ".draggable .draggable-button"
      );
      createDraggables(draggables);
    }
  }, [draggable]);

  return (
    <div className="wrapper" ref={draggableRef}>
      {draggable.map((item, i) => {
        const selected = selectedDraggable && selectedDraggable.id === item.id;
        const classes = `${item.id}  ${selected ? "selectedItem" : ""}`;
        return (
          <div
            className="option-container draggable"
            key={`${item.id}${item.srNo}`}
          >
            <div className={`draggables ${classes}`}>
              <button
                data-id={item.id}
                id={`draggable${item.srNo}`}
                onClick={accessibleButtonClick}
                title={`${item.label} draggable`}
                className={`accessible-button ${classes}`}
                disabled={
                  matchedItems.findIndex((m) => m.id == item.id) >= 0 ||
                  isPopupActive
                }
              ></button>
              <div
                id={item.id}
                data-id={item.id}
                onClick={onClick}
                aria-hidden={true}
                className={`draggable-button ${item.id}`}
              >
                <span></span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Draggables;
