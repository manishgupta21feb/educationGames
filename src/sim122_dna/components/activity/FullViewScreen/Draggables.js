import React, { useEffect, useRef } from 'react';
import './style.scss';
import { isIOS } from "react-device-detect";

const Draggables = (props) => {

  const draggableRef = useRef(null);

  const {
    draggableItems,
    selectDraggable,
    selectedDraggable,
    screen4CorrectAnswer,
    droppedItems,
    screen6Draggables,
    screenStatus,
    isPopupActive,
    updateAccessibleList,
    setZIndexStatus
  } = props;

  useEffect(() => {
    setTimeout(() => {
      initializeDraggables();
    }, 500);
  }, []);

  const selectDraggableValues = (id) => {
    if (screenStatus == 4) {
      selectDraggable(draggableItems.find((item) => item.id == id));
    } else if (screenStatus == 6) {
      selectDraggable(screen6Draggables.find((item) => item.id == id));
    }
  }

  const accessibleButtonClick = (e) => {
    const { id } = e.target.dataset;
    updateAccessibleList(true);
    if (screenStatus == 4) {
      selectDraggable(draggableItems.find((item) => item.id == id));
    } else if (screenStatus == 6) {
      selectDraggable(screen6Draggables.find((item) => item.id == id));
    }
  };

  const initializeDraggables = () => {
    if (draggableRef.current) {
      const draggableItems =
        draggableRef.current.querySelectorAll(".draggable-button");
      if (draggableItems) {
        $(draggableItems).draggable({
          helper: "clone",
          containment: ".leftright",
          start: function (event, ui) {
            const { id } = ui.helper[0].dataset;
            selectDraggableValues(id);
            setZIndexStatus(true);
          },
          revert: function (val) {
            selectDraggable(null);
            if (!val) {
              EventManager.broadcast("INCORRECT_DRAG_REVERT");
            }
            setTimeout(() => {
              setZIndexStatus(false);
            }, 500);
            return true;
          },
        });
      }
    }
  };

  useEffect(() => {
    const draggableItems =
      draggableRef.current.querySelectorAll(".accessible-button");
    draggableItems[0].focus();
  }, [selectedDraggable]);

  return (
    <div className="draggables-wrapper" ref={draggableRef}>
      {
        (screenStatus == 4) &&
        <>
          {
            draggableItems.map((item, i) => {

              const selectionButton = selectedDraggable && selectedDraggable.id === item.id;

              const classes = `${selectionButton ? 'selected-button' : ''}`;

              return (
                <div className="option-container" key={i}>
                  <div className="draggables">
                    <button
                      data-id={item.id}
                      disabled={`${(screen4CorrectAnswer || droppedItems.length == 7) ? 'disabled' : ''}`}
                      id={`draggable${item.srNo}`}
                      onClick={accessibleButtonClick}
                      aria-label={item.ariaLabel}
                      className={`accessible-button ${classes}`}
                    >
                      <span className="icon" aria-hidden="true"></span>
                      <span className="text" aria-hidden="true">{item.text}</span>
                    </button>
                    <div
                      id={item.srNo}
                      data-id={item.id}
                      className={`draggable-button ${(screen4CorrectAnswer || droppedItems.length == 7) ? 'disabled' : ''} ${item.id} ${classes}`}
                      aria-hidden={true}
                      onClick={
                        isIOS
                          ? (e) => {
                            accessibleButtonClick(e);
                          }
                          : null
                      }
                    >
                      <span className="icon" aria-hidden="true"></span>
                      <span className="text" aria-hidden="true">{item.text}</span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </>
      }
      {
        (screenStatus == 6) &&
        <>
          {
            screen6Draggables.map((item, i) => {

              const selectionButton = selectedDraggable && selectedDraggable.id === item.id;

              const classes = `${selectionButton ? 'selected-button' : ''}`;

              return (
                <div className="option-container" key={i}>
                  <div className="draggables">
                    <button
                      data-id={item.id}
                      id={`draggable${item.srNo}`}
                      onClick={accessibleButtonClick}
                      aria-label={item.ariaLabel}
                      className={`accessible-button screen6-accessible-button ${classes}`}
                    >
                      <span className="text" aria-hidden="true">{item.text}</span>
                    </button>
                    <div
                      id={item.srNo}
                      data-id={item.id}
                      className={`draggable-button screen6-draggable-button ${item.id} ${classes}`}
                      aria-hidden={true}
                      onClick={
                        isIOS
                          ? (e) => {
                            accessibleButtonClick(e);
                          }
                          : null
                      }
                    >
                      <span className="text" aria-hidden="true">{item.text}</span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </>
      }
    </div>
  )
}

export default Draggables;