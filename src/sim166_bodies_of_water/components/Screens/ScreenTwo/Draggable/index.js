import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import DragBox from "../../../../containers/DragboxContainer";

const Draggable = (props) => {
  const ref = useRef(null);
  const draggableRef = useRef(props.selectedDraggableFull);
  const { elementData, selectedDraggableFull, matchedItems } = props;
  const selectedDraggableRef = useRef(props.selectedDraggableFull);

  useEffect(() => {
    if (!selectedDraggableFull && selectedDraggableRef.current) {
      const buttons = ref.current.querySelectorAll(".accessible-button");
      for (let button of buttons) {
        if (button.getAttribute("disabled") == null) {
          button.focus();
          break;
        }
      }
    }
    selectedDraggableRef.current = selectedDraggableFull;
  }, [selectedDraggableFull]);

  return (
    <div className={`option-container draggable`}>
      <div ref={ref} className="draggable-btn-wrapper">
        {elementData.map((element, index) => {
          const disableDrag = matchedItems?.filter((mi) => {
            return mi.drag.id == element.id;
          });
          return (
            <React.Fragment key={index}>
              <DragBox
                element={element}
                text={element.text}
                index={index}
                disableDrag={disableDrag}
              ></DragBox>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Draggable;
