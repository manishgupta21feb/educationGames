import React, { useEffect, useRef } from "react";
import DragBox from "../../../../containers/DragBoxContainer";
import "./style.scss";

const Draggable = (props) => {
  const ref = useRef(null);
  const dragListRef = useRef(null);
  const isAccessibleRef = useRef(null);
  const { elementData, dragList, isAccessible } = props;

  useEffect(() => {
    if (
      (dragList !== dragListRef.current &&
        dragList.some((d) => d.isDisable) &&
        !dragList.every((d) => d.isDisable)) ||
      (!isAccessible && isAccessibleRef.current)
    ) {
      const draggable = dragList.find((d) => !d.isDisable);
      if (draggable && draggable.name && ref.current) {
        const element = ref.current.querySelector(
          `button.accessible-button[data-target="${draggable.name}"]`
        );
        if (element) {
          element.focus();
        }
      }
    }
    dragListRef.current = dragList;
    isAccessibleRef.current = isAccessible;
  }, [dragList, isAccessible]);

  return (
    <div
      className={`option-container draggable`}
      key={isAccessible ? "accessible-vis" : "accessible-hid"}
    >
      <div ref={ref} className="draggable-btn-wrapper">
        {elementData.map((element, index) => {
          return <DragBox key={`dragbox${index}`} element={element}></DragBox>;
        })}
      </div>
    </div>
  );
};

export default Draggable;
