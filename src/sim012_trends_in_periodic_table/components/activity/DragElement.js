import React, { useState } from "react";
import PropTypes from "prop-types";
import { isIOS } from "react-device-detect";

const DragElement = (props) => {
  const {
    index,
    element,
    shortName,
    popupActive,
    elementName,
    droppedItems,
    accessibleButtonOption,
  } = props;

  return (
    <>
      <button
        data-target={shortName}
        aria-label={`${elementName} draggable`}
        className={`accessible-button btn-${index}`}
        disabled={droppedItems.indexOf(shortName) >= 0 || popupActive}
        onClick={(e) => {
          accessibleButtonOption(e, element, index);
        }}
      ></button>

      <button
        className={`option ${
          droppedItems.indexOf(shortName) >= 0 ? "element-dragged" : ""
        }`}
        tabIndex="-1"
        aria-hidden="true"
        onClick={
          isIOS
            ? (e) => {
                accessibleButtonOption(e, element, index);
              }
            : null
        }
        data-target={shortName}
        data-dropped={droppedItems.indexOf(shortName) >= 0}
        disabled={droppedItems.indexOf(shortName) >= 0 || popupActive}
      >
        <span style={{ pointerEvents: "none" }}>{shortName}</span>
      </button>
    </>
  );
};

DragElement.propTypes = {
  dotCounts: PropTypes.number,
  index: PropTypes.number.isRequired,
  showHint: PropTypes.func.isRequired,
  elementName: PropTypes.string.isRequired,
  onKeyUpHandle: PropTypes.func.isRequired,
  elementDescriptionAltTex: PropTypes.object,
  droppedElement: PropTypes.object.isRequired,
  accessibleButtonOption: PropTypes.func.isRequired,
};

export default DragElement;
