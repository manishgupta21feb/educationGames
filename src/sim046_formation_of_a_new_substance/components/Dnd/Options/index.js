import React, { useState, useEffect, useRef } from "react";
import Wrapper from "../../Wrapper/index";
import EventManager from "../../../../app/events/manager";
import { isIOS } from "react-device-detect";

import "./options.scss";

const Options = (props) => {
  const [disabled, setDisabled] = useState([]);
  const [countDropped, setCountDropped] = useState(0);

  const {
    dragDropData: { description, options },
    onDragElement,
    onEnterKey,
    droppedItems,
  } = props;

  const indexRef = useRef(null);

  const draggables = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    draggableInitializer(draggables);
  }, []);

  const _onEnterKey = (evt) => {
    const {
      dataset: { source, index, title },
    } = evt.target;
    indexRef.current = index;
    onEnterKey({ source, title });
  };

  useEffect(() => {
    const disabled = [...disabled];

    for (let i in droppedItems) {
      const item = droppedItems[i];
      if (disabled.indexOf(item.source) == -1) {
        disabled.push(item.source);
      }
    }
    if (Object.keys(droppedItems).length) {
      setCountDropped((prevState) => prevState + 1);
    }
    setDisabled(disabled);
  }, [droppedItems]);

  useEffect(() => {
    if (countDropped > 0) {
      const fetchAllDragElement = document.querySelectorAll(
        ".drag-options__option.accessible"
      );
      const filteredDragElement = Array.from(fetchAllDragElement).filter(
        (e) => !e.disabled
      );
      if (filteredDragElement.length) {
        filteredDragElement[0].focus();
      }
    }
  }, [countDropped]);

  const draggableInitializer = (item) => {
    item?.map((draggable) => {
      $(draggable.current).draggable({
        cancel: false,
        helper: "clone",
        containment: ".activity-container",
        start: function (evt) {
          const {
            dataset: { source, index, title },
          } = evt.target;
          indexRef.current = index;
          onDragElement({ source, title });
        },
        revert: (val) => {
          if (!val) {
            EventManager.broadcast("INCORRECT_DRAG_REVERT");
          }
          return !val;
        },
        stop: function () {},
      });
    });
  };

  const option = options.map((item, index) => {
    const _disabled = disabled.indexOf(item.id) >= 0;
    return (
      <div key={item.id} className="drag-options__option-container">
        <button
          name={item.id}
          disabled={_disabled}
          data-source={item.id}
          data-title={item.title}
          className="drag-options__option accessible"
          aria-label={`${item.title} draggable`}
          onClick={_onEnterKey}
        >
          <span aria-hidden="true" style={{ pointerEvents: "none" }}>
            {item.title}
          </span>
        </button>
        <button
          aria-hidden="true"
          tabIndex="-1"
          data-index={index}
          data-source={item.id}
          data-title={item.title}
          ref={draggables[index]}
          className={`drag-options__option non-accessible ${
            _disabled ? "hide" : ""
          }`}
          name={item.id}
          disabled={_disabled}
          onClick={(e) => {
            isIOS ? _onEnterKey(e) : null;
          }}
        >
          <span aria-hidden="true" style={{ pointerEvents: "none" }}>
            {item.title}
          </span>
        </button>
      </div>
    );
  });

  return (
    <>
      <h1 className="paragraph">{description}</h1>
      <Wrapper className="wrapper--wrap drag-options">{option}</Wrapper>
    </>
  );
};

export default Options;
