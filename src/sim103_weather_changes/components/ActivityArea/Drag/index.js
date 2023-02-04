import React from "react";
import Dragbox from "../../../containers/DragboxContainer";
import "./style.scss";

const Draggable = (props) => {
  const { dragItems, itemDroppedAt } = props;
  return (
    <div className={`option-container draggable`}>
      <div className="draggable-btn-wrapper">
        {Array.isArray(dragItems.currentDragData.dragData) &&
          dragItems.currentDragData.dragData.map((element, index) => {
            return (
              <Dragbox
                key={index}
                element={element}
                itemDroppedAt={itemDroppedAt[element.id]}
              ></Dragbox>
            );
          })}
      </div>
    </div>
  );
};

export default Draggable;
