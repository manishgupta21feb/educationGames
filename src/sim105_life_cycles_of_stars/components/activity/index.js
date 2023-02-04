import React, { useEffect, useRef } from "react";
import { Popup } from "../../../app/components/Popup";

import Screen1 from "../Screens/Screen1";
import Screen2 from "../Screens/Screen2";
import Screen3 from "../Screens/Screen3";
import Screen4 from "../Screens/Screen4";
import Header from "../../containers/Header";
import InfoPopup from "../../containers/InfoPopup";
import ResetPopup from "../../containers/ResetPopup";
import SuccessToast from "../../containers/SuccessToast";
import FailureToast from "../../containers/FailureToast";
import PopupContainer from "../../containers/PopUpContainer";
import TransitionPopup from "../../containers/TransitionPopup";
import CompletionPopup from "../../containers/CompletionPopup";
import IntroductionPopup from "../../containers/IntroductionPopup";

const activity = (props) => {
  const { onInit, popupText, currentScreen, showToastMessage, correctAnswer,activityHeadingOne,activityHeadingTwo } =
    props;

  useEffect(() => {
    if (onInit) {
      onInit();
    }
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div className="hidden-images">
        <div className="image1"></div>
        <div className="image2"></div>
      </div>
      <div role="main">
      {currentScreen <2 ? (
                 <h1  className="sr-only">
                 {activityHeadingOne}
               </h1>
              ) : (
                <h1  className="sr-only">
                {activityHeadingTwo}
              </h1>
              )}
        {showToastMessage ? (
          correctAnswer ? (
            <SuccessToast />
          ) : (
            <FailureToast />
          )
        ) : null}
        <div className="draggable-item-containment" />
        {currentScreen == 0 ? <Screen1 /> : null}
        {currentScreen == 1 ? <Screen2 /> : null}
        {currentScreen == 2 ? <Screen3 /> : null}
        {currentScreen == 3 ? <Screen4 /> : null}
        <PopupContainer>
          <Popup popupid={1}>
            <IntroductionPopup>
              <p>{popupText.introductionPopupText}</p>
              <div className="introduction-popup-image">
                <img
                  className="sr-only sr-image"
                  alt={popupText.introductionPopupImageAlt}
                />
              </div>
            </IntroductionPopup>
          </Popup>
          <Popup popupid={2}>
            <ResetPopup>{popupText.resetPopupText}</ResetPopup>
          </Popup>
          <Popup popupid={3}>
            <InfoPopup>
              <p>
                {currentScreen <= 1
                  ? popupText.infoPopupTextScreen1
                  : popupText.infoPopupTextScreen2}
              </p>
            </InfoPopup>
          </Popup>
          <Popup popupid={4} autoFocus>
            <TransitionPopup />
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
