import React, { useRef, useEffect, useState } from "react";
import "./style.scss";
import DroppableItem from "../../../../containers/DroppableItemContainer"
const Droppable = ({droppableQuestion,ariaLabel}) => {

  return (
    <div
      className="droppable-stage1"
      role="region"
      aria-label={ariaLabel}
    >
      {droppableQuestion.map((question, index) => {
        return <DroppableItem key={index}  question={question}   index={index}/>

      })}

    </div>
  );
};


export default Droppable;
