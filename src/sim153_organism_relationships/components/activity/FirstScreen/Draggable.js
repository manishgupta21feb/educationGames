import { event } from "jquery";
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
    getHeading,
    getDNDHeading,
   
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
        containment: ".view_wrapper",
        start: function (event, ui) {
          const {
            dataset: { id },
          } = event.target;
          selectedButtonValue(id);
          
        },
        revert: function (dropzone) {
          if (!dropzone) {
            selectedButtonValue(null);
            EventManager.broadcast("INCORRECT_DRAG_REVERT");
          }
         
          return !dropzone;
        },
      });
  
     
    }
  };

  useEffect(() => {
    if (dragRef.current) {
      for (let item of draggableItems) {
        const element = dragRef.current.querySelector(`#${item.id}`);
        if (item.id == getHeading.isActive) {
          createDraggable(element);
        }
      }
    }
  }, []);
  useEffect(() => {
    if (dragRef.current) {
      for (let item of draggableItems) {
        const element = dragRef.current.querySelector(`#${item.id}`);
        if (item.id == getHeading.isActive) {
          createDraggable(element);
        }
      }
    }
  }, [getDNDHeading]);
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
        let isDisabled = getHeading.isActive != items.id;
    
        return (
          <div
            aria-hidden={isPopupActive}
            key={`draggable-${items.id}`}
            className={`draggable-container-wrapper ${
              isDisabled ? "disabled" : null
            } `}
          >
            <div className={`draggable-items ${items.id}`}>
            
              <button
                data-id={items.id}
                aria-label={items.ariaLabel}
                onClick={accessibleButton}
               
                className={`accessible-button ${items.id}`}
                disabled={
                  matchedItems.findIndex((m) => m.id == items.id) >= 0 ||
                  isDisabled ||
                  isPopupActive
                }
              ></button>
          
              <div
                id={items.id}
                aria-hidden="true"
                aria-label={items.label}
                data-id={items.id}
                onClick={onClick}
                className={`draggable-button ${items.id}`}
              >
                <span></span>
               
              </div>
             
              
            </div>
            <div className={`draglabel ${items.id}`}><p>{items.label}</p></div>
          </div>
        );
      })}
    </div>
  );
};

export default Draggable;
