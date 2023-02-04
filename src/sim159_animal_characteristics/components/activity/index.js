import React, { useEffect } from "react";

import TopBottom from "../TopBottom";
import Header from "../../containers/Header";
import InfoPopup from "../../containers/InfoPopup";
import ResetPopup from "../../containers/ResetPopup";
import { Popup } from "../../../app/components/Popup";
import SuccessToast from "../../containers/SuccessToast";
import FailureToast from "../../containers/FailureToast";
import PopupContainer from "../../containers/PopUpContainer";
import TransitionPopup from "../../containers/TransitionPopup";
import CompletionPopup from "../../containers/CompletionPopup";
import IntroductionPopup from "../../containers/IntroductionPopup";

const activity = (props) => {
  const {
    text,
    onInit,
    currentScreen,
    isPopupActive,
    showToastMessage,
    questionAnswered,
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
        <div className="hidden-images" aria-hidden>
          {[...Array(12).fill(1)].map((a, i) => (
            <div key={`hidden-image${i}`} className={`image${i + 1}`}></div>
          ))}
        </div>
        {showToastMessage ? (
          questionAnswered ? (
            <SuccessToast />
          ) : (
            <FailureToast />
          )
        ) : null}
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {text.activityDescription}
        </h1>
        <TopBottom isPopupActive={isPopupActive} />
        <PopupContainer>
          <Popup popupid={1}>
            <IntroductionPopup>
              <p>{text.introductionPopupText}</p>
              <div className="introduction-popup-images">
                <div className="image1">
                  <img
                    className="sr-only sr-image"
                    alt={text.introductionPopupImage1Alt}
                  />
                </div>
                <div className="image2">
                  <img
                    className="sr-only sr-image"
                    alt={text.introductionPopupImage2Alt}
                  />
                </div>
              </div>
            </IntroductionPopup>
          </Popup>
          <Popup popupid={2}>
            <ResetPopup>
              <p>{text.resetPopupText}</p>
            </ResetPopup>
          </Popup>
          <Popup popupid={3}>
            <InfoPopup>
              <p>{text.infoPopupText[`screen${currentScreen + 1}`]}</p>
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
