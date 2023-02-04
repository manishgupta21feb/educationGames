import React, { useState } from "react";
import PropTypes from "prop-types";

const DragElement = (props) => {
  const {
    index,
    showHint,
    dotCounts,
    elementName,
    type = "dots",
    isPopupActive,
    onKeyUpHandle,
    droppedElement,
    accessibleButtonOption,
    elementDescriptionAltText,
  } = props;

  let dotCountInWords = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
  ];

  const [maxDots, setMaxDots] = useState(8);

  const createInputs = (count) => {
    if (maxDots >= count && type === "dots") {
      let arr = [];
      for (let i = 0; i < count; i++) {
        arr.push(
          <div key={i} className={`dot dot-${dotCountInWords[i]}`}></div>
        );
      }
      return arr.map((input) => input);
    }
  };
  return (
    <div>
      <button
        data-target={elementName}
        className={`accessible-button btn-${index}`}
        aria-label={elementDescriptionAltText[elementName]}
        disabled={droppedElement.current[elementName] || isPopupActive}
        aria-hidden={
          droppedElement.current[elementName] || isPopupActive ? "true" : null
        }
        onFocus={() =>
          setTimeout(() => {
            showHint(elementName);
          }, 50)
        }
        onBlur={() => showHint()}
        onClick={(e) => {
          accessibleButtonOption(e);
        }}
      ></button>

      <button
        className={`option ${
          droppedElement.current[elementName] ? "element-dragged" : ""
        }`}
        tabIndex="-1"
        aria-hidden="true"
        onClick={(e) => {
          showHint(elementName);
          accessibleButtonOption(e);
        }}
        data-target={elementName}
        onMouseEnter={() => showHint(elementName)}
        onMouseLeave={() => showHint()}
        onKeyUp={(e) => {
          onKeyUpHandle(e);
          showHint(elementName);
        }}
        disabled={droppedElement.current[elementName]}
      >
        {maxDots >= dotCounts && type === "dots" ? (
          <div className={`dots-wrapper set-${dotCountInWords[dotCounts - 1]}`}>
            <span className="textX">X</span>
            {createInputs(dotCounts)}
          </div>
        ) : (
          <div className="question-mark-wrapper">
            <span className="textX">X</span>
            <span className="question-mark">?</span>
          </div>
        )}
      </button>
    </div>
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
