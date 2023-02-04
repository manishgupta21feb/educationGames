import React, { useEffect, useRef, useState } from "react";

import {
  createDraggables,
  createDroppables,
  AccessibleList,
} from "../../../app/components/DnD";
import Draggable from "../common/Draggable";
import Next from "../common/Next";
import Submit from "../common/Submit";
import Dropbox from "./Dropbox";

import "./style.scss";

export default (props) => {
  const {
    screenData,
    instructionText,
    isPopupActive,
    setVisited,
    visited,
    onCorrect,
    onIncorrect,
    onNextClick,
    buttonLabels,
    onScreen2Reset,
  } = props;
  const [correctAttempt, setCorrectAttempt] = useState(false);
  const [accessibleList, setAccessibleList] = useState(false);
  const [showDrop, setShowDrop] = useState(false);
  const currentTargetRef = useRef(null);
  const accessibleListRef = useRef(accessibleList);

  const ref = useRef(null);
  const countRef = useRef(0);

  useEffect(() => {
    if (ref.current) {
      setTimeout(() => {
        InitDragDrop(ref);
      }, 300);
    }
  }, [visited]);

  useEffect(() => {
    if (!accessibleList && accessibleListRef.current) {
      if (ref.current) {
        const button = ref.current.querySelector(
          ".draggable-button button:not(:disabled)"
        );
        if (button) {
          button.focus();
        }
      }
    }
    accessibleListRef.current = accessibleList;
  },[accessibleList])

  const aList = screenData.drop.map((val) => {
    if (Object.keys(visited).includes(val.id)) {
      if (visited[val.id].length === 2) {
        const lbl =
          val.label +
          val.afterDropped
            .replace("-1-", visited[val.id][0])
            .replace("-2-", visited[val.id][1]);
        return { ...val, label: lbl, hidden: true };
      } else {
        const lbl = val.label + val.dropped.replace("-1-", visited[val.id][0]);
        return { ...val, label: lbl, hidden: false };
      }
    } else {
      return { ...val, hidden: false };
    }
  });

  const onSubmitAnswer = (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    let correct = false;
    screenData.drop.map((c, index) => {
      const array2Sorted = c.accept.slice().sort();
      const array1 = visited[c.id];
      const temp =
        array1.length === array2Sorted.length &&
        array1
          .slice()
          .sort()
          .every(function (value, index) {
            return value === array2Sorted[index];
          });

      if (temp) {
        correct = true;
      } else {
        correct = false;
        return;
      }
    });
    if (correct) {
      onCorrect();
      setCorrectAttempt(true);
    } else {
      onIncorrect();
      onScreen2Reset();
      setCorrectAttempt(false);
    }
  };

  const onDragClick = (e) => {
    currentTargetRef.current = e.currentTarget;
    setAccessibleList(true);
  };
  const onListClick = (id) => {
    const key = id.id;
    const currentTarget = currentTargetRef.current.getAttribute("data-source");
    onDrag({ [key]: [currentTarget] }, currentTarget, id.label);
    setAccessibleList(false);
  };

  const onDrag = (target, drag, drop) => {
    let liveTxt = "";
    if (drag) {
      const dragName = screenData.drag.filter((d) => d.id === drag)[0].name;
      liveTxt = dragName + screenData.dropLiveText + drop;
    }
    setTimeout(() => {
      setVisited(target, liveTxt);
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
        containment: ".screen2wrapper",
        start: function () {
          $(this).addClass("element-dragging");
          setShowDrop(true);
        },
        stop: function () {
          setShowDrop(false);
        },
        revert: function () {
          if ($(this).hasClass("element-dragging")) {
            $(this).removeClass("element-dragging");
            EventManager.broadcast("INCORRECT_DRAG_REVERT");
            return true;
          }
        },
        helper: "clone",
      },
      elements: draggableItems,
    });

    const droppableItems = ref.current.querySelectorAll(".droppable-element");
    createDroppables({
      props: {
        tolerance: "intersect",
        drop: function (event, ui) {
          let draggedElem = ui.helper[0].getAttribute("data-source");
          if (draggedElem) {
            if (
              visited[event.target.getAttribute("data-accept")] &&
              visited[event.target.getAttribute("data-accept")].includes(
                draggedElem
              )
            ) {
              return false;
            } else {
              onDrag({
                [event.target.getAttribute("data-accept")]: [draggedElem],
              });
              countRef.current = countRef.current + 1;
              $(ui.draggable).removeClass("element-dragging");
            }
            // $(event.target).droppable("disable");
          }
        },
      },
      elements: droppableItems,
    });
  };

  return (
    <div ref={ref} className="screen2wrapper">
      <div className={"instructor"}>
        <h2 id="heading" className="heading">
          {instructionText[0]}
          <br />
          {instructionText[1]}
        </h2>
      </div>
      <div className="draggable-container">
        {screenData.drag.map((c, index) => {
          return (
            <Draggable
              key={index}
              id={c.id}
              name={c.name + " " + c.dragLabel}
              text={c.name}
              onDragClick={onDragClick}
              disabled={correctAttempt}
              isPopupActive={isPopupActive}
            ></Draggable>
          );
        })}
      </div>
      <AccessibleList
        onClick={onListClick}
        closeList={onListClose}
        opened={accessibleList}
        list={aList}
      ></AccessibleList>
      <Dropbox
        data={screenData.drop}
        dropdElements={visited}
        showDrop={showDrop}
        ariaHidden={accessibleList}
      ></Dropbox>
      <Submit
        text={buttonLabels.submitAnswer}
        onClick={onSubmitAnswer}
        disabled={Object.keys(visited).length != 2 || correctAttempt}
        isPopupActive={isPopupActive}
      />
      {correctAttempt ? (
        <Next
          classes="toast-secondary-button positive"
          text={buttonLabels.finish}
          onClick={onNextClick}
          isPopupActive={isPopupActive}
        />
      ) : null}
    </div>
  );
};
