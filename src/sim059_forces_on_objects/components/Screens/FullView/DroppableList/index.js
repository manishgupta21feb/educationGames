import React, { useRef, useEffect, useState } from "react";
import "./style.scss";
import DroppableItem from "../../../../containers/DroppableItemContainer";

const Droppable = ({ droppableQuestion }) => {
  return (
    <>
      <div className="droppable-stage1" role="region">
        {droppableQuestion.map((question, index) => {
          return (
            <DroppableItem key={index} question={question} index={index} />
          );
        })}
      </div>
    </>
  );
};

export default Droppable;
