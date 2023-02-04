import React, { useEffect, useRef, useState } from "react";

const DroppableItem = (props) => {
  const answerDropRef = useRef(null);
  const clickableRef = useRef(null);
  const {
    question,
    index,
    focusedAnswerId,
    dragList,
    setFocusonDragItem,
    onDrop,
    blank,
    aria,
  } = props;
  useEffect(() => {
    $(answerDropRef.current).droppable({
      classes: { "ui-droppable-hover": "setBlueHoverColor" },
      tolerance: "pointer", //Mouse pointer overlaps the droppable.
      drop: (event, ui) => {
        const {
          dataset: { accept },
        } = event.target;
        onDrop(accept);
      },
    });
  }, []);
  // useEffect(() => {
  //   $(answerDropRef.current).droppable({
  //     classes: { "ui-droppable-hover": "setBlueHoverColor" },
  //     tolerance: "pointer", //Mouse pointer overlaps the droppable.
  //     drop: (event, ui) => {
  //       const droppedName = ui.helper[0].getAttribute("data-target");
  //       // disable the dragged item
  //       disableDraggable(droppedName, true);
  //       // disable the dragged droppable
  //       disableDroppable(question.answerId, true, droppedName);
  //       // console.log("dropped", $(ui.draggable))
  //       return $(ui.draggable).addClass("drag-revert");
  //     },
  //   });
  // }, []);

  useEffect(() => {
    if (answerDropRef) {
      const isDisable = question.isDisable ? "disable" : "enable";
      $(answerDropRef.current).droppable(isDisable);
    }
  }, [question.isDisable]);

  useEffect(() => {
    //console.log("Focus on ,changed from here", focusedAnswerId);
    if (question.answerId === focusedAnswerId) {
      clickableRef.current.focus();
    }
  }, [focusedAnswerId]);

  useEffect(() => {
    const firstEnableItem = dragList.find((d) => !d.isDisable);

    if (firstEnableItem) {
      setFocusonDragItem("");
      setTimeout(() => {
        setFocusonDragItem(firstEnableItem.name);
      }, 0);
    }
  }, [dragList]);

  // const selectDroppable = () => {
  //   // if draggable is selected
  //   // and is not already there
  //   //console.log("here")
  //   if (selectedDraggable) {
  //     disableDraggable(selectedDraggable, true);
  //     disableDroppable(question.answerId, true, selectedDraggable);
  //     selectDraggableFull("");
  //   }
  // };

 

  return (
    <>
      <p
        className="question"
        dangerouslySetInnerHTML={{ __html: question.value }}
      ></p>
        <div
        ref={answerDropRef}
        key={index}
        data-index={index}
        className={
          question.isDisable
            ? `target option option-${index + 1} dropped`
            : `target option option-${index + 1}`
        }
        data-accept={question.answerId}
      >
        {question.isDisable ? (
          <>
            <span aria-hidden> {question.markedAnswer}</span>
            <span className="marked_ans_span">
              {question.markedAnswer} {aria}
            </span>
          </>
        ):<span className="empty_span" >{blank}</span>}
      </div>
      {index !== 4 && <div className="seperator"></div>}
    </>
  );
};

export default DroppableItem;
