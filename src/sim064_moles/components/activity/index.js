import React, { useEffect, useState } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import InfoBox from "../../containers/InfoBox";
import Header from "../../containers/HeaderContainer";

import SuccessToast from "../../containers/ToastContainerSuccess";
import PopupContainer from "../../containers/PopUpContainer";
import ResetContainer from "../../containers/ResetContainer";
import FailureToast from "../../containers/ToastContainerFailure";
import CompletionContainer from "../../containers/CompletionContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";
import CompleteArea from "../../containers/CompleteAreaContainer";

export default (props) => {
  const {
    data,
    onInit,
    toastMsg,
    isPopupActive,
    showToastMessage,
    selectedDraggable,

    answerAttempt,
    wrongAnswer,
    setStatic,
    answerSubmitted,
    correctAttempt,
    updateToastMsg,
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
        {updateToastMsg == "success" ? (
          <SuccessToast />
        ) : updateToastMsg == "" ? null : (
          <FailureToast />
        )}
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {data.activityHeading}
        </h1>

        <View ariahidden={isPopupActive}>
          <CompleteArea />
        </View>

        <PopupContainer>
          <Popup popupid={1}>
            <StartInformationBox>
              <p>{data.instructionBoxContent}</p>
            </StartInformationBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p>{data.infoBoxContent}</p>
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
        </PopupContainer>
      </div>
    </div>
  );
};
