import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

const Droppable = (props) => {
  const {
    data,
    droppedItems,
    questionDesc,
    selectedQuestion,
    correctAnswer,
    dropzoneLabel,
  } = props;

  return (
    <>
      <div
        className={`option-container droppable ${
          droppedItems.every((d) => d.length > 0) && correctAnswer
            ? "answer-screen"
            : ""
        }`}
      >
        {droppedItems?.map((element, index) => {
          const srName = element
            ? data.filter((d) => element && d.shortName == element)[0]
                .elementName
            : "";
          return !element.length ? (
            <div
              key={index}
              className={`target option option-${index + 1} `}
              data-index={index}
              data-accept={element}
            >
              <p className="sr-only sr-image">{`${dropzoneLabel} ${
                index + 1
              }`}</p>
            </div>
          ) : (
            <div
              key={index}
              aria-label={element}
              className={`option element-dropped ${
                selectedQuestion > 1 && correctAnswer ? "hide" : ""
              }`}
            >
              <span className="sr-only sr-image">{srName}</span>
              <span aria-hidden>{element}</span>
            </div>
          );
        })}
      </div>
      <div
        className={`arrow-horizontal ${
          droppedItems.every((d) => d.length > 0) && correctAnswer
            ? "answer-screen-arrow"
            : ""
        }`}
      ></div>
      {droppedItems.every((d) => d.length > 0) && correctAnswer ? (
        <div className="question-desc">
          <p>{questionDesc}</p>
        </div>
      ) : null}
    </>
  );
};

Droppable.propTypes = {
  data: PropTypes.array.isRequired,
  droppedElement: PropTypes.object,
};

export default Droppable;
