import React, { useEffect, useRef, useState } from "react";
import {
  createDraggables,
  createDroppables,
  AccessibleList,
} from "../../../app/components/DnD";

import "./style.scss";
import Draggable from "../common/Draggable";
import Dropbox from "./Dropbox";
import Submit from "../common/Submit";
import Next from "../common/Next";
import { renderToString } from "react-dom/server";

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
  } = props;

  const [correctAttempt, setCorrectAttempt] = useState(false);
  const [accessibleList, setAccessibleList] = useState(false);
  const ref = useRef(null);
  const currentTargetRef = useRef(null);
  const accessibleListRef = useRef(accessibleList);
  const aList = [];
  const [dragList, setDragList] = useState(screenData.drag);
  
  useEffect(() => {
    const list = helper(screenData.drag);
    setDragList(list);
  }, []);

  const helper = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  screenData.drop.map((val) => {
    if (Object.keys(visited).includes(val.id)) {
      aList.push({ ...val, hidden: true });
    } else {
      aList.push({ ...val });
    }
  });
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
  }, [accessibleList]);

  const onSubmitAnswer = (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    let correct = false;
    screenData.drag.map((c, index) => {
      if (visited[c.target] === c.id) {
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
    onDrag({ [key]: currentTarget }, currentTarget, id.label);
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
        containment: ".screen1wrapper",
        start: function () {
          $(this).addClass("element-dragging");
        },
        stop: function () {},
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
            onDrag({ [event.target.getAttribute("data-accept")]: draggedElem });
            $(ui.draggable).removeClass("element-dragging");
            $(event.target).droppable("disable");
          }
        },
      },
      elements: droppableItems,
    });
  };

  return (
    <div ref={ref} className="screen1wrapper">
      <div className={"instructor"}>
        <h2 id="heading" className="heading">
          {instructionText[0]}
        </h2>
        <p className="heading">{instructionText[1]}</p>
      </div>
      <div className="draggable-container">
        {dragList.map((c, index) => {
          return (
            <Draggable
              key={index}
              id={c.id}
              name={c.name + " " + c.dragLabel + ", " + c.dragDescription}
              text={c.name}
              onDragClick={onDragClick}
              isPopupActive={isPopupActive}
              disabled={correctAttempt}
              draghtml={renderToString(
                <Element classes={c.id} imgInfoTexts={c.imgInfoTexts} />
              )}
            ></Draggable>
          );
        })}
      </div>
      <div className="s1images">
        <div className="chloroplast">
          <img className="sr-only sr-image" alt={screenData.imagesAlttext[0]} />
        </div>
        <div className="mitochondrion">
          <img className="sr-only sr-image" alt={screenData.imagesAlttext[1]} />
        </div>
      </div>
      <AccessibleList
        onClick={onListClick}
        closeList={onListClose}
        opened={accessibleList}
        list={aList}
      ></AccessibleList>
      <Dropbox
        ariaHidden={accessibleList}
        data={screenData}
        dropdElements={visited}
      ></Dropbox>
      {instructionText ? (
        <Submit
          text={buttonLabels.submitAnswer}
          onClick={onSubmitAnswer}
          disabled={Object.keys(visited).length != 2 || correctAttempt}
          isPopupActive={isPopupActive}
        />
      ) : null}

      {correctAttempt ? (
        <Next
          classes="right-arrow toast-secondary-button positive"
          text={buttonLabels.next}
          onClick={onNextClick}
          isPopupActive={isPopupActive}
        />
      ) : null}
    </div>
  );
};

const Element = (props) => {
  return (
    <div className={props.classes} aria-hidden>
      <div className="labels">
        {props.imgInfoTexts.map((txt, index) => {
          return <span key={txt}>{txt}</span>;
        })}
      </div>
    </div>
  );
};
