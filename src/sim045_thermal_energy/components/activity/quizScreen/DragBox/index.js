import React, { useRef, useEffect } from "react";
import { isIOS } from "react-device-detect";

const DragBox = (props) => {
  const {
    element,
    stopAudio,
    focusedAnswerId,
    selectDraggableFull,
    updateAccessibleList,
    isPopupActive,
  } = props;

  const parentRef = useRef(null);
  const draggableRef = useRef(null);
  const clickableRef = useRef(null);

  useEffect(() => {
    draggable();
  }, [element]);

  const draggable = () => {
    $(draggableRef.current)?.draggable({
      cancel: false,
      helper: "clone",
      cursor: "grabbing",
      containment: ".wrapper2",
      revert: (val) => {
        if (!val) {
          selectDraggableFull(null);
          EventManager.broadcast("INCORRECT_DRAG_REVERT");
        }
        return !val;
      },
      start: (event, ui) => {
        const {
          dataset: { target },
        } = event.target;
        selectDraggableFull(target);
        stopAudio();
      },
    });
    //debugger;
  };

  const selectDraggable = (evt) => {
    const {
      dataset: { target },
    } = evt.target;
    updateAccessibleList(true);
    selectDraggableFull(target);
  };

  useEffect(() => {
    if (draggableRef.current) {
      const isDisable = element.isDisable ? "disable" : "enable";
      $(draggableRef.current).draggable(isDisable);
    }
  }, [element.isDisable]);

  return (
    <div className="drag-box" ref={parentRef}>
      {/* the props is {JSON.stringify(audioStatePlay)} */}
      <button
        ref={clickableRef}
        data-target={element.name}
        className={`option accessible-button`}
        aria-label={`${element.name} ${element.draggableTxt}`}
        onClick={selectDraggable}
        aria-hidden={element.isDisable}
        disabled={element.isDisable || isPopupActive}
      >
        <span
          aria-hidden
          tabIndex="-1"
          style={{ pointerEvents: "none" }}
          dangerouslySetInnerHTML={{ __html: element.name }}
        ></span>
      </button>

      <button
        ref={draggableRef}
        className={element.isDisable ? `option element-dragged ` : `option `}
        tabIndex="-1"
        aria-hidden="true"
        data-target={element.name}
        onClick={
          isIOS
            ? (e) => {
                selectDraggable(e);
              }
            : null
        }
        //  disabled={element.isDisable ? true : false}
      >
        <span
          aria-hidden
          style={{ pointerEvents: "none" }}
          dangerouslySetInnerHTML={{ __html: element.name }}
        ></span>
      </button>
    </div>
  );
};

export default DragBox;
