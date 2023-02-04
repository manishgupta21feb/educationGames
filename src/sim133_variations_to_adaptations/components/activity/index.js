import React, { useEffect, useState } from "react";
import InfoBox from "../../containers/InfoBox";
import HintBox from "../../containers/HintBox";
import Header from "../../containers/HeaderContainer";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import FirstScreen from "../../containers/FirstScreenContainer";
import SecondScreen from "../../containers/SecondScreenContainer";
import PopupContainer from "../../containers/PopUpContainer";
import SuccessToast from "../../containers/SuccessToast";
import IncorrectToast from "../../containers/IncorrectToast";
import TransitionPopup from "../../containers/LevelOneCompletionContainer";
import ResetPopup from "../../containers/ResetPopup";
import CompletionPopup from "../../containers/CompletionPopup";
import EventManager from "../../../app/events/manager";
import Question from "../../containers/QuestionContainer";
import DialogPopup from "../../containers/DialogContainer";

import "../stylesheet/_main.scss";

const activity = ({
  onInit,
  isPopupActive,
  currentWindow,
  quesState,
  isToastActive,
  data,
  feedBackText,
  screen,
}) => {
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    onInit();
  }, []);

  useEffect(() => {
    let toastMessage = null;
    if (isToastActive) {
      if (quesState) {
        if (screen === "first") {
          toastMessage = <SuccessToast />;
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }
      } else {
        toastMessage = <IncorrectToast />;
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }
    }
    setToastMessage(toastMessage);
  }, [isToastActive]);

  const {
    hint,
    introductoryText,
    learningObjective,
    learningObjective2,
    resetPopupData,
  } = data;
  return (
    <div className="activity-container">
      <Header />

      <div role="main" className="sim133">
        {toastMessage}
        <h1
          aria-hidden={isPopupActive}
          className="sr-only"
          dangerouslySetInnerHTML={
            screen === "first"
              ? { __html: learningObjective }
              : { __html: learningObjective2 }
          }
        ></h1>
        {currentWindow == "launchScreen" ? (
          <View ariahidden={isPopupActive}>
            <FirstScreen />
          </View>
        ) : currentWindow == "locations" ? (
          <View ariahidden={isPopupActive}>
            <Question />
          </View>
        ) : (
          <View ariahidden={isPopupActive} key={currentWindow}>
            <SecondScreen />
          </View>
        )}

        <PopupContainer>
          <Popup popupid={1}>
            <InfoBox>
              <p>{introductoryText}</p>
            </InfoBox>
          </Popup>
          <Popup popupid={2}>
            <HintBox>
              <p>{hint}</p>
            </HintBox>
          </Popup>
          <Popup popupid={3} autoFocus>
            <TransitionPopup />
          </Popup>
          <Popup popupid={4} autoFocus>
            <CompletionPopup />
          </Popup>
          <Popup popupid={5}>
            <ResetPopup>{resetPopupData}</ResetPopup>
          </Popup>
          <Popup popupid={6}>
            <DialogPopup>
              <p dangerouslySetInnerHTML={{ __html: feedBackText }}></p>
            </DialogPopup>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
