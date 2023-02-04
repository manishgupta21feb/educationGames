import React, { useEffect, useRef } from "react";
import "./style.scss";
import DragBox from "../../../../containers/DragboxContainer";

const Draggable = (props) => {
  const ref = useRef(null);
  const draggableRef = useRef(props.selectedDraggableFull);
 const {elementData,selectedDraggableFull}=props;
 useEffect(() => {
  
  if (draggableRef.current && !selectedDraggableFull&& ref.current) {
      const button = ref.current.querySelector(
        ".drag-box button:not(:disabled)"
      );
      if (button) {
        button.focus();
      }
 
  }
  draggableRef.current = selectedDraggableFull;
}, [selectedDraggableFull]);
  return (
    <div className={`option-container draggable`}>
      <div ref={ref} className="draggable-btn-wrapper">
      {elementData.map((element, index) => {
          return (
            <React.Fragment key={index}>
              <DragBox element={element}></DragBox>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Draggable;
