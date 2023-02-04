import React, { useRef, useEffect, useState } from "react";
import EventManager from "../../../app/events/manager";
import { isIOS } from "react-device-detect";
import data from "../../data";
import Wrapper from "../Wrapper";
import Button from "../../../app/components/Button";
import "./draggable.scss";

const Draggable = (props) => {
  const {
    draggableData,
    onDragElement,
    getDroppedItems,
    onEnterKey,
    submitBtnText,
    onAnswerSubmit,
    result,
    nextBtnText,
    onNext,
    getDndScreenFor,
    getSubmitCount,
    isPopupActive
  } = props;

  const draggables = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const indexRef = useRef(null);
  const submitRef = useRef(null);

  const [disabled, setDisabled] = useState([]);
  const [countDropped, setCountDropped] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    draggableInitializer(draggables);
  }, []);

  useEffect(() => {
    const disabled = [...disabled];
    for (let i in getDroppedItems) {
      const item = getDroppedItems[i];
      if (disabled.indexOf(item.source) == -1) {
        disabled.push(item.source);
      }
    }
    const droppedItemsLength = Object.keys(getDroppedItems).length;

    if (droppedItemsLength) {
      setCountDropped((prevState) => prevState + 1);
      if (droppedItemsLength == data.draggables[getDndScreenFor].length) {
        setBtnDisabled(false);
        
        setTimeout(() => {
          submitRef.current.focus();
        })

      }
    }

    setDisabled(disabled);
  }, [getDroppedItems]);


  useEffect(() => {
    if (countDropped > 0) {
      const fetchAllDragElement = document.querySelectorAll(
        ".draggable__box.accessible"
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
        containment: ".main-containment-zone .view-container",
        start: function (evt) {
          const {
            dataset: { source, index, title },
          } = evt.target;
          indexRef.current = index;
          onDragElement({ source, index, title });
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

  const _onEnterKey = (evt) => {
    const {
      dataset: { source, index, title },
    } = evt.target;
    indexRef.current = index;
    onEnterKey({ source, index, title });
  };

  const _onAnswerSubmit = () => {
    onAnswerSubmit();
    setBtnDisabled(true);
  };

  const life = draggableData.map((item, index) => {
    const _disabled = disabled.indexOf(item.source) >= 0;

    return (
      <div id={item.id} key={item.id} className="draggable">
        <button
          disabled={_disabled}
          className="draggable__box accessible"
          style={{ backgroundImage: `url(${item.img})` }}
          data-source={item.source}
          data-index={index}
          data-title={item.label}
          aria-label={`${item.label} ${data.draggableText}`}
          onClick={_onEnterKey}
          aria-hidden={isPopupActive}
          tabIndex={isPopupActive ? -1 : null}
        ></button>
        <div
          disabled={_disabled}
          aria-hidden
          className={`draggable__box non-accessible ${_disabled ? "hide" : ""}`}
          style={{ backgroundImage: `url(${item.img})` }}
          tabIndex="-1"
          data-source={item.source}
          data-index={index}
          data-title={item.label}
          ref={draggables[index]}
          onClick={(e) => {
            isIOS ? _onEnterKey(e) : null;
          }}
        >
        </div>
        <p className="draggable__title">{item.label}</p>
      </div>
    );
  });

  return (
    <Wrapper className="wrapper--wrap gap-between-elem">
      {life}

      <Button
        text={submitBtnText}
        classes="primary"
        onClick={_onAnswerSubmit}
        disabled={btnDisabled ? true : false}
        ref={submitRef}
        isPopupActive={isPopupActive}
      />

      {result ? (
        <Button
          text={nextBtnText}
          classes={`toast-secondary-button positive ${getSubmitCount != data.lives.length ? "right-arrow" : ""} `}
          onClick={onNext}
          isPopupActive={isPopupActive}
          disabled={isPopupActive}
        />
      ) : null}
    </Wrapper>
  );
};

export default Draggable;
