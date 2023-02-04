import React, { useEffect, useRef, useState } from "react";
import "./style.scss";

const LeftArea = (props) => {
  const {
    animalDropZone,
    plantDropZone,
    selectedDraggable,
    animalDraggleItems,
    plantDragableItems,
    onDrop,
    combineCellAndMembrane,
    forceAnimalHighlight = false,
    forcePlantHighlight = false,
  } = props;

  const draggableRef = useRef(null);
  const animalDropRef = useRef(null);
  const plantDropRef = useRef(null);

  const isCellWall = plantDragableItems.find((p) => p.zIndex === 0);
  const isCellMembrane = plantDragableItems.find((p) => p.zIndex === 1);

  useEffect(() => {
    const isEmptyDraggable =
      selectedDraggable && Object.keys(selectedDraggable).length === 0;

    if (!isEmptyDraggable) {
      $(draggableRef.current).draggable({
        containment: "parent",
        cursor: "grabbing",
        revert: true,
      });
    }
    $(animalDropRef.current).droppable({
      //accept: draggableRef.current,
      classes: {
        //"ui-droppable-active": "drop-target",
        "ui-droppable-hover": "highlight",
      },
      tolerance: "touch",
      drop: (event, ui) => {
        onDrop(true);
      },
    });
    $(plantDropRef.current).droppable({
      //accept: draggableRef.current,
      classes: {
        "ui-droppable-hover": "highlight",
      },
      tolerance: "touch",
      drop: (event, ui) => {
        onDrop(false);
      },
    });
  }, [selectedDraggable]);
  //plantDropZone.ariaLabel,plantDropZone.altText,plantDragableItems)
  const getAriaLabel = (defaultAriaLabel, updateAriaLabel, organelles) => {
    // return "plant cell with mitochrondria"
    if (organelles.length === 0) {
      return defaultAriaLabel;
    } else
      return updateAriaLabel + organelles.map((item) => item.altText).join();
  };

  const isDraggableSelected = Object.keys(selectedDraggable).length > 0;
  return (
    <div className="left-area">
      {/** show animal cell here */}

      <div className="whole-cell">
        <div
          ref={animalDropRef}
          className={`animal-div ${forceAnimalHighlight ? "highlight" : ""}`}
        >
          <div
            role="img"
            aria-label={getAriaLabel(
              animalDropZone.ariaLabel,
              animalDropZone.altText,
              animalDraggleItems
            )}
            className={`animal-cell`}
          ></div>
        </div>

        <p className="label animal" aria-hidden="true">
          {animalDropZone.label}
        </p>
      </div>
      {animalDraggleItems.map((img) => (
        <img
          key={img.zIndex}
          aria-hidden="true"
          style={{ zIndex: img.zIndex }}
          className="show-animal"
          src={img.imgSource}
        />
      ))}

      {isDraggableSelected && (
        <div
          ref={draggableRef}
          className="drag-item"
          role="img"
          aria-label={selectedDraggable.altText.ariaAltText}
        >
          <img src={selectedDraggable.dargImg} />
        </div>
      )}

      {/** show plant cell here */}
      <div className="whole-cell">
        <div
          role="img"
          aria-label={plantDropZone.ariaLabel}
          aria-label={getAriaLabel(
            plantDropZone.ariaLabel,
            plantDropZone.altText,
            plantDragableItems
          )}
          className={`plant-cell ${forcePlantHighlight ? "highlight" : ""}`}
          ref={plantDropRef}
        ></div>
        <p className="label plant" aria-hidden="true">
          {plantDropZone.label}
        </p>
      </div>

      {plantDragableItems.map((img) => (
        <img
          key={img.zIndex}
          style={{ zIndex: img.zIndex }}
          className="show-plant"
          aria-hidden="true"
          src={img.imgSource}
        />
      ))}

      {isCellWall && isCellMembrane && (
        <img
          style={{ zIndex: 1 }}
          aria-hidden="true"
          className="show-plant"
          src={combineCellAndMembrane}
        />
      )}
    </div>
  );
};

export default LeftArea;
