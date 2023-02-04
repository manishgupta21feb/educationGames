import React, { useEffect, useState } from "react";
import Header from "../../containers/HeaderContainer";
import InfoBox from "../../containers/InfoBox";
import StartBox from "../../containers/StartBox";
import ResetBox from "../../containers/ResetBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import SuccessToast from "../../containers/SuccessToast";
import IncorrectToast from "../../containers/IncorrectToast";
import TransitionPopup from "../../containers/TransitionPopup";
import FullArea from "../../containers/FullAreaContainer";
import SecondScreen from "../../containers/SecondScreen";
import SchoolView from "../../containers/SchoolViewContainer";
import CompletionPopup from "../../containers/CompletionPopup";

const activity = (props) => {
  const [toastMessage, setToastMessage] = useState(null);

  const {
    introText,
    infoText,
    resetPopupText,
    isPopupActive,
    checkAnswer,
    showToastMessage,
    secondScreen,
    getScreenNumber,
    observationMotive,
  } = props;

  useEffect(() => {
    props.onInit();
  }, []);

  useEffect(() => {
    let toastMessage = null;

    if (showToastMessage) {
      if (checkAnswer) {
        toastMessage = <SuccessToast />;
      } else if (!checkAnswer) {
        toastMessage = <IncorrectToast />;
      }
    }
    setToastMessage(toastMessage);
  }, [showToastMessage]);

  const callScreen = (val) => {
    if (val.screen == 1) {
      return <FullArea />;
    } else if (val.screen == 2) {
      return <div className="secondScreenActivity"><SchoolView /></div>;
    } else if (val.screen == 3) {
      return <SecondScreen />;
    }
  };

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
      <h1 className="sr-only" aria-hidden={isPopupActive}>
        {observationMotive}
      </h1>
        {toastMessage}
        {callScreen(getScreenNumber)}
        <PopupContainer>
          <Popup popupid={1}>
            <StartBox>
              <p>{introText}</p>
            </StartBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p>{infoText}</p>
            </InfoBox>
          </Popup>
          <Popup popupid={3}>
            <ResetBox>
              <p>{resetPopupText}</p>
            </ResetBox>
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
