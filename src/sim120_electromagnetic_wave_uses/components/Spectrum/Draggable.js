import _ from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { isIOS } from "react-device-detect";
import { createDraggables } from "../../../app/components/DnD";
import { helper } from "../../actions";
import "./_draggable.scss";

export default (props) => {
  const { isPopupActive, draggables, draggedElements, onDragClick } = props;
  const draggableS = useRef(helper.shuffleArray(_.cloneDeep(draggables)));
  const ref = useRef(null);
  const [first, setfirst] = useState("");

  useEffect(() => {
    if (ref.current) {
      setTimeout(() => {
        InitDragDrop(ref);
      }, 300);
    }
  }, []);

  const accessibleButtonOption = (e) => {
    onDragClick(e);
    setfirst(e.target.dataset.detail);
  };

  const InitDragDrop = (ref) => {
    const draggableItems = ref.current.querySelectorAll(
      ".not-accessible-button"
    );

    createDraggables({
      props: {
        cancel: false,
        containment: ".part_one_container",
        start: function (event, ui) {
          setfirst(event.target.dataset.detail);
        },
        revert: (dropzone) => {
          if (!dropzone) {
            setfirst(null);
            EventManager.broadcast("INCORRECT_DRAG_REVERT");
          }
          return !dropzone;
        },
        helper: "clone",
      },
      elements: draggableItems,
    });
  };

  return (
    <>
      <div ref={ref} className="drag-container">
        {draggableS.current.map((element, index) => {
          if (element.id === "img") return null;
          return (
            <div key={element.id} className={`drag-box`}>
              <button
                data-index={index}
                data-value={element.id}
                className={`option accessible-button ${
                  draggedElements.includes(element.id) ? "element-dragged" : ""
                }`}
                aria-label={`${
                  element.name + " : " + element.detail
                } draggable`}
                disabled={draggedElements.includes(element.id) || isPopupActive}
                data-target={element.accept ? element.accept : element.name}
                data-detail={element.detail}
                onClick={(e) => {
                  accessibleButtonOption(e);
                }}
              >
                <p aria-hidden>{element.name}</p>
              </button>
              <div
                className={`option not-accessible-button ${
                  draggedElements.includes(element.id) ? "element-dragged" : ""
                }`}
                aria-label={element.name}
                tabIndex="-1"
                aria-hidden
                data-index={index}
                data-target={element.accept ? element.accept : element.name}
                data-value={element.id}
                data-detail={element.detail}
                onClick={
                  isIOS
                    ? (e) => {
                        accessibleButtonOption(e);
                      }
                    : null
                }
              >
                <p>{element.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div
        aria-hidden={first ? true : null}
        className={`dialog ${first ? "show" : ""}`}
      >
        <p> {first ? first : ""}</p>
      </div>
    </>
  );
};
