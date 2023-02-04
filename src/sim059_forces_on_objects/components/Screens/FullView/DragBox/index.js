import React, { useRef, useEffect } from "react";
import { isIOS } from "react-device-detect";
import EventManager from "../../../../../app/events/manager";

const DragBox = (props) => {
  const ref = useRef(null);
  const { element, selectDraggableFull, isPopupActive } = props;

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
      },
    });
  };

  const selectDraggable = (evt) => {
    const {
      dataset: { target },
    } = evt.currentTarget;
    props.updateAccessibleList(true);
    selectDraggableFull(target);
  };

  useEffect(() => {
    if (draggableRef) {
      const isDisable = element.isDisable ? "disable" : "enable";
      $(draggableRef.current).draggable(isDisable);
    }
  }, [element.isDisable]);

  return (
    <div ref={ref} className="drag-box">
      <button
        ref={clickableRef}
        tabIndex={isPopupActive ? -1 : 0}
        data-target={element.name}
        className={`option accessible-button`}
        aria-label={`${element.name} draggable`}
        onClick={(event) => selectDraggable(event)}
        // aria-hidden={element.isDisable ? true : false}
        disabled={element.isDisable ? true : false}
      >
        <span dangerouslySetInnerHTML={{ __html: element.name }}></span>
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
        disabled={element.isDisable ? true : false}
      >
        <span dangerouslySetInnerHTML={{ __html: element.name }}></span>
      </button>
    </div>
  );
};

export default DragBox;
