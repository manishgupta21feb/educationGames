import React, { useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import InfoBox from "../../containers/InfoBox";
import Header from "../../containers/HeaderContainer";
import Left from "../../containers/Droppable";
import Right from "../../containers/Draggable";
import SuccessToast from "../../containers/ToastContainerSuccess";
import PopupContainer from "../../containers/PopUpContainer";
import ResetContainer from "../../containers/ResetContainer";
import FailureToast from "../../containers/ToastContainerFailure";
import CompletionContainer from "../../containers/CompletionContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";
import MCQArea from "../../containers/RightMCQArea";
import LevelOneCompletionContainer from "../../containers/LevelOneCompletionContainer";
export default (props) => {
  const {
    data,
    onInit,
    toastMsg,
    isPopupActive,
    showToastMessage,
    selectedDraggable,
    submitButtonPressed,
    answerAttempt,
    wrongAnswer,
    setStatic,
  } = props;

  useEffect(() => {
    onInit();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div
        role="main"
        className={selectedDraggable && selectedDraggable.id ? "z-index" : ""}
      >
        {submitButtonPressed && showToastMessage ? (
          answerAttempt ? (
            <SuccessToast />
          ) : wrongAnswer ? (
            <FailureToast />
          ) : null
        ) : null}
        <div aria-hidden className="hidden-images image1"></div>
        <div aria-hidden className="hidden-images image2"></div>
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {data.activityHeading}
        </h1>

        {setStatic ? (
          <View layout="leftright" ariahidden={isPopupActive}>
            <Left />
            <Right />
          </View>
        ) : (
          <View ariahidden={isPopupActive}>
            <MCQArea />
          </View>
        )}

        <PopupContainer>
          <Popup popupid={1}>
            <StartInformationBox>
              <p
                dangerouslySetInnerHTML={{ __html: data.instructionBoxContent }}
              ></p>
            </StartInformationBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              {setStatic ? (
                <p>{data.InfoBoxContent}</p>
              ) : (
                <p>{data.InfoBoxContentLevel2}</p>
              )}
            </InfoBox>
          </Popup>
          <Popup popupid={3} autoFocus>
            <CompletionContainer />
          </Popup>
          <Popup popupid={4}>
            <ResetContainer>
              <p>{data.resetMsgContent}</p>
            </ResetContainer>
          </Popup>
          <Popup popupid={5} autoFocus>
            <LevelOneCompletionContainer />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
