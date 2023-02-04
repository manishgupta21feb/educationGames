import { isIOS } from "react-device-detect";
import React, { useEffect, useRef } from "react";
import Button from "../../../../../app/components/Button";
import "./style.scss";

const Draggables = ({
  items,
  index,
  isPopupActive,
  setFocusOnList,
  updateResetBtn,
  selectDraggable,
  focusOnDragItem,
  lastFocussedDrag,
  selectedDroppable,
  updateAccessibleList,
}) => {
  const draggableRef = useRef(null);
  const clickableRef = useRef(null);
  const isSelectedDroppable = Object.keys(selectedDroppable).length == 0;

  useEffect(() => {
    $(draggableRef.current).draggable({
      revert: true,
      cancel: false,
      cursor: "grab",
      helper: "clone",
      containment: ".droppable-setup",
      start: (event, ui) => {
        $(ui.helper).addClass("clone-element");
        selectDraggable(items);
      },
    });
  }, [items]);

  const selectDroppable = () => {
    updateAccessibleList(true);
    selectDraggable(items);
    lastFocussedDrag(index);
    updateResetBtn();
    setFocusOnList(0);
  };
  useEffect(() => {
    if (index === focusOnDragItem) {
      clickableRef.current.focus();
    }
  }, [focusOnDragItem]);

  return (
    <>
      <Button
        classes={`draggable option-${index}`}
        label={items.element}
        ariaLable={items.altText}
        onClick={() => selectDroppable()}
        ref={clickableRef}
        isPopupActive={isPopupActive ? "-1" : null}
        onFocus={() => {
          if (isSelectedDroppable) {
            setFocusOnList(-1);
          }
        }}
      ></Button>
      <Button
        classes={`highlighter drag-${index} icon-only ${items.classes}`}
        ref={draggableRef}
        isPopUpOpen="-1"
        ariaHidden="true"
        onClick={isIOS ? () => selectDroppable() : null}
      />
      <p
        className={`labels label-${index} `}
        dangerouslySetInnerHTML={{ __html: items.element }}
      ></p>
    </>
  );
};

export default Draggables;
