import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { createDroppables } from "../../../app/components/DnD";
import "./_droppable.scss";
import WaveImage from "./WaveImage";

const Droppable = (props) => {
  const {
    data,
    draggedElements,
    accessibleListVisible,
    onDrag,
    topText,
    bottomText,
    onIncorrect,
    arrowAltText,
    altText,
    imageLabel,
    droppedText,
  } = props;

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setTimeout(() => {
        InitDragDrop(ref);
      }, 300);
    }
  }, []);

  const InitDragDrop = (ref) => {
    const droppableItems = ref.current.querySelectorAll(".droppable-element");
    createDroppables({
      props: {
        drop: function (event, ui) {
          let draggedElem = ui.helper[0].getAttribute("data-value");
          const dropAccept = event.target.getAttribute("data-accept");
          if (draggedElem && dropAccept && draggedElem === dropAccept) {
            onDrag(draggedElem);
          } else {
            onIncorrect();
          }
        },
      },
      elements: droppableItems,
    });
  };

  return (
    <div
      className="droppable"
      ref={ref}
      aria-hidden={accessibleListVisible ? true : null}
      key={!accessibleListVisible ? "non-a11y" : "a11y"}
    >
      {data.map((element, index) => {
        if (element.id === "img")
          return (
            <WaveImage
              key={element.id}
              topText={topText}
              bottomText={bottomText}
              arrowAltText={arrowAltText}
              altText={altText}
              imageLabel={imageLabel}
            />
          );
        return !draggedElements.includes(element.id) ? (
          <div
            key={element.id}
            className={`droppable-element option option-${index + 1}`}
            data-accept={element.id}
          >
            <div className="sr-only sr-image">{element.dropLabel}</div>
          </div>
        ) : (
          <div
            key={element.id}
            className={`option option-${index + 1} dropped`}
          >
            <div className="sr-only sr-image">{`${element.dropLabel}, ${element.name} ${droppedText}`}</div>
            <span aria-hidden>{element.name}</span>
          </div>
        );
      })}
    </div>
  );
};

Droppable.propTypes = {
  data: PropTypes.array.isRequired,
  draggedElements: PropTypes.array.isRequired,
  accessibleListVisible: PropTypes.bool.isRequired,
};

export default Droppable;
