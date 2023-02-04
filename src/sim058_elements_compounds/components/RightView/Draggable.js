import React, { useRef, useEffect, useState } from "react";
import "./style.scss";
import { isIOS } from "react-device-detect";

import Button from "../../../app/components/Button";
import ButtonNextDnD from "../../containers/ButtonNextDnD";
const RightView = (props) => {
  const {
    setStatic,
    matchedItems,
    setDroppable,
    answerAttempt,
    submitAnswerDnD,
    setDraggableValue,
    submitButtonPressed,
    data,
    updateAccessibleList,
    isPopupActive,
    list,
    setDraggable,
    accessibleListVisible,
  } = props;

  const dragRef = useRef();
  const draggableElement = data.draggables;
  const dropRef = useRef(props.matchedItems);
  const btnRef = useRef();
  const dragRefFocus = useRef();
  const a11yRef = useRef(accessibleListVisible);
  const [dragCountState, setDragCountState] = useState(false);

  useEffect(() => {
    if (dragRef.current) {
      const draggable = dragRef.current.querySelectorAll(".card");

      $(draggable).draggable({
        helper: "clone",
        containment: ".leftright",
        zIndex: 999,
        revert: (dropzone) => {
          setDraggableValue(null);
          EventManager.broadcast("INCORRECT_DRAG_REVERT");
          return !dropzone;
        },

        start: (event, ui) => {
          let { dataset } = event.target;

          setDraggableValue({ ...dataset });
        },
      });
    }
  }, []);

  useEffect(() => {
    if (dropRef.current.length < matchedItems.length) {
      const item = { ...matchedItems[matchedItems.length - 1] };
      const dragBox = dragRef.current.querySelector(`.card.${item.drag.id}`);
      $(dragBox).draggable("disable");

      if (dragRefFocus.current != null) {
        const buttons = dragRef.current.querySelectorAll(".accessible");
        const index = parseInt(dragRefFocus.current);

        let newIndex = null;
        for (let i = index + 1; i < buttons.length; i++) {
          if (buttons[i].getAttribute("disabled") == null) {
            newIndex = buttons[i];
            break;
          }
        }
        if (newIndex == null) {
          for (let i = 0; i < index; i++) {
            if (buttons[i].getAttribute("disabled") == null) {
              newIndex = buttons[i];
              break;
            }
          }
        }

        if (newIndex) {
          newIndex.focus();
        }
        dragRefFocus.current = null;
      }
    } else {
      const filterDragItem = dropRef.current.filter((ele) => {
        return matchedItems.findIndex((m) => m.drag == ele.drag) == -1;
      });
      for (let item of filterDragItem) {
        const dragBox = dragRef.current.querySelector(`.card.${item.drag.id}`);
        $(dragBox).draggable("enable");
      }
    }
    dropRef.current = matchedItems;
    if (matchedItems.length == 8) {
      setDragCountState(true);
    } else {
      setDragCountState(false);
    }
  }, [matchedItems]);

  useEffect(() => {
    const emptyDragFocus = dragRef.current.querySelectorAll(".accessible");
    const indexOld = parseInt(dragRefFocus.current);

    if (emptyDragFocus[indexOld]) {
      emptyDragFocus[indexOld].focus();
    }
  }, [setDraggable]);

  const accessibleButtonOption = (e) => {
    updateAccessibleList(true);

    dragRefFocus.current = e.target.dataset.index;
    setDraggableValue({ ...e.target.dataset });
  };

  useEffect(() => {
    if (dragCountState) {
      const btnFocus = btnRef.current.querySelector(".primary");

      if (
        !(
          !dragCountState ||
          (setStatic && submitButtonPressed && answerAttempt)
        )
      ) {
        btnFocus.focus();
      }
    }
  }, [dragCountState]);

  return (
    <>
      <div className="position">
        <div>
          <p role="heading" aria-level="2" className="right-para">
            {data.rightAreaTextDescription}
          </p>
        </div>
        <div className="flex" ref={dragRef}>
          {draggableElement.map((ele, idx) => {
            const getDropped =
              matchedItems.findIndex((m) => m.drag.id == ele.id) != -1;
            return (
              <div key={ele.id} className="drag-box">
                <button
                  className="accessible"
                  aria-label={ele.ariaLabel}
                  data-index={idx}
                  data-id={ele.id}
                  data-label={ele.title || ele.name}
                  data-image={ele.isImg}
                  data-answer-id={ele.answerId}
                  data-arialabel={ele.ariaLabel}
                  data-text={
                    ele.imgText
                      ? ele.imgText.map((imgT) => {
                          return imgT.textOne;
                        })
                      : null
                  }
                  disabled={getDropped || isPopupActive}
                  onClick={accessibleButtonOption}
                ></button>
                <div
                  aria-hidden
                  tabIndex="-1"
                  data-id={ele.id}
                  data-label={ele.title || ele.name}
                  data-image={ele.isImg}
                  data-answer-id={ele.answerId}
                  data-arialabel={ele.ariaLabel}
                  data-index={idx}
                  onClick={
                    isIOS && !(getDropped || isPopupActive)
                      ? (e) => accessibleButtonOption(e)
                      : null
                  }
                  data-text={
                    ele.imgText
                      ? ele.imgText.map((imgT) => {
                          return imgT.textOne;
                        })
                      : null
                  }
                  className={`nonAccessible card ${ele.id}`}
                >
                  {ele.isImg ? (
                    <div
                      aria-hidden
                      style={{ pointerEvents: "none" }}
                      className={`right-drag-container right-drag-container${ele.id}`}
                    >
                      <p
                        aria-hidden
                        className={`img-title`}
                        dangerouslySetInnerHTML={{
                          __html: ele.title,
                        }}
                      ></p>

                      <div aria-hidden className={`card__img card--${ele.id}`}>
                        {ele.imgText.map((imgTxt) => {
                          return (
                            <p
                              key={imgTxt.textid}
                              className={`imgtext--${imgTxt.textid}`}
                            >
                              {imgTxt.textOne}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <p
                      aria-hidden
                      style={{ pointerEvents: "none" }}
                      className={`card--text`}
                      dangerouslySetInnerHTML={{
                        __html: ele.name,
                      }}
                    ></p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="submit-button" ref={btnRef}>
          <Button
            label={data.buttonLabels.submitAnswer}
            text={data.buttonLabels.submitAnswer}
            classes="primary"
            onClick={(e) => {
              submitAnswerDnD();
            }}
            isPopupActive={isPopupActive}
            disabled={
              !dragCountState ||
              (setStatic && submitButtonPressed && answerAttempt)
            }
          />
        </div>

        {setStatic && submitButtonPressed && answerAttempt ? (
          <ButtonNextDnD />
        ) : null}
      </div>
    </>
  );
};

export default RightView;
