import React, { useEffect, useRef } from "react";
import { isIOS } from "react-device-detect";
import NextScreenButton from "../../../containers/NextScreenButton";

const Right = (props) => {
  const ref = useRef(null);
  const {
    draggable,
    setDraggable,
    correctAnswer,
    isPopupActive,
    ostInstruction,
    toggleAccessibleList,
  } = props;
  const correctAnswerRef = useRef(correctAnswer);

  const createDraggable = (elements) => {
    $(elements).draggable({
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
          EventManager.broadcast("INCORRECT_DRAG_REVERT");
        }
        return !dropzone;
      },
    });
  };

  useEffect(() => {
    if (ref.current) {
      const draggables = ref.current.querySelector(".draggable-element");
      createDraggable(draggables);
    }
  }, [draggable]);

  useEffect(() => {
    if (correctAnswer !== correctAnswerRef.current) {
      if (ref.current) {
        if (correctAnswer) {
          const element = ref.current.querySelector(`.draggable-element`);
          if (element) {
            $(element).draggable("disable");
          }
        }
      }
    }
    correctAnswerRef.current = correctAnswer;
  }, [correctAnswer]);

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
        <div
          key={`draggable-${draggable?.id}`}
          className={`draggable ${correctAnswer ? "inactive" : ""}`.trim()}
        >
          <button
            onClick={onClick}
            data-source={draggable.id}
            aria-label={draggable.alt}
            className="accessible-button"
            disabled={isPopupActive || correctAnswer}
          ></button>
          <div
            aria-hidden
            onClick={_onClick}
            data-source={draggable.id}
            className="draggable-element"
          >
            <div aria-hidden className="circle">
              {draggable.circleText}
            </div>
            <p
              aria-hidden
              className="text-node"
              dangerouslySetInnerHTML={{ __html: draggable?.bottomScreen4TextTwo }}
            />
          </div>
        </div>
      </div>
      <NextScreenButton disabled={isPopupActive || !correctAnswer} />
    </div>
  );
};

export default Right;
