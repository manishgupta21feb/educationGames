import React, { useEffect, useRef, useState } from "react";
import Label from "../../../../../app/components/Label";

const DroppableItem = (props) => {
  const dropRef = useRef();
  const itemsRef = useRef(props.matchedItems);
  const answerDropRef = useRef(null);
  const { question, index, onDrop, matchedItems } = props;
  const [abc, setAbc] = useState(false);

  useEffect(() => {
    $(answerDropRef.current).droppable({
      classes: { "ui-droppable-hover": "setBlueHoverColor" },
      tolerance: "pointer",
      drop: (e, u) => {
        if (u?.helper[0]?.dataset && e?.target.dataset) {
          const target = e.target.dataset;
          const drag = u.helper[0].dataset;

          onDrop({
            ...target,
            drag,
          });
        }
      },
    });
  });

  useEffect(() => {
    if (itemsRef.current.length < matchedItems.length) {
      const item = { ...matchedItems[matchedItems.length - 1] };

      const dropBox = dropRef.current.querySelector(`.drop.${item.drop.id}`);
      setAbc(true);
    } else {
      const filterDragItem = itemsRef.current.filter((question) => {
        return (
          matchedItems.findIndex((m) => m.drop.id == question.drop.id) == -1
        );
      });
      for (let item of filterDragItem) {
        const dragBox = dropRef.current.querySelector(`.drop.${item.drop.id}`);

        $(dragBox).droppable("enable");
      }
    }
    itemsRef.current = matchedItems;
  });
  return (
    <div className="dropping-Area" ref={dropRef}>
      <div role="heading" aria-level="2" className={`heading-${index + 1} `}>
        {question.name}
      </div>
      <div
        ref={answerDropRef}
        className={`droppable-${index + 1}`}
        key={index}
        data-id={question.answerId}
        data-index={index}
        data-accept={question.answerId}
        data-name={question.label}
      >
        <p className={`droppable-${index + 1} sr-only`}>
          <span>{question.label}</span>
        </p>
        {matchedItems?.map((mi, i) => {
          if (mi.drop.id == question.answerId) {
            return (
              <div text={mi.drag.value} className="dropped_item" key={i}>
                <p>{mi.drag.value}</p>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default DroppableItem;
