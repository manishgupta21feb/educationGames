import React, { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import PropTypes from "prop-types";
import Draggable from "../../containers/DraggableContainer";
import Droppable from "../../containers/DroppableContainer";
import MCQAreaContainer from "../../containers/MCQAreaContainer";
import NextButtonConatiner from "../../containers/NextButtonConatiner";
import RadioButton from "../../containers/RadioButton";
import Equation from "./Equation/index";
import "./style.scss";

function MainActivity(props) {
  const {
    data,
    selectedQuestion,
    correctAnswer,
    updateDropItems,
    droppedItems,
    selectedRadioQuestion,
    question2,
    elementData,
    updateAttemptData,
    dropElement,
    simulationEnd,
    updateSimulationEnd,
    resetBtnState,
    updateResetBtnState,
  } = props;

  const ref = useRef(null);
  const [currentDraggables, setCurrentDraggables] = useState({});
  const [rbuttons, setRButtons] = useState([]);
  const [setElementHint] = useState("");
  const [elementArray, setElementArray] = useState([]);

  const CheckForAttempt = useRef(updateAttemptData);
  const droppedElement = useRef({});
  const isSimulationEnd = useRef(simulationEnd);
  const resetBtnStateRef = useRef(resetBtnState);
  const isElementHovered = useRef(null);
  const droppedItemsRef = useRef([]);

  const showHint = (val = "") => {
    setElementHint(val);
  };

  useEffect(() => {
    if (
      droppedItemsRef.current.length > 0 &&
      droppedItemsRef.current.every((d) => !!d && d.length > 0) &&
      droppedItems.some((d) => d.length == 0)
    ) {
      setTimeout(() => {
        dragInitializer();
      }, 300);
    }
    if (droppedItems.every((d) => d.length == 0)) {
      setTimeout(() => {
        dragInitializer();
      }, 300);
    }
    droppedItemsRef.current = [...droppedItems];
  }, [droppedItems]);

  useEffect(() => {
    dragInitializer();
    setElementArray(elementData);
  }, [elementArray]);

  useEffect(() => {
    droppedItemsRef.current = [...droppedItems];
  }, []);

  useEffect(() => {
    CheckForAttempt.current = updateAttemptData;
    droppedElement.current = dropElement;
    isSimulationEnd.current = simulationEnd;
    resetBtnStateRef.current = resetBtnState;

    if (simulationEnd) {
      dragInitializer();
      setElementArray([]);
      updateSimulationEnd(false);
    }
  }, [
    updateAttemptData,
    dropElement,
    resetBtnState,
    simulationEnd,
    isElementHovered,
  ]);

  const dragInitializer = () => {
    $(".wrapper")
      .find(".draggable .option")
      .each(function (i) {
        const $this = $(this);
        const target = $(".droppable .target");
        const dataTarget = $this.data("target");
        const dataDropped = $this.data("dropped");
        if (droppedItems.indexOf(dataTarget) == -1) {
          $this.draggable({
            cancel: false,
            containment: ".wrapper",
            helper: "clone",
            start: function (event, ui) {
              $(this).addClass("element-dragging");
              if (resetBtnStateRef.current) {
                updateResetBtnState(false);
              }
            },
            stop: function (event, ui) {
              $(this).removeClass("element-dragging");
            },
          });
          $this.draggable("enable");
        }
        if (dataDropped == false) {
          $this.draggable("enable");
        }
        target.droppable({
          drop: function (event, ui) {
            const index = $(event.target).data("index");
            $(event.target).droppable("disable");
            updateDropItems(ui.draggable.text(), index);
          },
        });
        target.each(function (i) {
          $(this).droppable("enable");
        });
      });
  };

  useEffect(() => {
    if (droppedItems.filter((el) => !!el).length == 6) {
      const submitButton = ref.current.querySelector(".submit-button .primary");
      if (submitButton) {
        submitButton.focus();
      }
    }
  }, [droppedItems]);
  useEffect(() => {
    const buttons =
      question2 &&
      data.radioOptions
        .filter((r) => question2.indexOf(r.id) >= 0)
        .map((a) => ({
          id: a.id,
          label: a.label,
          html: renderToString(
            <Equation
              atomType={a.id}
              showWaveImage
              text={a.text}
              classes={a.class}
            />
          ),
        }))
        .sort(() => 0.5 - Math.random());
    setRButtons(buttons);
  }, [question2]);

  return (
    <div className="wrapper wavelength-wrapper" ref={ref}>
      <MCQAreaContainer>
        {selectedQuestion <= 4 ? (
          <>
            <div className="instructor">
              {data.questionData
                .filter((e) => e.id == selectedQuestion)
                .map((q) => {
                  return <p key={q.id}>{q.paragraph1}</p>;
                })}
            </div>
            <>
              <Draggable
                showHint={showHint}
                elementArray={elementArray}
                droppedElement={droppedElement}
                currentDraggables={currentDraggables}
                setCurrentDraggables={setCurrentDraggables}
                updateDropItems={updateDropItems}
              />
              <Droppable
                currentDraggables={currentDraggables}
                setCurrentDraggables={setCurrentDraggables}
                updateDropItems={updateDropItems}
              />
            </>
          </>
        ) : (
          <>
            <div className="instructor">
              <p>{selectedRadioQuestion.paragraph1}</p>
            </div>
            <RadioButton radiobuttons={rbuttons} />
          </>
        )}
      </MCQAreaContainer>
      {correctAnswer && <NextButtonConatiner />}
    </div>
  );
}

MainActivity.propTypes = {
  showHint: PropTypes.func.isRequired,
  elementArray: PropTypes.array.isRequired,
  elementHint: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  droppedElement: PropTypes.object.isRequired,
};

export default MainActivity;
