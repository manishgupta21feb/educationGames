import React, { useEffect, useRef } from "react";
// import InfoBox from "../../containers/InfoBox";
import Left from "../../containers/Left";
import Right from "../../containers/Right";
import Main from "../../containers/Main";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import Header from "../../containers/Header";
import Reset from "../../containers/Reset";
import Info from "../../containers/InfoPopup";
import InitialInformationPopup from "../../containers/InitialInformationPopup";
import IncorrectToast from "../../containers/IncorrectToast";
import SuccessToast from "../../containers/SuccessToast";
import TransitionPopup from "../../containers/TransitionPopup";
import SecondScreen from "../SecondScreen/index";
import View from "../../../app/components/View";
import CompletionPopup from "../../containers/CompletionPopup";
import PartiallyCorrectPopup from "../../containers/PartiallyIncorrectToast";

const activity = (props) => {
  const {
    isPopupActive,
    onStartActivity,
    showToastMessage,
    submitButtonPressed,
    answerAttempt,
    wrongAnswer,
    data,
    resetPopupText,
    initialInformationText,
    secondScreen,
    partiallyCorrect,
    startPopupAltText,
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
        {submitButtonPressed && showToastMessage ? (
          answerAttempt ? (
            <SuccessToast />
          ) : partiallyCorrect ? (
            <PartiallyCorrectPopup />
          ) : wrongAnswer ? (
            <IncorrectToast />
          ) : null
        ) : null}
        {!secondScreen ? <Main /> : <SecondScreen />}

        <PopupContainer>
          <Popup popupid={1}>
            <InitialInformationPopup>
              <p>{initialInformationText.dialogData.start.content}</p>
              <div className="intro-popup">
                <div className="intro-popup-image">
                  <img className="sr-only sr-image" alt={startPopupAltText} />
                </div>
              </div>
            </InitialInformationPopup>
          </Popup>
          <Popup popupid={4}>
            <Info>
              <p>
                {secondScreen
                  ? initialInformationText.dialogData.infoSecond.content
                  : initialInformationText.dialogData.info.content}
              </p>
            </Info>
          </Popup>
          <Popup popupid={5}>
            <Reset>{resetPopupText}</Reset>
          </Popup>
          <Popup popupid={6} autoFocus>
            <TransitionPopup />
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
