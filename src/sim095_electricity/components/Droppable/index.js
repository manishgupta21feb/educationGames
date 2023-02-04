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
    circuitNameProps,
    numberOfBattery,
    accessibleListVisible,
    checkButton,
    storeDropzone,
    showBright,
  } = props;
  const bulbDropArray = ["dropzone3", "dropzone6", "dropzone7"];
  const itemArray = ["bulb", "fan", "bell"];
  const leftArray = ["dropzone1", "dropzone6", "dropzone5", "dropzone7"];
  const rightArray = ["dropzone2", "dropzone3", "dropzone4", "dropzone7"];

  useEffect(() => {
    if (ref.current) {
      const droppables = ref.current.querySelectorAll(".dropzones");
      if (droppables && droppables.length) {
        $(droppables).droppable({
          drop: (ev, ui) => {
            ui.helper[0].style.display = "none";
            const id = ev.target.dataset.id;

            onDrop(id);
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
    <div className={`droppables--${circuitName}`}>
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
              aria-hidden={accessibleListVisible}
            >
              {dropZoneImages.map((i, index) => {
                if (i.id) {
                  return (
                    <div
                      key={i.id}
                      className={`dropped-objects ${i.class}  ${
                        correct && itemArray.includes(itemName)
                          ? bulbDropArray.includes(dropzoneId)
                            ? numberOfBattery.length == 2
                              ? `${itemName}-animation-1-brighter`
                              : `${itemName}-animation-1`
                            : numberOfBattery.length == 2
                            ? `${itemName}-animation-brighter`
                            : `${itemName}-animation`
                          : ""
                      }
                    ${dropzoneId}`}
                      style={{ opacity: itemName == i.class ? "1" : "0" }}
                    ></div>
                  );
                } else {
                  const renderBulbs = bulbDropArray.includes(dropzoneId)
                    ? i.bulbs.bulbsVerticle
                    : i.bulbs.bulbsHori;
                  const baseClass = bulbDropArray.includes(dropzoneId)
                    ? "bulb_verticle"
                    : "bulb_hori";

                  const bulbShow = leftCircuit
                    ? leftArray.includes(dropzoneId)
                      ? `${baseClass}_on`
                      : `${baseClass}`
                    : rightCircuit
                    ? rightArray.includes(dropzoneId)
                      ? `${baseClass}_on`
                      : `${baseClass}`
                    : correct || showBright
                    ? `${baseClass}_on`
                    : baseClass;
                  const brighter =
                    numberOfBattery.length == 2 && baseClass != bulbShow
                      ? bulbShow + "_brighter"
                      : bulbShow;

                  return (
                    <div
                      className="dropped-objects bulbs-wrapper "
                      key={`bulb${i.id}`}
                    >
                      {renderBulbs.map((bulb) => {
                        return (
                          <div
                            key={bulb.id}
                            className={`${bulb.class} ${dropzoneId} ${
                              checkButton
                                ? brighter == bulb.class &&
                                  storeDropzone.includes(dropzoneId)
                                  ? "show"
                                  : "hide"
                                : brighter == bulb.class && itemName == "bulb"
                                ? "show"
                                : "hide"
                            }`}
                          ></div>
                        );
                      })}
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Droppable;
