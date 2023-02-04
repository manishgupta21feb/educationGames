import React, { useRef, useEffect, useState } from "react";
import AccessibleDnDList from "../../../../containers/AccessibleList";
import EventManager from "../../../../../app/events/manager";
import "./style.scss";
import { isIOS } from "react-device-detect";
const Draggable = (props) => {
  const {
    data,
    isPopupActive,
    matchedItems,
    setDraggableValue,
    question,
    updateAccessibleList,
    onDropClick,
    dragDisable,
  } = props;

  const dragRef = useRef();
  const dropRef = useRef(props.matchedItems);

  const dragRefFocus = useRef();
  const [dragCountState, setDragCountState] = useState(false);

  useEffect(() => {
    if (dragRef.current) {
      const draggable = dragRef.current.querySelectorAll(".card");
      $(draggable)
        .draggable({
          helper: "clone",

          containment: ".position-top",

          revert: (dropzone) => {
            if (!dropzone) {
              setDraggableValue(null);
              EventManager.broadcast("INCORRECT_DRAG_REVERT");
            }

            return !dropzone;
          },

          start: (event, ui) => {
            let { dataset } = event.target;

            setDraggableValue({ ...dataset });
          },
        })
        .draggable("enable");
    }
  }, [question]);

  useEffect(() => {
    if (matchedItems.length == 2) {
      const draggableBtn = dragRef.current.querySelectorAll("button");
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 2; j++) {
          if (question.draggable[i].id != matchedItems[j].drag.id) {
            const draggableDis = dragRef.current.querySelector(
              `.card.${question.draggable[i].id}`
            );
            $(draggableDis).draggable("disable");
            draggableBtn[i].disabled = true;
          }
        }
      }
    } else if (dropRef.current.length < matchedItems.length) {
      const item = { ...matchedItems[matchedItems.length - 1] };
      const dragBox = dragRef.current.querySelector(`.card.${item.drag.id}`);
      $(dragBox).draggable("disable");

      const buttons = dragRef.current.querySelectorAll("button");
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
    } else {
      const filterDragItem = dropRef.current.filter((ele) => {
        return (
          matchedItems.findIndex((m) => m.drop.matched == "incorrect") == -1
        );
      });
      for (let item of filterDragItem) {
        if (item.drop.matched && item.drop.matched != "") {
          const dragBox = dragRef.current.querySelector(
            `.card.${item.drag.id}`
          );
          $(dragBox).draggable("enable");
        }
      }
    }
    dropRef.current = matchedItems;
    if (matchedItems.length == 2) {
      setDragCountState(true);
    } else {
      setDragCountState(false);
    }
  }, [matchedItems]);

  const accessibleButtonOption = (e) => {
    updateAccessibleList(true);

    dragRefFocus.current = e.target.dataset.index;

    setDraggableValue({ ...e.target.dataset });
  };

  const onClick = (item) => {
    onDropClick(item);
  };

  useEffect(() => {
    if (dragDisable.length) {
      const draggableDis = dragRef.current.querySelectorAll(".card");
      const draggableBtn = dragRef.current.querySelectorAll("button");

      for (let i = 0; i < 4; i++) {
        matchedItems.map((item) => {
          if (item.drag.id == draggableDis[i].dataset.id) {
            return;
          } else {
            $(draggableDis[i]).draggable("disable");
            draggableBtn[i].disabled = true;
          }
        });
      }
    } else {
      const draggableDis = dragRef.current.querySelectorAll(".card");

      const draggableBtn = dragRef.current.querySelectorAll("button");

      if (matchedItems.length === 1) {
        for (let i = 0; i < 4; i++) {
          matchedItems.map((item) => {
            if (item.drag.id != draggableDis[i].dataset.id) {
              $(draggableDis[i]).draggable("enable");
              draggableBtn[i].disabled = false;
            } else {
              $(draggableDis[i]).draggable("disable");
            }
          });
        }
      } else if (matchedItems.length == 2) {
        for (let i = 0; i < 4; i++) {
          $(draggableDis[i]).draggable("disable");
          draggableBtn[i].disabled = true;
        }
      } else {
        const draggableDisEmpty =
          dragRef.current.querySelectorAll(".ui-draggable");

        const draggableBtnEmpty = dragRef.current.querySelectorAll("button");

        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < draggableBtnEmpty.length; j++) {
            if (
              draggableDisEmpty[i]?.dataset.id ==
              draggableBtnEmpty[j]?.dataset.id
            ) {
              $(draggableDisEmpty[i]).draggable("enable");
              draggableBtnEmpty[j].disabled = false;
            }
          }
        }
      }
    }
  }, [dragDisable]);

  return (
    <div>
      <AccessibleDnDList onClick={onClick} />
      <div className="flex" ref={dragRef}>
        {Object.keys(question).length
          ? question.draggable.map((ele, idx) => {
              const getDropped =
                matchedItems?.findIndex((m) => m.drag.id == ele.id) != -1;

              return (
                <div key={ele.id} className="drag-box">
                  <button
                    type="button"
                    aria-label={ele.ariaName}
                    className={`btn ${ele.id}`.trim()}
                    data-id={ele.id}
                    data-index={idx}
                    data-label={ele.ariaName}
                    data-answer={ele.answerId}
                    data-value={ele.dragValue}
                    disabled={getDropped}
                    onClick={accessibleButtonOption}
                    tabIndex={isPopupActive ? "-1" : null}
                    aria-hidden={isPopupActive}
                  ></button>
                  <div
                    aria-hidden
                    tabIndex="-1"
                    data-id={ele.id}
                    data-index={idx}
                    data-label={ele.ariaName}
                    data-answer={ele.answerId}
                    data-value={ele.dragValue}
                    disabled={getDropped}
                    className={`card ${ele.id}`.trim()}
                    onClick={
                      isIOS && !(getDropped || isPopupActive)
                        ? (e) => accessibleButtonOption(e)
                        : null
                    }
                  >
                    <span
                      key={`p${ele.id}`}
                      className={`card--${ele.id}`}
                      dangerouslySetInnerHTML={{
                        __html: ele.dragValue,
                      }}
                    ></span>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Draggable;
