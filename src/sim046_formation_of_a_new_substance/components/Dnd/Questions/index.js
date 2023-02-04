import React, { useRef, useEffect, useState } from "react";
import Wrapper from "../../Wrapper";
import Button from "../../../../app/components/Button";
import AccessibleList from "../../../containers/AccessibleList";

import "./questions.scss";
import "./accessible-list.scss";

const Questions = (props) => {
  const ref = useRef(null);
  const submitRef = useRef(null);
  const droppedItemsRef = useRef(props.droppedItems);

  const {
    dragDropData: { questions },
    submitBtnText,
    onDropElement,
    onAnswerSubmit,
    ddBtnActive,
    droppedItems,
    opened,
  } = props;

  const droppables = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    droppableInitializer(droppables);
  }, []);

  useEffect(() => {
    //const lengthOfDroppedElem = Object.keys(droppedItems).length;
    if (!opened && !ddBtnActive) {
      // setTimeout(() => {
      submitRef.current.focus();
      // })
    }
  }, [opened]);

  const _onDropElement = (evt) => {
    onDropElement(evt);
  };

  const _onAnswerSubmit = () => {
    onAnswerSubmit();
  };

  useEffect(() => {
    const prevDroppedElements = Object.keys(droppedItemsRef.current);
    const currentDroppedElements = Object.keys(droppedItems);
    if (prevDroppedElements.length < currentDroppedElements.length) {
      for (let i in droppedItems) {
        const elem = ref.current.querySelector(
          `.dnd-question.${i} .dnd-question__drop`
        );
        if (elem) {
          $(elem).droppable("disable");
        }
      }
    } else {
      const remainingItems = prevDroppedElements.filter(
        (d) => currentDroppedElements.indexOf(d) == -1
      );
      for (let i of remainingItems) {
        const elem = ref.current.querySelector(
          `.dnd-question.${i} .dnd-question__drop`
        );
        if (elem) {
          $(elem).droppable("enable");
        }
      }
    }

    droppedItemsRef.current = droppedItems;
  }, [droppedItems]);

  const droppableInitializer = (droppableArea) => {
    droppableArea?.map((area) => {
      $(area.current).droppable({
        drop: function (evt, ui) {
          const {
            dataset: { accept },
          } = evt.target;
          _onDropElement(accept);
        },
      });
    });
  };

  const question = questions.map((item, index) => {
    return (
      <Wrapper
        key={item.id}
        className={`dnd-question ${item.accept} 
        ${droppedItems[item.accept]?.correct ? "fadded" : ""}
        `}
      >
        <p className="paragraph">
          {`${index + 1}.`} {item.value}
        </p>
        <div
          id={item.id}
          ref={droppables[index]}
          className="dnd-question__drop"
          data-accept={item.accept}
        >
          <span>
            {droppedItems[item.accept] ? droppedItems[item.accept].title : ""}
          </span>
        </div>
      </Wrapper>
    );
  });
  return (
    <div ref={ref}>
      <Wrapper className="wrapper--wrap dnd-questions-area">
        <AccessibleList />
        {question}
      </Wrapper>
      <div className="bottom-buttons">
        <Button
          text={submitBtnText}
          classes="primary"
          onClick={_onAnswerSubmit}
          disabled={ddBtnActive}
          ref={submitRef}
        />
      </div>
    </div>
  );
};

export default Questions;
