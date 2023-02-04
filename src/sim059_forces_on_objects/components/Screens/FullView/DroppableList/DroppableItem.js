import React, { useEffect, useRef } from "react";

const DroppableItem = (props) => {
  const answerDropRef = useRef(null);
  const { index, onDrop, question, dragList, setFocusonDragItem, aria, blank } =
    props;

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

  useEffect(() => {
    if (answerDropRef) {
      const isDisable = question.isDisable ? "disable" : "enable";
      $(answerDropRef.current).droppable(isDisable);
    }
  }, [question.isDisable]);

  return (
    <div className={`droppableContainer ${index==4 ?"addtransparent":""}`}>
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
        ) : (
          <span className="empty_span">{blank}</span>
        )}
      </div>
      {/* {index !== 4 && <div className="seperator"></div>} */}
    </div>
  );
};

export default DroppableItem;
