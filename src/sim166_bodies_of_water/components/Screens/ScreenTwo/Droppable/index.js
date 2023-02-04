import React, { useRef, useEffect, useState } from "react";
import "./style.scss";
import DroppableItem from "../../../../containers/DroppableItemContainer";

const Droppable = ({ dropZones, matchedItems }) => {
  return (
    <div className="droppable-stage1">
      <div className="dropZone-container">
        {dropZones.map((question, index) => {
          return (
            <DroppableItem key={index} question={question} index={index} />
          );
        })}
      </div>
      <div className="imagesDiv">
        <div className="bg-img left-background" />
        <div className="bg-img right-background" />
      </div>
    </div>
  );
};

export default Droppable;
