import React, { useEffect, useState, useRef } from "react";
import data from "../../data/index";

import { Popup } from "../../../app/components/Popup";
import PeriodicTable from "../../../app/components/PeriodicTable";

import MainActivity from "./MainActivity";
import View from "../../../app/components/View";
import Header from "../../containers/HeaderContainer";
import SuccessToast from "../../containers/SuccessToast";
import InfoDialogBox from "../../containers/InfoDialogBox";
import PopupContainer from "../../containers/PopUpContainer";
import IncorrectToast from "../../containers/IncorrectToast";
import ResetContainer from "../../containers/ResetContainer";
import CompletionScreen from "../../containers/CompletionScreen";
import StartInformationBox from "../../containers/StartInformationBox";
import PartialCorrectToast from "../../containers/PartialCorrectToast";
import PeriodicTableContainer from "../../containers/PeriodicTableContainer";
import "./style.scss";

export default (props) => {
  const {
    isPopupActive,
    togglePopup,
    toastMsg,
    StartUpInfoText,
    instructionInfoText,
    resetDialogText,
    elementData,
    fetchQuestion,
    updateAttemptData,
    playInstructionText,
    dropElement,
    simulationEnd,
    updateSimulationEnd,
    showToastMessage,
    selectedQuestion,
    resetBtnState,
    updateResetBtnState,
    updateDropItems,
    droppedItems,
    correctAnswer,
    animatedElements,
    introPopupImageAlt,
  } = props;

  const [elementHint, setElementHint] = useState("");
  const [elementArray, setElementArray] = useState([]);

  const CheckForAttempt = useRef(updateAttemptData);
  const isDropped = useRef(false);
  const droppedElement = useRef({});
  const isSimulationEnd = useRef(simulationEnd);
  const resetBtnStateRef = useRef(resetBtnState);
  const isElementHovered = useRef(null);
  const droppedItemsRef = useRef([]);

  const showHint = (val = "") => {
    setElementHint(val);
  };

  const toastMsgRef = useRef(toastMsg);
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
    togglePopup(1);
    fetchQuestion();
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
            $(ui.draggable).html(ui.draggable.text()).draggable("disable");
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

  return (
    <>
      <div className="activity-container">
        <Header />
        <div className="view-container" role="main">
          <View ariahidden={isPopupActive}>
            {toastMsg == "correct" && showToastMessage && <SuccessToast />}
            {toastMsg == "incorrect" && showToastMessage && <IncorrectToast />}
            {toastMsg == "partialcorrect" && showToastMessage && (
              <PartialCorrectToast />
            )}
            <MainActivity
              showHint={showHint}
              elementArray={elementArray}
              data={data}
              elementHint={elementHint}
              playInstructionText={playInstructionText}
              droppedElement={droppedElement}
              selectedQuestion={selectedQuestion}
              toastMsg={toastMsg}
              droppedItems={droppedItems}
              correctAnswer={correctAnswer}
              updateDropItems={updateDropItems}
              animatedElements={animatedElements}
            />
          </View>

          <PopupContainer>
            <Popup popupid={1}>
              <StartInformationBox>
                <p>{StartUpInfoText}</p>
                <div role="img" aria-label={introPopupImageAlt}>
                  <div className="info-horizontal-text">
                    {data.infoIncreasingText.map((i) => {
                      return <p key={i.id}>{i.text}</p>;
                    })}
                  </div>
                  <div className="info-horizontal-arrow"></div>
                  <PeriodicTableContainer ariahidden />
                  <div className="info-vertical-arrow"></div>
                  <div className="info-vertical-text">
                    {data.infoDecreasingText.map((i) => {
                      return <p key={i.id}>{i.text}</p>;
                    })}
                  </div>
                </div>
              </StartInformationBox>
            </Popup>
            <Popup popupid={2}>
              <ResetContainer>
                <p>{resetDialogText}</p>
              </ResetContainer>
            </Popup>
            <Popup popupid={5}>
              <InfoDialogBox>
                <p>{instructionInfoText}</p>
                <PeriodicTable />
              </InfoDialogBox>
            </Popup>
            <Popup popupid={6} autoFocus>
              <CompletionScreen />
            </Popup>
          </PopupContainer>
        </div>
      </div>
    </>
  );
};
