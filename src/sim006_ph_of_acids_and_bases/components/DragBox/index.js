import React, { createRef, useEffect } from "react";
import PropTypes from "prop-types";
import { isIOS } from "react-device-detect";

const DragBox = (props) => {
  const {
    index,
    element,
    onKeyUpHandle,
    accessibleButtonOption,
    dropElement,
    selectedStage,
    draggableRef,
    isPopupActive,
  } = props;

  return (
    <div className={`drag-box ${selectedStage}`}>
      <button
        data-index={index}
        data-value={element.name}
        className={`option accessible-button`}
        aria-label={`${element.name} draggable`}
        disabled={dropElement[element.name] || isPopupActive}
        data-target={element.accept ? element.accept : element.name}
        onClick={(e) => {
          accessibleButtonOption(e);
        }}
      >
        {element.htmlText ? (
          <span dangerouslySetInnerHTML={{ __html: element.htmlText }}></span>
        ) : (
          <span>{element.name}</span>
        )}
      </button>
      <button
        ref={(ref) => {
          draggableRef.current[index] = ref;
        }}
        className={`option not-accessible-button-${selectedStage} ${
          dropElement[element.name] ? "element-dragged" : ""
        }`}
        aria-label={element.name}
        tabIndex="-1"
        aria-hidden="true"
        data-index={index}
        data-target={element.accept ? element.accept : element.name}
        data-value={element.name}
        onKeyUp={(e) => {
          onKeyUpHandle(e);
        }}
        onClick={
          isIOS
            ? (e) => {
                accessibleButtonOption(e);
              }
            : null
        }
        disabled={dropElement[element.name]}
      >
        {element.htmlText ? (
          <span dangerouslySetInnerHTML={{ __html: element.htmlText }}></span>
        ) : (
          <span>{element.name}</span>
        )}
      </button>
    </div>
  );
};

DragBox.propTypes = {
  index: PropTypes.number.isRequired,
  element: PropTypes.object.isRequired,
  onKeyUpHandle: PropTypes.func.isRequired,
  accessibleButtonOption: PropTypes.func.isRequired,
  elementDescriptionAltTex: PropTypes.object,
};

export default DragBox;
