import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { isIOS } from "react-device-detect";

const DragBox = (props) => {
  const ref = useRef(null);
  const {
    element,
    matchedItems,
    isPopupActive,
    accessibleButtonOption,
    setShowDropZone,
  } = props;

  // useEffect(() => {
  //   if (ref && ref.current) {
  //     ref.current.focus();
  //   }
  // });

  const onClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("onClick is called: ", e);
  };

  return (
    <div className="drag-box">
      <div className="geometry">
        <button
          ref={ref}
          data-target={element.id}
          data-value={element.name}
          onClick={accessibleButtonOption}
          className={`option accessible-button`}
          aria-label={`${element.name} draggable`}
          disabled={
            (matchedItems && matchedItems.includes(element.id)) || isPopupActive
          }
        >
          {element.htmlText ? (
            <span dangerouslySetInnerHTML={{ __html: element.htmlText }}></span>
          ) : (
            <span></span>
          )}
        </button>
        <div
          aria-hidden={true}
          data-target={element.id}
          data-value={element.name}
          className={`option not-accessible-button ${element.id}`}
          onClick={
            isIOS
              ? (e) => {
                  accessibleButtonOption(e);
                }
              : null
          }
        >
          {element.htmlText ? (
            <span dangerouslySetInnerHTML={{ __html: element.htmlText }}></span>
          ) : (
            <span></span>
          )}
        </div>
      </div>
      <div aria-hidden className="label">
        {element.name}
      </div>
    </div>
  );
};

DragBox.propTypes = {
  index: PropTypes.number.isRequired,
  element: PropTypes.object.isRequired,
  // onKeyUpHandle: PropTypes.func.isRequired,
  accessibleButtonOption: PropTypes.func.isRequired,
  elementDescriptionAltTex: PropTypes.object,
};

export default DragBox;
