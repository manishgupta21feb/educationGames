import React, { useRef, useEffect, useState } from "react";
import { isIOS } from "react-device-detect";
import EventManager from "../../../app/events/manager";
import "./style.scss";

import ButtonSubmit from "../../containers/SubmitButtonContainer";
import CloseButton from "../../containers/CloseButtonContainer";
import NextButton from "../../containers/NextButtonContainer";

const RightArea = (props) => {
  const {
    data,
    draggables,
    matchedItems,
    isPopupActive,
    setDraggableValue,
    updateAccessibleList,
    onDropClick,
    holdSingleDrag,
    submitButtonState,
    nextButtonState,
    showAlert,
    setDraggable,
  } = props;

  const dragRef = useRef();
  const dragRefFocus = useRef();
  const buttonRef = useRef(null);

  const [getData, setData] = useState(draggables);
  const submitRef = useRef();

  const accessibleButtonOption = (e) => {
    updateAccessibleList(true);
    dragRefFocus.current = e.target.dataset.index;

    setDraggableValue({ ...e.target.dataset });
  };

  useEffect(() => {
    if (dragRef.current) {
      const draggable = dragRef.current.querySelectorAll(".card");

      $(draggable).draggable({
        helper: "clone",
        containment: ".leftright",
        zIndex: 4,
        revert: (dropzone) => {
          if (!dropzone) {
            setDraggableValue("");
            EventManager.broadcast("INCORRECT_DRAG_REVERT");
          }

          return !dropzone;
        },

        start: (event, ui) => {
          let { dataset } = event.target;

          setDraggableValue({ ...dataset });
        },
      });
    }
  }, [holdSingleDrag.length]);

  useEffect(() => {
    if (holdSingleDrag.length) {
      for (let i = 0; i < 5; i++) {
        const draggableDis = dragRef.current.querySelector(
          `.card--${getData[i].id}`
        );

        $(draggableDis).draggable("disable");

        let _getData = [];
        getData.map((gd) => {
          _getData.push({ ...gd, isDisable: true });
        });
        setData(_getData);
      }
    } else if (holdSingleDrag.length == 0 && matchedItems.length) {
      let _getData = [...getData];

      for (let i = 0; i < getData.length; i++) {
        const draggableDis = dragRef.current.querySelector(
          `.card--${getData[i].id}`
        );
        for (let j = 0; j < matchedItems.length; j++) {
          if (draggableDis.dataset.id == matchedItems[j].drag.id) {
            $(draggableDis).draggable("disable");

            break;
          } else {
            $(draggableDis).draggable("enable");
          }
        }
      }
      for (let i = 0; i < matchedItems.length; i++) {
        for (let j = 0; j < 5; j++) {
          if (_getData[j].id == matchedItems[i].drag.id) {
            _getData[j].isDisable = true;
          } else {
            _getData[j].isDisable = false;
          }
        }
      }

      setData(_getData);
    } else {
      const filterDragItem = getData.filter((ele) => {
        return matchedItems.filter((m) => m.drop.id != ele.id);
      });
      let _getData = [];
      for (let item of filterDragItem) {
        if (item.id && item.id != "") {
          const dragBox = dragRef.current.querySelector(`.card--${item.id}`);
          const dragBtn = dragRef.current.querySelector(`button.${item.id}`);
          $(dragBox).draggable("enable");

          getData.map((gd) => {
            if (gd.id == item.id) {
              _getData.push({ ...gd, isDisable: false });
            }
          });
        }
      }
      setData(_getData);
    }
  }, [holdSingleDrag.length, matchedItems.length]);

  useEffect(() => {
    if (holdSingleDrag.length) {
      if (buttonRef && buttonRef.current) {
        const btnFocus = buttonRef.current.querySelector("button");
        btnFocus.focus();
        const scrollTop =
          buttonRef.current.parentElement.querySelector(".hotspot-para");

        if (scrollTop) {
          scrollTop.scrollTo(0, 0);
        }
      }
    }
  }, [holdSingleDrag.length]);

  useEffect(() => {
    if (setDraggable == "") {
      const buttons = dragRef.current.querySelectorAll("button.accessible");
      const indexOld = parseInt(dragRefFocus.current);

      if (buttons[indexOld]) {
        buttons[indexOld].focus();
      }
    }
  }, [setDraggable]);

  useEffect(() => {
    if (!showAlert) {
      const submitButton = submitRef.current.querySelector(
        ".toast-secondary-button"
      );
      if (submitButton) {
        submitButton.focus();
      }
    }
  }, [showAlert]);

  const onClick = (item) => {
    onDropClick(item);
  };
  return (
    <div className="right-area-container" ref={submitRef}>
      <h2>{data.topAreaTextDescription}</h2>

      <div className="flex" ref={dragRef}>
        {getData.map((drag, idx) => {
          const getDropped =
            matchedItems.findIndex((m) => m.drag.id == drag.id) != -1;

          return (
            <div key={drag.id} className="drag-box">
              <button
                className={`accessible `}
                aria-label={drag.dragName}
                data-index={idx}
                data-id={drag.id}
                data-label={drag.label}
                data-answer-id={drag.ansId}
                data-arialabel={drag.dragName}
                onClick={accessibleButtonOption}
                data-para={drag.para}
                tabIndex={isPopupActive ? "-1" : null}
                disabled={drag.isDisable || getDropped || isPopupActive}
              ></button>
              <div
                aria-hidden
                tabIndex="-1"
                key={drag.id}
                data-id={drag.id}
                data-label={drag.label}
                data-answer-id={drag.ansId}
                data-arialabel={drag.dragName}
                data-index={idx}
                data-para={drag.para}
                onClick={
                  isIOS && !(getDropped || drag.isDisable)
                    ? (e) => accessibleButtonOption(e)
                    : null
                }
                className={`nonAccessible card card--${drag.id} `}
              >
                <div
                  className={`${drag.id} ${
                    holdSingleDrag.length &&
                    holdSingleDrag[0].drag.id == drag.id
                      ? "double"
                      : ""
                  } ${drag.isDisable || getDropped ? "disable--div" : ""}`}
                ></div>
                <p dangerouslySetInnerHTML={{ __html: drag.label }}></p>
              </div>
            </div>
          );
        })}
      </div>
      {showAlert && holdSingleDrag.length ? (
        <div
          role="alertdialog"
          aria-labelledby="hot-para"
          className={`hotspot-para`}
          ref={buttonRef}
        >
          <p id="hot-para">{holdSingleDrag[0].drag.para}</p>

          <div>
            <CloseButton
              text={data.buttonLabels.close}
              onClick={onClick}
              classes={"hotspot-btn close"}
              isPopUpOpen={isPopupActive}
              disabled={isPopupActive}
            />
          </div>
        </div>
      ) : null}
      {nextButtonState ? null : <ButtonSubmit />}
      {nextButtonState ? <NextButton disabled={isPopupActive} /> : null}
    </div>
  );
};

export default RightArea;
