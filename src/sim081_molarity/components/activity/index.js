import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import Main from "../../containers/MainContainer";
import Header from "../../containers/Header";
import Reset from "../../containers/Reset";
import Info from "../../containers/InfoPopup";
import InitialInformationPopup from "../../containers/InitialInformationPopup";
import SuccessToast from "../../containers/SuccessToast";
import IncorrectToast from "../../containers/IncorrectToast";
import CompletionPopup from "../../containers/CompletionPopup";
import PartiallyIncorrectToast from "../../containers/PartiallyIncorrectToast";
const activity = (props) => {
  const {
    resetPopupText,
    initialInformationText,
    showToastMessage,
    correctAttempt,
    data,
    partiallyCorrect,
    isPopupActive,
  } = props;

  useEffect(() => {
    props.onStartActivity();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        <h1 aria-hidden={isPopupActive} className="sr-only">
          {data.pageHeading}
        </h1>
        {showToastMessage ? (
          correctAttempt === "correct" ? (
            <SuccessToast />
          ) : correctAttempt === "incorrect" ? (
            <IncorrectToast />
          ) : (
            <PartiallyIncorrectToast />
          )
        ) : null}
        <Main />
        <PopupContainer>
          <Popup popupid={1}>
            <InitialInformationPopup>
              <p>{initialInformationText.dialogData.start.content}</p>
            </InitialInformationPopup>
          </Popup>
          <Popup popupid={2}>
            <Reset>{resetPopupText}</Reset>
          </Popup>
          <Popup popupid={4}>
            <Info>{initialInformationText.dialogData.info.content}</Info>
          </Popup>
          <Popup popupid={7} autoFocus>
            <CompletionPopup />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
