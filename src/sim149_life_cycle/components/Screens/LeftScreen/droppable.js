import React, { useRef, useEffect } from "react";
import AccessibleList from "../../../containers/AccessibleList.js";
const draggable = (props) => {
  const {
    data,
    isPopupActive,
    currentHotSpot,
    visitedHotspotBtn,
    selectedQuestion,
    onClick,
    droppables,
    matchedItems,
    onDrop,
    accessibleListVisible,
    droppableChangeState,
  } = props;
  const dropRef = useRef();
  const itemsRef = useRef(props.matchedItems);
  useEffect(() => {
    const drop = dropRef.current.querySelectorAll(".drop");

    $(drop).droppable({
      tolerance: "pointer",

      drop: (event, ui) => {
        const { dataset } = event.target;

        onDrop({ ...dataset });
      },
    });
  }, []);
  useEffect(() => {
    if (itemsRef.current.length < matchedItems.length) {
      const item = { ...matchedItems[matchedItems.length - 1] };

      const dropBox = dropRef.current.querySelector(`.drop.${item.drop.id}`);
      droppableChangeState(item.drop.id, true, selectedQuestion);
      $(dropBox).droppable("disable");
    } else {
      const filterDragItem = itemsRef.current.filter((ele) => {
        return matchedItems.findIndex((m) => m.drop.id == ele.drop.id) == -1;
      });
      for (let item of filterDragItem) {
        const dragBox = dropRef.current.querySelector(`.drop.${item.drop.id}`);

        droppableChangeState(dragBox.id, false, selectedQuestion);
        $(dragBox).droppable("enable");
      }
    }
    itemsRef.current = matchedItems;
  }, [matchedItems]);
  return (
    <div className="left-container" ref={dropRef}>
      <h2 className="left-heading">{selectedQuestion.leftHeading}</h2>

      <div className={`img--${selectedQuestion.id}`}>
        <img className="sr-only sr-image" alt={selectedQuestion.imgAlt} />
      </div>
      <AccessibleList />

      {droppables.map((drops) => {
        const matchedFilter = matchedItems.filter((item, idx) => {
          return drops.id == item.drop.id;
        });
        return (
          <div
            id={drops.id}
            key={`main-div${drops.id}`}
            data-id={drops.id}
            className={`drop ${drops.id} ${
              drops.hidden ? `disabled-drop disabled-drop--${drops.id}` : ""
            }`}
            data-label={drops.beforeDropTxt}
            data-answer-id={drops.answerId}
            aria-hidden={accessibleListVisible}
          >
            <p className="sr-only">
              {matchedFilter.length
                ? `${drops.label} ${matchedFilter[0].drag.text}`
                : `${drops.label}`}
            </p>
            {matchedItems.length
              ? matchedItems.map((items) => {
                  if (items.drop.id == drops.id) {
                    return (
                      <span key={`span--${drops.id}`} aria-hidden>
                        {items.drag.text}
                      </span>
                    );
                  }
                })
              : null}
          </div>
        );
      })}
    </div>
  );
};

export default draggable;
