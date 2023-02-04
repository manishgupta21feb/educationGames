import React, { useEffect, useState } from "react";

import Header from "../../containers/Header";
import InfoPopup from "../../containers/InfoPopup";
import { Popup } from "../../../app/components/Popup";
import ResetDialog from "../../containers/ResetDialog";
import FailureToast from "../../containers/FailureToast";
import SuccessToast from "../../containers/SuccessToast";
import PartialToast from "../../containers/PartialToast";
import ActivityArea from "../../containers/ActivityArea";
import PopupContainer from "../../containers/PopUpContainer";
import CompletionPopup from "../../containers/CompletionPopup";
import IntroductionDialog from "../../containers/IntroductionDialog";

const activity = (props) => {
  const [toast, setToast] = useState(null);
  const {
    onInit,
    infoPopupText,
    isPopupActive,
    resetPopupText,
    questionAnswered,
    showToastMessage,
    activityDescription,
    introductionPopupText,
    introductionPopupImageAlt,
  } = props;

  useEffect(() => {
    if (onInit) {
      onInit();
    }
  }, []);

  useEffect(() => {
    let toast = null;
    if (showToastMessage) {
      switch (questionAnswered) {
        case "answered":
          toast = <SuccessToast />;
          break;
        case "partialincorrect":
          toast = <PartialToast />;
          break;
        case "allincorrect":
          toast = <FailureToast />;
          break;
        default:
          toast = null;
      }
    }
    setToast(toast);
  }, [showToastMessage]);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        {/* {showToastMessage ? (
          questionAnswered ? (
            <SuccessToast />
          ) : (
            <FailureToast />
          )
        ) : null} */}
        {toast}
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {activityDescription}
        </h1>
        <ActivityArea />
        <PopupContainer>
          <Popup popupid={1}>
            <IntroductionDialog>
              <p>{introductionPopupText}</p>
              <div className="popup-image">
                <div
                  role="img"
                  className="sr-only sr-image"
                  aria-label={introductionPopupImageAlt}
                />
              </div>
            </IntroductionDialog>
          </Popup>
          <Popup popupid={2}>
            <ResetDialog>
              <p>{resetPopupText}</p>
            </ResetDialog>
          </Popup>
          <Popup popupid={3}>
            <InfoPopup>
              <p>{infoPopupText}</p>
            </InfoPopup>
          </Popup>
          <Popup popupid={4} autoFocus>
            <CompletionPopup />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
