import React, { useRef, useEffect } from "react";
import {
  isIOS
} from "react-device-detect";
import EventManager from '../../../../../app/events/manager';

const DragBox = (props) => {
  const {
    element,
    questionsList,
    setFocusOnList,
    focusedAnswerId,
    selectDraggableFull,
    stopAudio
  } = props;

  const draggableRef = useRef(null);
  const audioRef = useRef(null);
  const clickableRef = useRef(null);


  useEffect(() => {

    $(draggableRef.current).draggable({
      helper: "clone",
      containment: ".wrapper2",
      cursor: 'grabbing',
      cancel: false,
      //revert: 'revert',
      revert: () => {
        $(draggableRef.current).removeClass("element-dragging");
        if ($(draggableRef.current).hasClass("drag-revert")) {
          $(draggableRef.current).removeClass("drag-revert");
          //return true;
        } else {
          if (audioRef.current) {
            EventManager.broadcast("INCORRECT_DRAG_REVERT");
          }
        }
      },
      start: (event, ui) => {
        audioRef.current = true;
        $(draggableRef.current).addClass("element-dragging");
        stopAudio()

      },
      stop: (event, ui) => {
        audioRef.current = true;
        $(draggableRef.current).removeClass("element-dragging");
      },
    });
  }, [element])

  const selectDraggable = () => {
    // console.log(questionsList.filter((q) => q.isDisable===false))
    const firstEnabledItem = questionsList.find((q) => !q.isDisable);
    selectDraggableFull(element.name)
    if (firstEnabledItem) {
      setFocusOnList('')
      setTimeout(() => {
        //console.log("//focus set frorm here to dropped item", firstEnabledItem.answerId);
        setFocusOnList(firstEnabledItem.answerId)
      }, 0)
    }
  }
  useEffect(() => {
    if (draggableRef) {
      const isDisable = element.isDisable ? 'disable' : 'enable';
      $(draggableRef.current).draggable(isDisable);
    }
  }, [element.isDisable]);


  useEffect(() => {
    // console.log("Focus on drag >>>>>>>>>>>>>>>>", focusedAnswerId);
    if (element.name === focusedAnswerId) {
      clickableRef.current.focus();
    }
  }, [focusedAnswerId])


  return (
    <div className="drag-box">
     {/* the props is {JSON.stringify(audioStatePlay)} */}
      <button
        ref={clickableRef}
        // tabIndex={0}
        data-target={element.name}
        className={`option accessible-button`}
        aria-label={`${element.name} draggable`}
        onClick={() => selectDraggable()}
        aria-hidden={element.isDisable ? true : false}
        disabled={element.isDisable ? true : false}
      >
        <span dangerouslySetInnerHTML={{ __html: element.name }}></span>

      </button>

      <button
        ref={draggableRef}
        className={(element.isDisable) ? `option element-dragged ` : `option `}
        tabIndex="-1"
        aria-hidden="true"
        data-target={element.name}
        onClick={isIOS ? (e) => {
          selectDraggable()
        } : null}
        disabled={element.isDisable ? true : false}
      >
        <span dangerouslySetInnerHTML={{ __html: element.name }}></span>
      </button>



    </div>
  );
};



export default DragBox;
