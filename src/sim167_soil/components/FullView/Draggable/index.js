import React, { useRef, useEffect, useState } from "react";
import { isIOS } from "react-device-detect";

import Wrapper from "../Wrapper";

import "./draggable.scss";

const Draggable = (props) => {
  const {
    draggableData,
    onEnterKey,
    isPopupActive,
    currentStrength,
    dropZoneData,
    onDragElement,
  } = props;

  const draggables = [useRef(null), useRef(null), useRef(null), useRef(null)];

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
        containment: ".tableDndHolder",
        start: function (evt) {
          const { soil } = evt.target.dataset;
          onDragElement(soil);
        },
        revert: (val) => {
          if (!val) EventManager.broadcast("INCORRECT_DRAG_REVERT");
          return true;
        },
        stop: function (evt) {},
      });
    });
  };

  const _onEnterKey = (evt) => {
    if (currentStrength.length >= 3) return;
    const {
      dataset: { soil },
    } = evt.target;

    onEnterKey(soil);
  };

  const life = draggableData.map((item, index) => {
    const hideObject = item.isDropped;

    return (
      <div id={item.id} key={item.id} className="draggable">
        <button
          disabled={hideObject}
          className={`draggable__boxNonDragable accessible ${
            hideObject ? "hide" : ""
          }`}
          data-source={item.source}
          data-index={index}
          data-title={item.label}
          data-soil={item.content}
          aria-label={`${item.label}`}
          onClick={_onEnterKey}
          aria-hidden={isPopupActive || hideObject}
          tabIndex={isPopupActive ? -1 : null}
        >
          {item.content}
        </button>
        <div
          disabled={hideObject}
          aria-hidden
          className={`draggable__box non-accessible ${
            hideObject ? "hide" : ""
          } `}
          tabIndex="-1"
          data-source={item.source}
          data-index={index}
          data-title={item.label}
          data-soil={item.content}
          ref={draggables[index]}
          onClick={(e) => {
            isIOS ? _onEnterKey(e) : null;
          }}
        >
          {item.content}
        </div>
      </div>
    );
  });

  return (
    <Wrapper className="wrapper--wrap gap-between-elem draggable--position">
      {life}
    </Wrapper>
  );
};

export default Draggable;
