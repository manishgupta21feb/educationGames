import React, { useRef, useEffect } from "react";
import { isIOS } from "react-device-detect";
import Button from "../../../../app/components/Button";

const Draggable = (props) => {
  const {
    matchedItems,
    isPopupActive,
    draggableItems,
    selectedButtonValue,
    updateAccessibleList,
    selectedDraggable,
    setzindexStatus,
  } = props;

  const dragRef = useRef(null);
  const matchedItemsRef = useRef([...matchedItems]); // empty array;
  const selectedDragRef = useRef(selectedDraggable);

  const accessibleButton = (e) => {
    selectedButtonValue(e.target.dataset.id);
    updateAccessibleList(true);
  };
  const createDraggable = (element) => {
    if (element) {
      $(element).draggable({
        helper: "clone",
        containment: ".leftright",
        start: function (event, ui) {
          const {
            dataset: { id },
          } = event.target;
          selectedButtonValue(id);
          setzindexStatus(true);
        },
        revert: function (dropzone) {
          if (!dropzone) {
            selectedButtonValue(null);
            EventManager.broadcast("INCORRECT_DRAG_REVERT");
          }
          setTimeout(() => {
            setzindexStatus(false);
          }, 500);
          return !dropzone;
        },
      });
    }
  };

  useEffect(() => {
    if (dragRef.current) {
      const element = dragRef.current.querySelectorAll(".draggable-button");
      createDraggable(element);
    }
  }, []);

  useEffect(() => {
    // to enable/disable the draggables
    if (matchedItems !== matchedItemsRef.current) {
      if (matchedItems.length > matchedItemsRef.current.length) {
        // disable last item from matchedItems
        const currentDroppedItem = matchedItems[matchedItems.length - 1];
        if (dragRef.current) {
          const droppedItem = dragRef.current.querySelector(
            `.draggable-items #${currentDroppedItem.id}`
          );
          if (droppedItem) {
            $(droppedItem).draggable("disable");
          }
        }
      }
    }
    matchedItemsRef.current = matchedItems;
  }, [matchedItems]);

  const onClick = (e) => {
    isIOS ? accessibleButton(e) : null;
  };
  useEffect(() => {
    if (!selectedDraggable && selectedDragRef.current) {
      const id = selectedDragRef.current.id;
      if (id && dragRef.current) {
        const draggable = dragRef.current.querySelector(
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
    <div className="wrapper" aria-hidden={isPopupActive} ref={dragRef}>
      {draggableItems.map((items) => {
        return (
          <div
            aria-hidden={isPopupActive}
            key={`draggable-${items.id}`}
            className="draggable-container-wrapper"
          >
            <div className="draggable-items">
              <button
                data-id={items.id}
                onClick={accessibleButton}
                aria-label={items.label}
                tabIndex={isPopupActive ? "-1" : "0"}
                className={`accessible-button ${items.id}`}
                disabled={
                  matchedItems.findIndex((m) => m.id == items.id) >= 0 ||
                  isPopupActive
                }
              ></button>
              <div
                id={items.id}
                data-id={items.id}
                onClick={onClick}
                aria-hidden="true"
                className={`draggable-button ${items.id}`}
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

export default Draggable;
