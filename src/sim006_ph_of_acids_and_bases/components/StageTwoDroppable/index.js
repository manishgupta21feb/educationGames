import React, { createRef, useEffect } from "react";
import Dropbox from "./Dropbox";
import "./style.scss";

const StageTwoDroppable = (props) => {
  const { dropElement, data, droppableRef } = props;

  useEffect(() => {
    if (droppableRef && droppableRef.current) {
      droppableRef.current = data.droppableDetail.map(
        (element, index) => droppableRef.current[index] ?? createRef()
      );
    }
  });

  return (
    <div className="droppable-stage2" role="region">
      {data.droppableDetail.map((val, index) => {
        return (
          <Dropbox
            index={index}
            droppableRef={droppableRef}
            key={index}
            dropElement={dropElement}
            data={data}
            element={val}
          ></Dropbox>
        );
      })}
    </div>
  );
};

export default StageTwoDroppable;
