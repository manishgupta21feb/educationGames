import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import DragBox from "../../containers/DragBoxContainer";
import "./style.scss";

const Draggable = (props) => {
  const {
    elementData,
    draggableRef,
    matchedItems,
    setShowDropZone,
    setDraggableItem,
    setHideDroppedItem,
    updateAccessibleList,
  } = props;

  const accessibleButtonOption = (e) => {
    setDraggableItem(e.currentTarget.dataset.target);
    updateAccessibleList(true);
    // setShowDropZone(true);
    setHideDroppedItem(true);
  };

  return (
    <div className={`option-container draggable`}>
      <div ref={draggableRef} className="draggable-btn-wrapper">
        {elementData?.map((element, index) => {
          return (
            <DragBox
              key={index}
              index={index}
              element={element}
              matchedItems={matchedItems}
              accessibleButtonOption={accessibleButtonOption}
            />
          );
        })}
      </div>
    </div>
  );
};

Draggable.propTypes = {
  dropElement: PropTypes.object.isRequired,
  showToastMessage: PropTypes.func.isRequired,
};

export default Draggable;
