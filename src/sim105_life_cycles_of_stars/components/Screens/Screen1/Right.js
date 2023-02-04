import React, { useEffect, useRef } from "react";
import { isIOS } from "react-device-detect";
import NextScreenButton from "../../../containers/NextScreenButton";

const Right = (props) => {
  const ref = useRef(null);
  const droppedItemsRef = useRef(props.droppedItems);
  const {
    draggables,
    setDraggable,
    droppedItem,
    droppedItems,
    isPopupActive,
    ostInstruction,
    nextScreenButton,
    toggleAccessibleList,
  } = props;

  useEffect(() => {
    if (ref.current) {
      const draggables = ref.current.querySelectorAll(
        ".draggables .draggable .draggable-element"
      );
      $(draggables).draggable({
        helper: "clone",
        containment: ".draggable-item-containment",
        start: (event, ui) => {
          const {
            dataset: { source },
          } = event.target;
          setDraggable(source);
        },
        revert: (dropzone) => {
          if (!dropzone) {
            setDraggable(null);
          }
          return !dropzone;
        },
      });
    }
  }, []);

  useEffect(() => {
    if (droppedItems.length > droppedItemsRef.current.length) {
      if (ref.current) {
        const lastItem = droppedItems[droppedItems.length - 1];
        const element = ref.current.querySelector(
          `.draggable .draggable-element[data-source="${lastItem}"]`
        );
        if (element) {
          $(element).draggable("disable");
        }
      }
    } else if (
      droppedItems.length < droppedItemsRef.current.length &&
      droppedItems.length == 0
    ) {
      const elements = ref.current.querySelectorAll(
        `.draggable .draggable-element`
      );
      for (let elem of elements) {
        if (elem) {
          $(elem).draggable("enable");
        }
      }
    }
    droppedItemsRef.current = droppedItems;
  }, [droppedItems]);

  const onClick = (event) => {
    const {
      dataset: { source },
    } = event.target;
    setDraggable(source);
    toggleAccessibleList(true);
  };

  const _onClick = (event) => {
    if (isIOS) {
      onClick(event);
    }
  };

  return (
    <div ref={ref} className="right-wrapper">
      <p role="heading" aria-level="2"  className="ost-instruction">{ostInstruction}</p>
      <div className={`draggables`}>
        {draggables.map((d) => {
          const inactive = droppedItem || droppedItems.indexOf(d.id) >= 0;
          return (
            <div
              key={`draggable-${d.id}`}
              className={`draggable ${inactive ? "inactive" : ""}`.trim()}
            >
              <button
                onClick={onClick}
                data-source={d.id}
                aria-label={d.alt}
                className="accessible-button"
                disabled={
                  droppedItem ||
                  isPopupActive ||
                  droppedItems.indexOf(d.id) >= 0
                }
              ></button>
              <div
                aria-hidden
                onClick={_onClick}
                data-source={d.id}
                className="draggable-element"
              >
                <div aria-hidden className="circle">
                  {d.circleText}
                </div>
                <p
                  aria-hidden
                  className="text-node"
                  dangerouslySetInnerHTML={{ __html: d.bottomText }}
                />
              </div>
            </div>
          );
        })}
      </div>
      {nextScreenButton ? <NextScreenButton /> : null}
    </div>
  );
};

export default Right;
