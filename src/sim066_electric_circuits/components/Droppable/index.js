import React, { useRef, useEffect, useState } from "react";
import AccessibleList from "../../containers/AccessibleList";
import "./style.scss";

const Droppable = (props) => {
  const ref = useRef(null);
  const {
    items,
    onDrop,
    correct,
    animate,
    answered,
    circuitName,
    leftCircuit,
    rightCircuit,
    dropZoneImages,
    selectedDraggable,
    leftClosedCircuit,
    rightClosedCircuit,
  } = props;

  useEffect(() => {}, [selectedDraggable]);

  useEffect(() => {
    if (ref.current) {
      const droppables = ref.current.querySelectorAll(".dropzones");
      if (droppables && droppables.length) {
        $(droppables).droppable({
          drop: (ev, ui) => {
            ui.helper[0].style.display = "none";
            const id = ev.target.dataset.id;
            const alt = ev.target.dataset.alt;

            const dataset = { id: id, altText: alt };
            onDrop(dataset);
          },
        });
      }
    }
  }, []);

  useEffect(() => {
    for (let item of items) {
      const droppableState = item.dragType ? "disable" : "enable";
      const _droppable = ref.current.querySelector(`.dropzones.${item.id}`);
      if (_droppable) {
        $(_droppable).droppable(droppableState);
      }
    }
  }, [items]);

  useEffect(() => {
    if (correct) {
      const droppables = ref.current.querySelectorAll(".dropzones");
      $(droppables).droppable("disable");
    } else {
      const droppables = ref.current.querySelectorAll(".dropzones");
      $(droppables).droppable("enable");
    }
  }, [correct, animate]);

  return (
    <div className="droppables">
      <div className="droppables-wrapper" ref={ref}>
        <AccessibleList />
        {items.map((item, index) => {
          const leftSeries = leftClosedCircuit.indexOf(item.id) >= 0;
          const rightSeries = rightClosedCircuit.indexOf(item.id) >= 0;
          const completed = leftCircuit ? leftSeries : rightSeries;
          const circuit =
            circuitName == "series" && animate == false
              ? answered && completed
              : answered;
          const itemName = item.dragType;
          const dropzoneId = item.id;
          return (
            <div
              key={`${item.id}${index}`}
              className={`dropzones ${item.id}`}
              data-id={item.id}
              data-alt={item.altText}
            >
              {dropZoneImages.map((i, index) => {
                // console.log("from Drop", itemName, i.name, i.class);
                return (
                  <div
                    key={i.id}
                    className={`dropped-objects ${i.class}  ${
                      circuit && itemName == "fan" ? "fan-animation" : ""
                    }
                    ${dropzoneId}`}
                    style={{ opacity: itemName == i.class ? "1" : "0" }}
                  ></div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Droppable;
{
  /* <div
                className={`dropped-objects ${item.dragType} ${
                  circuit ? "fan-animation" : ""
                } ${item.id}`}
              ></div> */
}
