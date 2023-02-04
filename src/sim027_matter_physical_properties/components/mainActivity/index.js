import React, { useEffect, useRef, useState } from "react";
import Instructor from "./Intsruction";
import Draggable from "../../containers/DraggableContainer";
import Droppable from "../../containers/DroppableContainer";
import AccessibleList from "../../containers/AccessibleList";

import "./style.scss";

export default (props) => {
  const draggableRef = useRef([]);
  const currentPopupRef = useRef([]);
  const [showDraggables, setShowDraggables] = useState(true);
  const draggableItemRef = useRef(props.draggableItem);
  const {
    currentPopup,
    draggableItem,
    itemDroppedAt,
    instructionText,
    setDraggableItem,
    elementData: data,
    toggleToastMessage,
    accessibleListVisible,
  } = props;
  const itemDroppedAtRef = useRef(itemDroppedAt);
  const accessibleListVisibleRef = useRef(accessibleListVisible);

  useEffect(() => {
    for (let key in itemDroppedAt) {
      if (itemDroppedAt[key].length == 4) {
        const draggable = draggableRef.current.querySelector(
          `.option.not-accessible-button[data-value="${key}"]`
        );
        if (draggable) {
          $(draggable).draggable("disable");
        }
      }
    }
  }, [itemDroppedAt]);

  useEffect(() => {
    if (!draggableItem && draggableItemRef.current) {
      let itemToFocus = null;
      const value = draggableItemRef.current.value;
      // setTimeout(() => {
      const draggableItems = draggableRef.current.querySelectorAll(
        ".option-drag.accessible-button"
      );
      for (let item of draggableItems) {
        if (
          item.getAttribute("disabled") == null &&
          item.dataset.value.includes(value)
        ) {
          itemToFocus = item;
          break;
        }
      }

      if (!itemToFocus) {
        for (let item of draggableItems) {
          if (item.getAttribute("disabled") == null) {
            itemToFocus = item;
            break;
          }
        }
      }

      if (itemToFocus) {
        itemToFocus.focus();
      }
      // }, 20);
    }
    draggableItemRef.current = draggableItem;
  }, [draggableItem]);

  useEffect(() => {
    if (
      (currentPopupRef.current.indexOf(3) >= 0 ||
        currentPopupRef.current.indexOf(4) >= 0) &&
      currentPopup.indexOf(1) >= 0
    ) {
      setShowDraggables(false);
      setTimeout(() => {
        setShowDraggables(true);
      });
    }
    currentPopupRef.current = currentPopup;
  }, [currentPopup]);

  useEffect(() => {
    if (showDraggables && draggableRef && draggableRef.current) {
      setTimeout(() => {
        dragInitializer();
      }, 200);
    }
  }, [showDraggables]);

  const dragInitializer = () => {
    if (draggableRef.current) {
      const draggableItems = draggableRef.current.querySelectorAll(
        ".option.not-accessible-button"
      );
      if (draggableItems) {
        draggableItems.forEach((item) => {
          $(item).draggable({
            cancel: false,
            helper: "clone",
            containment: ".wrapper",
            start: function (event, ui) {
              toggleToastMessage(false);
              setDraggableItem({
                target: ui.helper[0].dataset.target,
                value: ui.helper[0].dataset.value,
              });
            },
            revert: function (dropped, p, q) {
              if (dropped && dropped[0]) {
                const target = dropped[0].dataset.target;
                const source = $(this).data("target");
                return !source.includes(target);
              }
              return true;
            },
          });
        });
      }
    }
  };

  return (
    <div className="wrapper">
      <Instructor instructionText={instructionText}></Instructor>
      {showDraggables ? (
        <Draggable elementData={data} draggableRef={draggableRef}></Draggable>
      ) : null}
      <AccessibleList />
      <Droppable></Droppable>
    </div>
  );
};
