import React, { useEffect, useState, useRef } from "react";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import View from "../../../app/components/View";
import Header from "../../containers/HeaderContainer";
import StartInformationBox from "../../containers/StartInformationBox";
import InfoDialogBox from "../../containers/InfoDialogBox";
import SuccessToast from "../../containers/SuccessToast";
import IncorrectToast from "../../containers/IncorrectToast";
import CompletionScreen from "../../containers/CompletionScreen";
import ResetContainer from "../../containers/ResetContainer";
import "./style.scss";
import data from "../../data/index";
import MainActivity from "./MainActivity";

export default (props) => {
  const {
    isPopupActive,
    toastMsg,
    onInCorrectDrop,
    onCorrectDrop,
    StartUpInfoText,
    instructionInfoText,
    completionText,
    resetDialogText,
    elementData,
    updateAttemptData,
    updateAttempt,
    playInstructionText,
    dropElement,
    simulationEnd,
    updateSimulationEnd,
    showToastMessage,
    resetBtnState,
    updateResetBtnState,
    onActivityInit,
    toggleToastMessage,
  } = props;

  const [elementHint, setElementHint] = useState("");
  const [elementArray, setElementArray] = useState([]);

  const CheckForAttempt = useRef(updateAttemptData);
  const isDropped = useRef(false);
  const droppedElement = useRef({});
  const isSimulationEnd = useRef(simulationEnd);
  const resetBtnStateRef = useRef(resetBtnState);

  const isElementHovered = useRef(null);
  const isElementOver = useRef(null);

  const showHint = (val = "") => {
    setElementHint(val);
  };

  useEffect(() => {
    dragInitializer();
    setElementArray(elementData);
  }, [elementArray]);

  useEffect(() => {
    onActivityInit();
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
    //  let answersLeft = [];
    $(".wrapper")
      .find(".draggable .option")
      .each(function (i) {
        var $this = $(this);
        var answerValue = $this.data("target");
        var target = $('.droppable .target[data-accept="' + answerValue + '"]');

        $this.draggable({
          revert: function () {
            if ($(this).hasClass("drag-revert")) {
              $(this).removeClass("drag-revert");
              return true;
            }
          },
          cancel: false,
          containment: ".wrapper",
          helper: "clone",
          start: function (event, ui) {
            let accept = this.getAttribute("data-target");
            isDropped.current = false;
            toggleToastMessage(false);
            setTimeout(() => {
              showHint(accept); // Assign value to element hint component
            });
            $(this).addClass("element-dragging");

            if (resetBtnStateRef.current) {
              updateResetBtnState(false);
            }
          },
          stop: function (event, ui) {
            showHint(); // Reset Value
            $(this).removeClass("element-dragging");
            if (isDropped.current) {
              onCorrectDrop(answerValue);
              isElementOver.current = false;
            } else if (isElementOver.current) {
              onInCorrectDrop(answerValue);
              isElementOver.current = false;
            } else {
              EventManager.broadcast("INCORRECT_DRAG_REVERT");
            }
          },
        });

        if (target.length > 0) {
          let dropAccept = target[0].getAttribute("data-accept");
          target.droppable({
            tolerance: "intersect",
            drop: function (event, ui) {
              let draggedElem = ui.helper[0].getAttribute("data-target");
              isElementHovered.current.classList.remove("setBlueHoverColor");
              if (draggedElem === dropAccept) {
                isDropped.current = true;
                updateAttempt(answerValue);
                $this.draggable("destroy");
                target.droppable("destroy");
                return true;
              } else {
                return $(ui.draggable).addClass("drag-revert");
              }
            },
            over: function (event, ui) {
              const overElement = event.target.getAttribute("data-accept");
              const currentOverElement = data.elementData.find((dataItem) => {
                return dataItem.elementName === overElement;
              });
              isElementHovered.current = document.querySelector(
                `.${currentOverElement.ptCellClass}`
              );
              isElementHovered.current.classList.add("setBlueHoverColor");
              isElementOver.current = true;
            },
            out: function (event, ui) {
              isElementOver.current = false;
              data.elementData.forEach((value) => {
                document
                  .querySelector(`.${value.ptCellClass}`)
                  .classList.remove("setBlueHoverColor");
              });
            },
          });
        }
      });
  };

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        {toastMsg == "correct" && showToastMessage && <SuccessToast />}
        {toastMsg == "incorrect" && showToastMessage && <IncorrectToast />}
        <View ariahidden={isPopupActive}>
          <MainActivity
            data={data}
            showHint={showHint}
            elementHint={elementHint}
            elementArray={elementArray}
            isPopupActive={isPopupActive}
            droppedElement={droppedElement}
            playInstructionText={playInstructionText}
          />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <StartInformationBox>
              {StartUpInfoText.map((s, i) => (
                <p key={`start-up${i}`} className="start-info">
                  {s}
                </p>
              ))}
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
            </InfoDialogBox>
          </Popup>
          <Popup popupid={6} autoFocus>
            <CompletionScreen />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
