import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Draggable from "../../containers/DraggableContainer";
import Droppable from "../../containers/DroppableContainer";
import PeriodicTableContainer from "../../containers/PeriodicTableContainer";
import ElementHint from "./ElementHint";
import ElementAnimations from "./ElementAnimations";
import MCQAreaContainer from "../../containers/MCQAreaContainer";
import NextButtonConatiner from "../../containers/NextButtonConatiner";
import PeriodicTable from "../../../app/components/PeriodicTable";

function MainActivity(props) {
  const {
    showHint,
    elementArray,
    elementHint,
    data,
    playInstructionText,
    droppedElement,
    selectedQuestion,
    toastMsg,
    correctAnswer,
    updateDropItems,
    animatedElements,
    droppedItems,
  } = props;
  const ref = useRef(null);
  const [currentDraggables, setCurrentDraggables] = useState({});

  useEffect(() => {
    if (droppedItems.filter((el) => !!el).length == 6) {
      const submitButton = ref.current.querySelector(".submit-button .primary");
      if (submitButton) {
        submitButton.focus();
      }
    }
  }, [droppedItems]);

  return (
    <div className="wrapper" ref={ref}>
      <MCQAreaContainer>
        <>
          {correctAnswer ? (
            <>
              <Droppable
                currentDraggables={currentDraggables}
                setCurrentDraggables={setCurrentDraggables}
              />
              {/* <div className="arrow-horizontal"></div> */}
              {selectedQuestion > 1 ? (
                <>
                  <div className="answer-screen-animation" aria-hidden>
                    <div className="cesium">Cs</div>
                    <div className="calcium">Ca</div>
                    <div className="sodium">Na</div>
                    <div className="silver">Ag</div>
                    <div className="bromine">Br</div>
                    <div className="flourine">F</div>
                  </div>
                  <div style={{ position: "relative" }}>
                    <img
                      className="sr-only sr-image"
                      style={{
                        top: "28px",
                        width: "81%",
                        left: "66px",
                        height: "86%",
                      }}
                      alt={data.tableAltText}
                    />
                    <PeriodicTable
                      periodicTableColor={
                        "colorByCategory ionization-energy-highlighter"
                      }
                      ariahidden
                    />
                  </div>
                </>
              ) : (
                <ElementAnimations animatedElements={animatedElements} />
              )}
            </>
          ) : (
            <>
              <div className="instructor">
                {data.questionData
                  .filter((e) => e.id == selectedQuestion)
                  .map((q) => {
                    return <p key={q.id}>{q.paragraph1}</p>;
                  })}
                <p>{playInstructionText}</p>
              </div>
              <Draggable
                showHint={showHint}
                elementArray={elementArray}
                droppedElement={droppedElement}
                currentDraggables={currentDraggables}
                setCurrentDraggables={setCurrentDraggables}
                updateDropItems={updateDropItems}
              />
              <Droppable
                urrentDraggables={currentDraggables}
                setCurrentDraggables={setCurrentDraggables}
                updateDropItems={updateDropItems}
              />
            </>
          )}
        </>
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
  playInstructionText: PropTypes.string.isRequired,
  droppedElement: PropTypes.object.isRequired,
};

export default MainActivity;
