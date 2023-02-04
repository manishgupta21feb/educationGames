import React, { useRef, useEffect } from "react";
import { isIOS } from "react-device-detect";

const DragBox = (props) => {
  const { isPopupActive, element, selectDraggableFull,dragBtnText } = props;
  const draggableRef = useRef(null);

  useEffect(() => {
    draggable();
  }, [element]);

  const draggable = () => {
    $(draggableRef.current)?.draggable({
      cancel: false,
      helper: "clone",
      cursor: "grabbing",
      containment: ".layout_inside",
      revert: (val) => {
        if (!val) {
          selectDraggableFull(null);
          EventManager.broadcast("INCORRECT_DRAG_REVERT");
        }
        return !val;
      },
      start: (event, ui) => {
        const dataset = {
          value: event.currentTarget.dataset.value,
          target: event.currentTarget.dataset.target,
        };
        selectDraggableFull({...dataset});
      },
    });
  };
  const selectDraggable = (event) => {
    const dataset = {
      value: event.currentTarget.dataset.value,
      target: event.currentTarget.dataset.target,
    };
    props.updateAccessibleList(true);
    selectDraggableFull({...dataset});
  };
  useEffect(() => {
    if (draggableRef) {
      const isDisable = element.isDisable ? "disable" : "enable";
      $(draggableRef.current).draggable(isDisable);
    }
  }, [element.isDisable]);

  return (
    <div className="drag-box">
      <button
        tabIndex={isPopupActive ? -1 : 0}
        data-target={element.accept}
        data-value={element.name}
        className={`option accessible-button`}
        aria-label={`${element.name} ${dragBtnText}`}
        onClick={(event) => selectDraggable(event)}
        disabled={element.isDisable ? true : false}

      >
        <span dangerouslySetInnerHTML={{ __html: element.name }}></span>
      </button>
      <button
        ref={draggableRef}
        className={element.isDisable ? `option element-dragged ` : `option `}
        tabIndex="-1"
        aria-hidden="true"
        data-target={element.accept}
        data-value={element.name}
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
