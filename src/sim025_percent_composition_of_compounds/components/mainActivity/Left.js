import React, { useEffect, useRef, useState } from "react";
import Instructor from "./Intsruction";
import TotalMassInfo from "../../containers/TotalMassInfo";
import Draggable from "../../containers/DraggableContainer";
import Droppable from "../../containers/DroppableContainer";
import "./style.scss";

export default (props) => {
  const draggableRef = useRef([]);
  const currentPopupRef = useRef([]);
  const [showDraggables, setShowDraggables] = useState(true);
  const {
    viewType,
    matchedItems,
    currentPopup,
    instructionText,
    setShowDropZone,
    elementData: data,
    setHideDroppedItem,
  } = props;

  useEffect(() => {
    if (
      currentPopupRef.current.indexOf(3) >= 0 &&
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
    if (viewType) {
      setShowDraggables(false);
      setTimeout(() => {
        setShowDraggables(true);
      });
    }
  }, [viewType]);

  useEffect(() => {
    if (showDraggables && draggableRef && draggableRef.current) {
      setTimeout(() => {
        dragInitializer();
      }, 100);
    }
  }, [showDraggables]);

  useEffect(() => {
    if (matchedItems.length) {
      const recentlyDropped = matchedItems[matchedItems.length - 1];
      setTimeout(() => {
        if (draggableRef.current) {
          const draggableItem = draggableRef.current.querySelectorAll(
            `.option.not-accessible-button.${recentlyDropped}`
          );
          if (draggableItem) {
            $(draggableItem).draggable("disable");
          }
        }
      }, 50);
    }
  }, [matchedItems]);

  const dragInitializer = () => {
    if (draggableRef.current) {
      const draggableItems = draggableRef.current.querySelectorAll(
        ".option.not-accessible-button"
      );
      if (draggableItems) {
        draggableItems.forEach((item) => {
          $(item).draggable({
            cancel: false,
            containment: ".wrapper",
            start: function () {
              setShowDropZone(true);
              setHideDroppedItem(true);
            },
            stop: function () {
              setShowDropZone(false);
            },

            // revert: function () {
            //   setShowDropZone(true);
            //   return true;
            // },

            revert: function (dropped, p, q) {
              if (dropped) {
                return false;
              } else {
                return true;
              }
            },

            helper: "clone",
          });
        });
      }
    }
  };

  const dropActivity = () => {
    setShowDropZone(true);
  };
  return (
    <div className="wrapper">
      <Instructor instructionText={instructionText}></Instructor>
      {showDraggables ? (
        <Draggable
          elementData={data}
          draggableRef={draggableRef}
          matchedItems={matchedItems}
          dropActivity={dropActivity}
        ></Draggable>
      ) : null}
      <Droppable></Droppable>
      <TotalMassInfo />
    </div>
  );
};
