import React, { useEffect, useRef } from "react";

const DroppableItem = (props) => {
  const answerDropRef = useRef(null);
  const { index, onDrop, question, dropzone, dropzoneText } = props;

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
    if (answerDropRef.current) {
      const isDisable = question.isDisable ? "disable" : "enable";
      $(answerDropRef.current).droppable(isDisable);
    }
  }, [question.isDisable]);

  return (
    <>
      <p
        className="question"
        dangerouslySetInnerHTML={{ __html: question.value }}
      ></p>
      <div
        key={index}
        data-index={index}
        ref={answerDropRef}
        data-accept={question.answerId}
        className={
          question.isDisable
            ? `target option option-${index + 1} dropped`
            : `target option option-${index + 1}`
        }
      >
        <p className="sr-only">
          {question.isDisable
            ? question.markedAnswer + dropzoneText + (index + 1)
            : dropzone + (index + 1)}
        </p>

        {question.isDisable && (
          <span aria-hidden> {question.markedAnswer}</span>
        )}
      </div>
      {index !== 4 && <div className="seperator"></div>}
    </>
  );
};

export default DroppableItem;
