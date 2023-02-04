import React, { useEffect, useRef, useState } from "react";
import {
  AccessibleList,
  createDraggables,
  createDroppables,
} from "../../../app/components/DnD";
import Draggable from "../common/Draggable";
import Next from "../common/Next";
import Submit from "../common/Submit";
import Dropbox from "../Screen0Wrapper/Dropbox";
import { renderToString } from "react-dom/server";
import "./style.scss";

export default (props) => {
  const {
    onNextClick,
    instructionText,
    isPopupActive,
    buttonLabels,
    screenData,
    setVisited,
    visited,
    onCorrect,
    onIncorrect,
    onUpdate,
  } = props;

  const [correctAttempt, setCorrectAttempt] = useState(false);
  const [disabledDropsList, setDisabledDropsList] = useState({
    list: [],
  });
  const [accessibleList, setAccessibleList] = useState(false);
  const [isRevert, setIsRevert] = useState(false);
  const [list1Opened, setList1Opened] = useState(false);
  const [list2Opened, setList2Opened] = useState(false);
  const [alist, setAList] = useState({ aList1: [], aList2: [] });
  const currentTargetRef = useRef(null);
  const accessibleListRef = useRef(accessibleList);
  const ref = useRef(null);

  useEffect(() => {
    let aList1 = [];
    let aList2 = [];
    screenData.drop.map((drop) => {
      drop.dropList.map((val, index) => {
        const valid = drop.id + "-" + index;
        const valtext = drop.droppableAltText.replace("-1-", `${index + 1}`);
        if (screenData.hideList[0].includes(val.target[0])) {
          if (visited[`${drop.id}-${index}`]) {
            aList1.push({ ...val, hidden: true, id: valid, text: valtext });
          } else {
            aList1.push({ ...val, id: valid, text: valtext });
          }
        } else {
          if (visited[`${drop.id}-${index}`]) {
            aList2.push({ ...val, hidden: true, id: valid, text: valtext });
          } else {
            aList2.push({ ...val, id: valid, text: valtext });
          }
        }
      });
    });
    setAList({ aList1: aList1, aList2: aList2 });
  }, [visited]);

  useEffect(() => {
    if (!(list1Opened || list2Opened) && accessibleListRef.current) {
      if (ref.current) {
        const button = ref.current.querySelector(
          ".draggable-button button:not(:disabled)"
        );
        if (button) {
          button.focus();
        }
      }
    }
    accessibleListRef.current = list1Opened || list2Opened;
  }, [list1Opened, list2Opened]);

  useEffect(() => {
    if (!Object.keys(visited).length && correctAttempt) {
      setCorrectAttempt(false);
    }
  }, [visited]);

  const onDragClick = (e) => {
    currentTargetRef.current = e.currentTarget;
    const target = currentTargetRef.current.getAttribute("data-source");
    if (screenData.hideList[0].includes(target)) {
      setList1Opened(true);
    } else {
      setList2Opened(true);
    }
  };

  const onListClick = (id) => {
    const key = id.id;
    const currentTarget = currentTargetRef.current.getAttribute("data-source");
    onDrag({ [key]: currentTarget }, currentTarget, id.text);

    setAccessibleList(false);
    setList1Opened(false);
    setList2Opened(false);
    setDisabledDropsList({ list: [] });
  };

  const onListClose = () => {
    setList1Opened(false);
    setList2Opened(false);
    setDisabledDropsList({ list: [] });
  };

  const onDrag = (target, drag, drop) => {
    let temp = [];
    let dragName = "";
    let liveTxt = "";
    if (drag && drop) {
      if (
        screenData.hideList[0].includes(
          currentTargetRef.current.getAttribute("data-source")
        )
      ) {
        temp = screenData.hideList[1];
        dragName = screenData.drag[0].filter((d) => d.id === drag)[0].label
          ? screenData.drag[0].filter((d) => d.id === drag)[0].label
          : screenData.drag[0].filter((d) => d.id === drag)[0].name;
      } else {
        temp = screenData.hideList[0];
        dragName = screenData.drag[1].filter((d) => d.id === drag)[0].label
        ? screenData.drag[1].filter((d) => d.id === drag)[0].label 
        : screenData.drag[1].filter((d) => d.id === drag)[0].name;
      }

      if (dragName) {
        liveTxt = dragName + screenData.dropLiveText + drop;
      }
    }

    if (!temp.includes(drag)) {
      setTimeout(() => {
        setVisited(target, liveTxt);
      }, 200);
    }
  };

  const onSubmitAnswer = (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    let correct = true;
    let updatedVisited = {};
    let temp = {};
    screenData.drop.map((c, index) => {
      temp[c.id] = [];
      c.dropList.map((d, index1) => {
        const result = d.target.indexOf(visited[`${c.id}-${index1}`]);
        if (
          d.target.includes(visited[`${c.id}-${index1}`]) &&
          !temp[c.id].includes(d.target[result])
        ) {
          if (d.target.length > 1) {
            temp[c.id].push(visited[`${c.id}-${index1}`]);
          }
          updatedVisited[`${c.id}-${index1}`] = d.target[result];
        } else {
          correct = false;
        }
      });
    });
    if (correct) {
      onCorrect();
      setCorrectAttempt(true);
    } else {
      onUpdate(updatedVisited);
      onIncorrect(
        Object.keys(updatedVisited).length === 0 ? "incorrect" : "pIncorrect"
      );
      setCorrectAttempt(false);
    }
  };

  useEffect(() => {
    if (ref.current) {
      setTimeout(() => {
        InitDragDrop(ref);
      }, 300);
    }
  }, [disabledDropsList]);

  const InitDragDrop = (ref) => {
    const draggableItems = ref.current.querySelectorAll(".draggable-element");

    createDraggables({
      props: {
        cancel: false,
        containment: ".screen0wrapper",
        start: function () {
          $(this).addClass("element-dragging");
          const target = $(this).data("source");
          currentTargetRef.current = this;
          if (screenData.hideList[0].includes(target)) {
            setDisabledDropsList({ list: screenData.hideList[1] });
          } else {
            setDisabledDropsList({ list: screenData.hideList[0] });
          }
        },
        stop: function () {},
        revert: function () {
          if ($(this).hasClass("element-dragging") || isRevert) {
            $(this).removeClass("element-dragging");
            EventManager.broadcast("INCORRECT_DRAG_REVERT");
            setDisabledDropsList({ list: [] });
            setIsRevert(false);
            return true;
          }
          setDisabledDropsList({ list: [] });
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
          if (draggedElem && !$(event.target).hasClass("disabled")) {
            onDrag({ [event.target.getAttribute("data-accept")]: draggedElem });
            $(ui.draggable).removeClass("element-dragging");
            $(event.target).droppable("disable");
          } else {
            setIsRevert(true);
          }
        },
      },
      elements: droppableItems,
    });
  };

  return (
    <div ref={ref} className="screen0wrapper">
      <div className={"instructor"}>
        <h2 id="heading" className="heading">
          {instructionText}
        </h2>
      </div>
      <div className="draggable-container-0">
        {screenData.drag[0].map((c, index) => {
          return (
            <Draggable
              key={index}
              id={c.id}
              name={`${c.label ? c.label : c.name} ${screenData.dragBtnAlt}`}
              text={c.name}
              onDragClick={onDragClick}
              isPopupActive={isPopupActive}
              draghtml={renderToString(<Element data={c} />)}
              disabled={correctAttempt}
              isSign={`${c.label ? c.label : c.name}`}
            ></Draggable>
          );
        })}
      </div>
      <div className="draggable-container-1">
        {screenData.drag[1].map((c, index) => {
          return (
            <Draggable
              key={index}
              id={c.id}
              text={" "}
              name={`${c.name} ${screenData.dragBtnAlt}`}
              onDragClick={onDragClick}
              isPopupActive={isPopupActive}
              disabled={correctAttempt}
              isSign={c.name}
            ></Draggable>
          );
        })}
      </div>
      <AccessibleList
        classes={"actual"}
        onClick={onListClick}
        closeList={onListClose}
        opened={list1Opened}
        list={alist["aList1"]}
      ></AccessibleList>
      <AccessibleList
        classes={"sign"}
        onClick={onListClick}
        closeList={onListClose}
        opened={list2Opened}
        list={alist["aList2"]}
      ></AccessibleList>
      {screenData.drop.map((drop, index) => {
        return (
          <div key={index} className={`drop-container-${index}`}>
            <h3 className="heading-2">{drop.title}</h3>
            <Dropbox
              dragList={[...screenData.drag[0], ...screenData.drag[1]]}
              data={drop.dropList}
              dropdElements={visited}
              dataAccept={`${drop.id}`}
              dropAlt={drop.droppableAltText}
              dropedAltText={drop.dropedAltText}
              disabledList={disabledDropsList.list}
              ariaHidden={accessibleList}
            ></Dropbox>
          </div>
        );
      })}
      <Submit
        text={buttonLabels.submitAnswer}
        onClick={onSubmitAnswer}
        disabled={Object.keys(visited).length < 18 || correctAttempt}
        isPopupActive={isPopupActive}
      />
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
  const { data } = props;
  return (
    <div className={data.id}>
      {data.imgInfoText ? <span>{data.imgInfoText}</span> : null}
    </div>
  );
};
