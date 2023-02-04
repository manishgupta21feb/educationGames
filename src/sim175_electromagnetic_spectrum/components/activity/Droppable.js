import React from "react";
import PropTypes from "prop-types";
import Slider from "../../containers/SliderContainer";

const Droppable = (props) => {
  const { droppedItems, selectedQuestion, correctAnswer, dropzoneLabel } =
    props;

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
          return !element.length ? (
            <div key={index} id={index} className="droppable-main">
              <div
                className={`target option option-${index + 1} `}
                data-index={index}
                data-accept={element}
                aria-label={`${dropzoneLabel} ${index + 1}`}
              >
                {" "}
              </div>
            </div>
          ) : (
            <div key={index} className="droppable-main">
              <div
                aria-label={element}
                className={`option element-dropped ${element} ${
                  selectedQuestion > 1 && correctAnswer ? "hide" : ""
                }`}
              ></div>
            </div>
          );
        })}
      </div>

      <Slider />
    </>
  );
};

Droppable.propTypes = {
  data: PropTypes.array.isRequired,
  droppedElement: PropTypes.object,
};

export default Droppable;
