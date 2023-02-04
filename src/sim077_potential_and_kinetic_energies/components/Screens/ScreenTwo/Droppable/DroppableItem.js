import React, { useEffect, useRef } from "react";
import Label from "../../../../../app/components/Label";

const DroppableItem = (props) => {
  const answerDropRef = useRef(null);
  const { question, index, onDrop, matchedItems } = props;
  useEffect(() => {
    $(answerDropRef.current).droppable({
      classes: { "ui-droppable-hover": "setBlueHoverColor" },
      tolerance: "pointer", //Mouse pointer overlaps the droppable.
      drop: (e, u) => {
        if (u?.helper[0]?.dataset && e?.target.dataset) {
          // console.log(" u.helper[0]", u.helper[0]);
          // console.log("target",e.target.dataset)
          const target = e.target.dataset;
          onDrop({
            ...target,
            answerId: target.accept,
          });
        }
      },
    });
  }, []);
  return (
    <div className="dropping-Area">
      <div  role="heading" aria-level="2" className={`target option option-${index + 1}`}>
        {question.name}
      </div>
      <div
        ref={answerDropRef}
        className={`droppable-${index + 1}`}
        key={index}
        data-index={index}
        data-accept={question.answerId}
      >
        <div className={`droppable-${index + 1} sr-only`}>
          <span>{question.label}</span>
        </div>
        {matchedItems[question.answerId].map((item, index) => {
          return (
            <Label
              text={item.text}
              classes="primary-blue"
              type="dropped_item"
              key={`${question.name}-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DroppableItem;
