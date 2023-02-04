import React, { useEffect, useRef } from "react";
import "./style.scss";
import AccessibleList from "../../../../containers/AccessibleList";
import DroppableItem from "../../../../containers/DroppableItemContainer";

const Droppable = (props) => {
  const { ariaLabel, droppableQuestion } = props;

  return (
    <div className="droppable-stage1" aria-labelledby={ariaLabel}>
      <AccessibleList />
      {droppableQuestion.map((question, index) => {
        return <DroppableItem key={index} question={question} index={index} />;
      })}
    </div>
  );
};

export default Droppable;
