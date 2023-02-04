import React, { useEffect } from "react";
import InfoBox from "../../containers/InfoBox";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import Header from "../../containers/Header";

import "./style.scss";
import { Screen } from "../../../app/components/Screens";
import { screenData } from "../../data";
import ActivityScreens from "../Screens";
import ScreensContainer from "../../containers/ScreensContainer";
import IncorrectToast from "../../containers/IncorrectToast";
import SucessToast from "../../containers/SucessToast";
import HintBox from "../../containers/HintBox";
import ResetContainer from "../../containers/ResetContainer";
import CompletionContainer from "../../containers/CompletionContainer";
import PartialIncorrect from "../../containers/PartialIncorrect";
import MainImage from "./MainImage";

const activity = (props) => {
  const {
    onInit,
    initialInfo,
    toastMsg,
    showToastMessage,
    resetPopupText,
    hintText,
    observationMotive,
    isPopupActive
  } = props;

  useEffect(() => {
    onInit();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      {toastMsg == "correct" && showToastMessage && <SucessToast />}
      {toastMsg == "incorrect" && showToastMessage && <IncorrectToast />}
      {toastMsg == "pIncorrect" && showToastMessage && <PartialIncorrect />}
      <div role="main">
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
            <InfoBox>
              <p>{initialInfo.text}</p>
              <MainImage
                altText={initialInfo.altText}
                imageTitle={initialInfo.imageTitle}
                imageTexts={initialInfo.imageTexts}
              />
            </InfoBox>
          </Popup>
          <Popup popupid={2}>
            <ResetContainer>
              <p>{resetPopupText}</p>
            </ResetContainer>
          </Popup>
          <Popup popupid={3}>
            <HintBox>
              <p>{hintText}</p>
            </HintBox>
          </Popup>
          <Popup popupid={4} autoFocus>
            <CompletionContainer></CompletionContainer>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
