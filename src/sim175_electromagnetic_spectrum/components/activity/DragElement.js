import React from "react";
import PropTypes from "prop-types";
import { isIOS } from "react-device-detect";

const DragElement = (props) => {
  const {
    index,
    element,
    shortName,
    dragName,
    popupActive,
    elementName,
    droppedItems,
    accessibleButtonOption,
    listItemsLength,
  } = props;
  return (
    <>
      <button
        className={`accessible-button  btn-${index} drag-${listItemsLength}`}
        data-target={shortName}
        aria-label={`${elementName} draggable`}
        aria-hidden={droppedItems.indexOf(shortName) >= 0 ? "true" : null}
        disabled={droppedItems.indexOf(shortName) >= 0 || popupActive}
        onClick={(e) => {
          accessibleButtonOption(e, element, index);
        }}
      ></button>

      <button
        className={`option ${shortName} ${
          droppedItems.indexOf(shortName) >= 0
            ? "element-dragged"
            : "ui-draggable ui-draggable-handle"
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
        <span className={shortName} aria-label={dragName}>
          {shortName}
        </span>
      </button>
    </>
  );
};

DragElement.propTypes = {
  index: PropTypes.number.isRequired,
  dotCounts: PropTypes.number,
  elementName: PropTypes.string.isRequired,
  showHint: PropTypes.func.isRequired,
  droppedElement: PropTypes.object.isRequired,
  onKeyUpHandle: PropTypes.func.isRequired,
  accessibleButtonOption: PropTypes.func.isRequired,
  elementDescriptionAltTex: PropTypes.object,
};

export default DragElement;
