import React, { useEffect, useRef } from "react";

import { Popup } from "../../../app/components/Popup";

import Main from "../Main";
import Header from "../../containers/Header";
import InfoPopup from "../../containers/InfoPopup";
import ResetPopup from "../../containers/ResetPopup";
import PopupContainer from "../../containers/PopUpContainer";
import CompletionPopup from "../../containers/CompletionPopup";
import InstructionPopup from "../../containers/InstructionPopup";
import AnswerFeedbackPopup from "../../containers/AnswerFeedbackPopup";
import SuccessToast from "../../containers/SuccessToast";
import FailureToast from "../../containers/FailureToast";

const activity = (props) => {
  const {
    onInit,
    textContent,
    isPopupActive,
    showToastMessage,
    correctAnswerSubmitted,
  } = props;
  useEffect(() => {
    if (onInit) {
      onInit();
    }
  }, []);
  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        <h1 className="sr-only">{textContent.activityDescription}</h1>
        {showToastMessage ? (
          correctAnswerSubmitted ? (
            <SuccessToast />
          ) : (
            <FailureToast />
          )
        ) : null}
        <Main isPopupActive={isPopupActive} />
        <PopupContainer>
          <Popup popupid={1}>
            <InstructionPopup>
              <p>{textContent.introductionPopupText}</p>
            </InstructionPopup>
          </Popup>
          <Popup popupid={2}>
            <ResetPopup>
              <p>{textContent.resetPopupText}</p>
            </ResetPopup>
          </Popup>
          <Popup popupid={3}>
            <InfoPopup>
              <p>{textContent.infoPopupText}</p>
            </InfoPopup>
          </Popup>
          <Popup popupid={4}>
            <AnswerFeedbackPopup>
              <p
                dangerouslySetInnerHTML={{
                  __html: textContent.answerFeedbackPopupText,
                }}
              ></p>
            </AnswerFeedbackPopup>
          </Popup>
          <Popup popupid={5} autoFocus>
            <CompletionPopup />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
