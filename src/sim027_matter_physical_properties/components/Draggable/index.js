import React, { Fragment, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import DragBox from "../../containers/DragBoxContainer";
import "./style.scss";

const Draggable = (props) => {
  const {
    elementData,
    draggableRef,
    itemDroppedAt,
    setDraggableItem,
    updateAccessibleList,
  } = props;

  const accessibleButtonOption = (e) => {
    const { dataset } = e.currentTarget;
    setDraggableItem({ ...dataset });
    updateAccessibleList(true);
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
              itemDroppedAt={itemDroppedAt[element.name]}
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
