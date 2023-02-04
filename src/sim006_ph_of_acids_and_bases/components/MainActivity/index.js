import { isNull } from "lodash";
import React, { useEffect, useRef } from "react";
import EventManager from "../../../app/events/manager";
import ColorStripContainer from "../../containers/ColorStripContainer";
import DraggableContainer from "../../containers/DraggableContainer";
import FinishButtonContainer from "../../containers/FinishButtonContainer";
import NextButtonContainer from "../../containers/NextButtonContainer";
import StageOneDroppable from "../../containers/StageOneDroppableContainer";
import StageTwoDroppable from "../../containers/StageTwoDroppableContainer";
import Instructor from "./Intsruction";
import "./style.scss";

export default (props) => {
  const {
    instructionText,
    elementData,
    onCorrectDrop,
    onInCorrectDrop,
    updateAttempt,
    selectedStage,
    showNext,
    resetBtnState,
    showToastMessage,
  } = props;

  const audioRef = useRef(null);
  const draggableRef = useRef([]);
  const droppableRef = useRef([]);

  const isElementHovered = useRef(null);
  const resetBtnStateRef = useRef(resetBtnState);

  useEffect(() => {
    if (draggableRef && draggableRef.current) {
      draggableRef.current.map(function (val, index) {
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
    }
  }, [elementData, selectedStage, draggableRef.current, droppableRef.current]);

  const dragInitializer = () => {
    draggableRef.current.map(function (val, index) {
      if (isNull(val)) return;
      var answerValue = val.getAttribute("data-target");

      var target = droppableRef.current.filter((drop, index) => {
        if (isNull(drop)) return false;
        return drop.getAttribute("data-accept") === answerValue;
      });

      $(val).draggable({
        revert: function () {
          $(this).removeClass("element-dragging");
          if ($(this).hasClass("drag-revert")) {
            $(this).removeClass("drag-revert");
            return true;
          } else {
            if (audioRef.current) {
              EventManager.broadcast("INCORRECT_DRAG_REVERT");
            }
          }
        },
        cancel: false,
        scroll: false,
        helper: "clone",
        containment: ".wrapper",
        appendTo: ".view-container",
        start: function (event, ui) {
          audioRef.current = true;
          showToastMessage(false);
          $(this).addClass("element-dragging");
        },
      });

      if (target[0]) {
        let dropAccept = target[0].getAttribute("data-accept");
        $(target[0]).droppable({
          tolerance: "intersect",
          drop: function (event, ui) {
            let draggedElem = ui.helper[0].getAttribute("data-target");
            isElementHovered.current.classList.remove("setBlueHoverColor");
            if (draggedElem === dropAccept) {
              audioRef.current = false;
              updateAttempt(ui.helper[0].getAttribute("data-value"));
              onCorrectDrop(answerValue);
              return true;
            } else {
              audioRef.current = false;
              onInCorrectDrop();
              return $(ui.draggable).addClass("drag-revert");
            }
          },
          over: function (event, ui) {
            isElementHovered.current = event.target;
            if (!isElementHovered.current.classList.contains("dropped")) {
              isElementHovered.current.classList.add("setBlueHoverColor");
            }
          },
          out: function (event, ui) {
            droppableRef.current.map((drop, index) => {
              if (isNull(drop)) return false;
              drop.classList.remove("setBlueHoverColor");
            });
          },
        });
      }
    });
  };

  return (
    <div className="wrapper">
      <Instructor instructionText={instructionText}></Instructor>
      <DraggableContainer
        draggableRef={draggableRef}
        elementData={elementData}
      ></DraggableContainer>
      {selectedStage === "stage1" ? (
        <React.Fragment>
          <ColorStripContainer></ColorStripContainer>
          <StageOneDroppable droppableRef={droppableRef}></StageOneDroppable>
          {showNext ? <NextButtonContainer></NextButtonContainer> : null}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <StageTwoDroppable droppableRef={droppableRef}></StageTwoDroppable>
          {showNext ? <FinishButtonContainer></FinishButtonContainer> : null}
        </React.Fragment>
      )}
    </div>
  );
};
