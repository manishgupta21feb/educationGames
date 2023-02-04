import React from "react";
import PropTypes from "prop-types";
import { isIOS } from "react-device-detect";
import data from "../../data";

const DragBox = (props) => {
  const {
    accessibleButtonOption,
    // disable,
    draggableRef,
    element,
    index,
    isPopupActive,
    selectedStage,
    matchedItems,
    accessibleRef,
  } = props;

  const disable =
    matchedItems[element.accept].findIndex((m) => m.id == element.id) >= 0;

  return (
    <div className="drag-box">
      <button
        ref={(ref) => {
          accessibleRef.current[index] = ref;
        }}
        data-index={index}
        className={`option accessible-button`}
        data-target={element.accept ? element.accept : element.name}
        data-value={element.name}
        aria-label={`${element.name} ${data.draggable}`}
        aria-hidden={disable ? "true" : null}
        disabled={
          matchedItems[element.accept].findIndex((m) => m.id == element.id) >=
            0 || isPopupActive
        }
        onClick={accessibleButtonOption}
        data-drop={element.target}
      >
        <span aria-hidden>{element.name}</span>
      </button>
      <button
        ref={(ref) => {
          draggableRef.current[index] = ref;
        }}
        className={`option not-accessible-button-${selectedStage} ${
          disable ? "element-dragged" : ""
        }`}
        data-index={index}
        aria-label={element.name}
        tabIndex="-1"
        aria-hidden="true"
        data-target={element.accept ? element.accept : element.name}
        data-value={element.name}
        onClick={
          isIOS
            ? (e) => {
                accessibleButtonOption(e);
              }
            : null
        }
        disabled={disable ? true : false}
        data-drop={element.target}
      >
        <span aria-hidden>{element.name}</span>
      </button>
    </div>
  );
};

DragBox.propTypes = {
  index: PropTypes.number.isRequired,
  element: PropTypes.object.isRequired,
  accessibleButtonOption: PropTypes.func.isRequired,
  elementDescriptionAltTex: PropTypes.object,
};

export default DragBox;
