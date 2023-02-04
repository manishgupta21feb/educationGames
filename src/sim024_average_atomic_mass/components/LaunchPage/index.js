import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import {
  createDraggables,
  createDroppables,
  AccessibleList,
} from "../../../app/components/DnD";

import "./style.scss";
import CarbonOrbitDiagram from "../CarbonOrbitDiagram";

export default (props) => {
  const {
    carbon,
    setVisitedCarbon,
    instructionText,
    visited,
    isReset,
    initialScaleAltText,
    isPopupActive,
    labels,
    list
  } = props;
  
  const [selected, setSelected] = useState("");
  const [accessibleList, setAccessibleList] = useState(false);
  const [showDragZone, setShowDragZone] = useState(false);
  const selectedCarbon = carbon.filter((c) => c.id === selected);
  const ref = useRef(null);
  const currentTargetRef = useRef(null);

  useEffect(() => {
    if (isReset) {
      setAccessibleList(false);
      setShowDragZone(false);
      setSelected("");
      if (ref.current) {
        setTimeout(() => {
          InitDragDrop(ref);
        }, 300);
      }
    }
  }, [isReset]);

  const onDragClick = (e) => {
    currentTargetRef.current = e.currentTarget;
    setAccessibleList(true);
  };
  const onListClick = () => {
    const currentTarget = currentTargetRef.current.getAttribute("data-source");
    onDrag(currentTarget);
  };

  const onDrag = (target) => {
    setTimeout(() => {
      setSelected(target);
      setVisitedCarbon(target);
    }, 200);
  };

  const onListClose = () => {
    setAccessibleList(false);
  };

  const InitDragDrop = (ref) => {
    const draggableItems = ref.current.querySelectorAll(".draggable-element");

    createDraggables({
      props: {
        cancel: false,
        containment: ".launch-con",
        start: function () {
          $(this).addClass("element-dragging");
          setShowDragZone(true);
        },
        stop: function () {
          setShowDragZone(false);
        },
        revert: function () {
          if ($(this).hasClass("element-dragging")) {
            $(this).removeClass("element-dragging");
            return true;
          }
        },
        helper: "clone",
      },
      elements: draggableItems,
    });

    const droppableItems = ref.current.querySelectorAll(".carbon-drop");
    createDroppables({
      props: {
        tolerance: "intersect",
        drop: function (event, ui) {
          let draggedElem = ui.helper[0].getAttribute("data-source");
          if (draggedElem) {
            onDrag(draggedElem);
            $(ui.draggable).removeClass("element-dragging");
            $(ui.draggable).draggable("disable");
          }
        },
      },
      elements: droppableItems,
    });
  };

  return (
    <div ref={ref} className="launch-con">
      <div
        role="heading"
        aria-level="1"
        className="instructor"
        aria-label={instructionText}
      >
        <p className="heading" aria-hidden="true">
          {instructionText}
        </p>
      </div>
      <div className="draggable-container">
        {carbon.map((c, index) => {
          return (
            <CarbonOrbitDiagram
              key={index}
              id={c.id}
              name={c.name}
              onDragClick={onDragClick}
              disabled={visited.includes(c.id)}
              isPopupActive={isPopupActive}
            ></CarbonOrbitDiagram>
          );
        })}
      </div>
      <AccessibleList
        onClick={onListClick}
        closeList={onListClose}
        opened={accessibleList}
        list={list}
      ></AccessibleList>
      <CarbonDropbox
        data={selectedCarbon[0]}
        selected={selected}
        showDragZone={showDragZone}
        initialScaleAltText={initialScaleAltText}
      ></CarbonDropbox>
      <Footer labels={labels} data={selectedCarbon[0]}></Footer>
    </div>
  );
};

const CarbonDropbox = (props) => {
  const { selected, data, showDragZone, initialScaleAltText } = props;
  const classes = showDragZone ? "show" : "";
  return (
    <div
      role="img"
      title={selected ? data.altText : initialScaleAltText}
      className={`carbon-drop-container`}
    >
      <div
        aria-hidden
        selected={selected}
        className={`carbon-drop ${classes} ${selected ? "dropped" : ""}`}
      >
        {selected ? <div className={`${selected}`}></div> : null}
      </div>
      <div className="carbon-scale">
        <span>
          {data?.mass} {data?.massUnit}
        </span>
      </div>
    </div>
  );
};
