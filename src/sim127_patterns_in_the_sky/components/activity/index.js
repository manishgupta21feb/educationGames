import React, { useEffect } from "react";

import Screen1 from "../Screens/Screen1";
import Screen2 from "../Screens/Screen2";
import Header from "../../containers/Header";
import InfoBox from "../../containers/InfoBox";
import { Popup } from "../../../app/components/Popup";
import ResetDialog from "../../containers/ResetDialog";
import SuccessToast from "../../containers/SuccessToast";
import FailureToast from "../../containers/FailureToast";
import PopupContainer from "../../containers/PopUpContainer";
import CompletionPopup from "../../containers/CompletionPopup";
import TransitionPopup from "../../containers/TransitionPopup";
import IntroductionDialog from "../../containers/IntroductionDialog";

const activity = (props) => {
  const {
    onInit,
    imagesArray,
    activeScreen,
    isPopupActive,
    resetPopupText,
    screen1InfoText,
    screen2InfoText,
    questionAnswered,
    showToastMessage,
    activityObjective,
    introductionPopupText,
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
        <span className="sr-only" aria-hidden style={{ fontStyle: "italic" }}>
          check
        </span>
        {showToastMessage ? (
          questionAnswered ? (
            <SuccessToast />
          ) : (
            <FailureToast />
          )
        ) : null}
        {imagesArray.map((image, index) => (
          <div
            aria-hidden
            key={`hidden-image${index}`}
            className={`hidden-images image${index}`}
          ></div>
        ))}
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {activityObjective}
        </h1>
        {activeScreen == "screen1" ? <Screen1 /> : <Screen2 />}
        <PopupContainer>
          <Popup popupid={1}>
            <IntroductionDialog>
              <p>{introductionPopupText}</p>
            </IntroductionDialog>
          </Popup>
          <Popup popupid={2}>
            <ResetDialog>
              <p>{resetPopupText}</p>
            </ResetDialog>
          </Popup>
          <Popup popupid={3}>
            <InfoBox>
              <p>
                {activeScreen == "screen1" ? screen1InfoText : screen2InfoText}
              </p>
            </InfoBox>
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
