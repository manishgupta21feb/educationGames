import React, { useEffect, useRef, useState } from "react";
import { AccessibleList } from "../../../app/components/DnD";
import ContinueButton from "../common/ContinueButton";
import Draggable from "./Draggable";
import Droppable from "./Droppable";

const PartTwo = (props) => {
  const {
    isPopupActive,
    text,
    electoSpectrumTitle,
    topText,
    bottomText,
    onNextClick,
    draggables,
    onCorrect,
    onIncorrect,
    buttonLabels,
    arrowAltText,
    altText,
    imageLabel,
    droppedText
  } = props;

  const [draggedElements, setDraggedElements] = useState([]);
  const [accessibleList, setAccessibleList] = useState([]);
  const [a11yListOpen, seta11yListOpen] = useState(false);
  const ref = useRef(null);
  const currentTargetRef = useRef(null);
  const focusRef = useRef(null);

  const onDrag = (value) => {
    setDraggedElements((state) => [...state, value]);
    onCorrect();
  };

  useEffect(() => {
    if (ref.current) {
      const buttons = ref.current.querySelectorAll(".accessible-button");
      for (let button of buttons) {
        if (button.getAttribute("disabled") == null) {
          button.focus();
          break;
        }
      }
    }
    if (focusRef.current) {
      focusRef.current = false;
    }
  }, [draggedElements, focusRef.current]);

  const onListClick = (id) => {
    let draggedElem = currentTargetRef.current.getAttribute("data-value");
    if (draggedElem === id.id) {
      onDrag(id.id);
    } else {
      onIncorrect();
      focusRef.current = true;
    }
    seta11yListOpen(false);
  };

  const onListClose = () => {
    seta11yListOpen(false);
  };

  useEffect(() => {
    const list = draggables.map((drag) => {
      if (draggedElements.includes(drag.id)) {
        return { ...drag, label: drag.dropLabel, hidden: true };
      } else return { ...drag, label: drag.dropLabel };
    });
    setAccessibleList(list.filter((val) => val.id !== "img"));
  }, [draggedElements]);

  const onDragClick = (e) => {
    currentTargetRef.current = e.currentTarget;
    seta11yListOpen(true);
  };

  return (
    <div ref={ref} className="part_one_container">
      <p className="title" dangerouslySetInnerHTML={{ __html: text }}></p>
      <Draggable
        draggables={draggables}
        draggedElements={draggedElements}
        onDragClick={onDragClick}
      ></Draggable>
      <p className="image-title">{electoSpectrumTitle}</p>
      <AccessibleList
        onClick={onListClick}
        closeList={onListClose}
        opened={a11yListOpen}
        list={accessibleList}
      ></AccessibleList>
      <Droppable
        data={draggables}
        onDrag={onDrag}
        onIncorrect={onIncorrect}
        draggedElements={draggedElements}
        topText={topText}
        bottomText={bottomText}
        accessibleListVisible={a11yListOpen}
        arrowAltText={arrowAltText}
        altText={altText}
        imageLabel={imageLabel}
        droppedText={droppedText}
      ></Droppable>
      {draggedElements.length === draggables.length - 1 ? (
        <ContinueButton
          isFocusSend={true}
          text={buttonLabels.next}
          onClick={onNextClick}
          classes={"right-arrow"}
          isPopupActive={isPopupActive}
        ></ContinueButton>
      ) : null}
    </div>
  );
};

export default PartTwo;
