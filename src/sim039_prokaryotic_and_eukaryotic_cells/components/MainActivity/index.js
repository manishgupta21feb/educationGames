import React, { useEffect, useRef } from "react";

import Instructor from "./Intsruction";
import ColorStripContainer from "../../containers/ColorStripContainer";
import DraggableContainer from "../../containers/DraggableContainer";
import StageOneDroppable from "../../containers/StageOneDroppableContainer";
import EventManager from "../../../app/events/manager";
import "./style.scss";

export default (props) => {
  const {
    instructionText,
    elementData,
    selectedStage,
    selectDraggable,
    checkDroppedItem,
    matchedItems,
    updateResetBtnState,
    selectedDraggable,
    droppedMatched,
    activityHeading,
    resetFocus,
  } = props;

  const ref = useRef(null);
  const draggableRef = useRef([]);
  const droppableRef = useRef([]);
  const itemRef = useRef(null);
  const audioRef = useRef(null);
  const accessibleRef = useRef([]);

  useEffect(() => {
    if (matchedItems && itemRef.current) {
    }
  }, [matchedItems]);

  useEffect(() => {
    if (selectedDraggable == null) {
      if (droppedMatched) {
        if (itemRef.current && itemRef.current.dataset) {
          const index = parseInt(itemRef.current.dataset.index);
          let nextIndex = -1;
          for (let i = index + 1; i < accessibleRef.current.length; i++) {
            if (accessibleRef.current[i].getAttribute("disabled") == null) {
              nextIndex = i;
              break;
            }
          }
          if (nextIndex == -1) {
            for (let i = 0; i < index; i++) {
              if (accessibleRef.current[i].getAttribute("disabled") == null) {
                nextIndex = i;
                break;
              }
            }
          }
          if (nextIndex !== -1) {
            accessibleRef.current[nextIndex].focus();
          }
          itemRef.current = null;
        }
      } else {
        if (itemRef.current) {
          itemRef.current.focus();
        }
      }
      updateResetBtnState(true);
    }
  }, [selectedDraggable]);

  useEffect(() => {
    if (draggableRef && draggableRef.current) {
      draggableRef.current.map(function (val) {
        if ($(val).draggable()) {
          $(val).draggable("destroy");
        }
      });
    }
  }, [selectedStage, elementData]);

  useEffect(() => {
    if (
      draggableRef &&
      droppableRef &&
      draggableRef.current &&
      droppableRef.current
    ) {
      dragInitializer();
      dropInitializer();
    }
  }, [elementData, selectedStage, draggableRef.current, droppableRef.current]);

  const dropInitializer = () => {
    $(droppableRef.current).droppable({
      drop: (e, u) => {
        if (u?.helper[0]?.dataset && e?.target.dataset) {
          itemRef.current = u.helper[0];
          const target = e.target.dataset;
          const dropzone = e.target.dataset.accept;
          const draggedItem = itemRef.current.dataset.target;

          if (dropzone == draggedItem) {
            itemRef.current.style.display = "none";
            audioRef.current = false;
          }
          checkDroppedItem({
            ...target,
            name: target.accept,
          });
          audioRef.current = false;
        }
      },
    });
  };

  const dragInitializer = () => {
    $(draggableRef.current).draggable({
      revert: () => {
        setTimeout(() => {
          selectDraggable(null);
        }, 50);
        if (audioRef.current) {
          EventManager.broadcast("INCORRECT_DRAG_REVERT");
        }
        return true;
      },
      cancel: false,
      helper: "clone",
      containment: ".wrapper",
      start: (ev, ui) => {
        audioRef.current = true;
        if (ui?.helper[0]?.dataset) {
          selectDraggable({ ...ui.helper[0].dataset });
        }
      },
    });
  };

  return (
    <div className="wrapper">
      <div className="sr-only" aria-level="1" role="heading">
        <p>{activityHeading}</p>
      </div>
      <Instructor instructionText={instructionText}></Instructor>
      <div ref={ref}>
        <DraggableContainer
          itemRef={itemRef}
          draggableRef={draggableRef}
          elementData={elementData}
          accessibleRef={accessibleRef}
        />
      </div>
      <React.Fragment>
        <ColorStripContainer></ColorStripContainer>
        <StageOneDroppable droppableRef={droppableRef}></StageOneDroppable>
      </React.Fragment>
    </div>
  );
};
