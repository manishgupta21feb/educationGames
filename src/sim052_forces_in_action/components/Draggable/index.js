import React, { useRef, useEffect, useState } from "react";
import EventManager from "../../../app/events/manager";
import { isIOS } from "react-device-detect";

import Wrapper from "../Wrapper";
import Button from "../../../app/components/Button";
import "./draggable.scss";

const Draggable = (props) => {
  const {
    draggableData,
    onEnterKey,
    onAnswerSubmit,
    isPopupActive,
    currentStrength,
    testBtnText,
    dropZoneData,
    draggableText,
  } = props;

  let [globalHidden, setGlobalHidden] = useState(false);
  const draggables = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const submitRef = useRef(null);

  useEffect(() => {
    draggableInitializer(draggables);
  }, []);

  useEffect(() => {
    if (currentStrength.length > 0) {
      const fetchAllDragElement = document.querySelectorAll(
        ".draggable__box.accessible"
      );
      const filteredDragElement = Array.from(fetchAllDragElement).filter(
        (e) => !e.disabled
      );
      if (currentStrength.length >= 3) {
        submitRef.current.focus();
        setGlobalHidden((prevState) => (prevState = true));
      } else {
        if (filteredDragElement.length) {
          filteredDragElement[0].focus();
        }
      }
      //
    }
  }, [currentStrength]);

  const draggableInitializer = (item) => {
    item?.map((draggable) => {
      $(draggable.current).draggable({
        cancel: false,
        helper: "clone",
        containment: ".tugOfWarContainer",
        start: function () {},
        revert: (val) => {
          if (!val) {
            EventManager.broadcast("INCORRECT_DRAG_REVERT");
          }
          return !val;
        },
        stop: function (evt) {},
      });
    });
  };

  const _onEnterKey = (evt) => {
    if (currentStrength.length >= 3) return;
    const {
      dataset: { strength, title },
    } = evt.target;
    let _tempDropZones = [...dropZoneData];
    _tempDropZones[0] = { ...dropZoneData[0], content: parseInt(strength) };
    onEnterKey(_tempDropZones, title);
  };

  const _onAnswerSubmit = () => {
    onAnswerSubmit();
  };
  const life = draggableData.map((item, index) => {
    const _disabled = currentStrength.indexOf(item.content) >= 0;

    return (
      <div id={item.id} key={item.id} className="draggable">
        <p className="draggable__title" aria-hidden="true">
          {item.content}
        </p>
        <button
          disabled={_disabled || globalHidden}
          className="draggable__box accessible"
          style={{ backgroundImage: `url(${item.imgSrc})` }}
          data-source={item.source}
          data-index={index}
          data-title={item.label}
          data-strength={item.content}
          aria-label={`${item.label} ${draggableText.draggableText}`}
          onClick={_onEnterKey}
          aria-hidden={isPopupActive}
          tabIndex={isPopupActive ? -1 : null}
        ></button>
        <div
          disabled={_disabled || globalHidden}
          aria-hidden
          className={`draggable__box non-accessible ${
            _disabled || globalHidden ? "hide" : ""
          } `}
          style={{ backgroundImage: `url(${item.imgSrc})` }}
          tabIndex="-1"
          data-source={item.source}
          data-index={index}
          data-title={item.label}
          data-strength={item.content}
          ref={draggables[index]}
          onClick={(e) => {
            isIOS ? _onEnterKey(e) : null;
          }}
        ></div>
      </div>
    );
  });

  return (
    <Wrapper className="wrapper--wrap gap-between-elem draggable--position">
      {life}

      <Button
        text={testBtnText}
        ariaLable={testBtnText}
        ariaHidden={isPopupActive}
        hideTooltip={false}
        classes="primary"
        onClick={_onAnswerSubmit}
        disabled={currentStrength.length ? false : true}
        ref={submitRef}
        isPopupActive={isPopupActive}
      />
    </Wrapper>
  );
};

export default Draggable;
