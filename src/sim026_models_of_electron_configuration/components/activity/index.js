import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import { Screen } from "../../../app/components/Screens";
import { screenData } from "../../data";
import ActivityScreens from "../Screens";
import HeaderContainer from "../../containers/HeaderContainer";
import ScreensContainer from "../../containers/ScreensContainer";
import StartUpInfoContainer from "../../containers/StartUpInfoContainer";
import ResetContainer from "../../containers/ResetContainer";
import SucessToast from "../../containers/SucessToast";
import IncorrectToast from "../../containers/IncorrectToast";
import TransitionOne from "../../containers/TransitionOne";
import TransitionTwo from "../../containers/TransitionTwo";
import CompletionContainer from "../../containers/CompletionContainer";

const activity = (props) => {
  const {
    startUpInfoText,
    onInit,
    infoText,
    resetPopupText,
    toastMsg,
    showToastMessage,
    observationMotive,
    isPopupActive
  } = props;
  const ref = useRef(null);

  useEffect(() => {
    onInit();
  }, []);

  return (
    <div className="activity-container">
      <HeaderContainer></HeaderContainer>
      {toastMsg == "correct" && showToastMessage && <SucessToast />}
      {toastMsg == "incorrect" && showToastMessage && <IncorrectToast />}
      <div ref={ref} role="main">
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {observationMotive}
        </h1>
        <ScreensContainer>
          {screenData.map(({ component, id }, i) => {
            return (
              <Screen index={id} key={`screen-${id}`}>
                {React.createElement(ActivityScreens[component], {
                  index: id,
                })}
              </Screen>
            );
          })}
        </ScreensContainer>
        <PopupContainer>
          <Popup popupid={1}>
            <StartUpInfoContainer>
              <p>{startUpInfoText}</p>
            </StartUpInfoContainer>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p dangerouslySetInnerHTML={{ __html: infoText }} />
            </InfoBox>
          </Popup>
          <Popup popupid={3}>
            <ResetContainer>
              <p>{resetPopupText}</p>
            </ResetContainer>
          </Popup>
          <Popup popupid={4} autoFocus>
            <TransitionOne></TransitionOne>
          </Popup>
          <Popup popupid={5} autoFocus>
            <TransitionTwo></TransitionTwo>
          </Popup>
          <Popup popupid={6} autoFocus>
            <CompletionContainer></CompletionContainer>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
