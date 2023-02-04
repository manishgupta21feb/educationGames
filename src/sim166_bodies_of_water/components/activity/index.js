import React, { useEffect, useRef } from "react";
import Header from "../../containers/HeaderContainer";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";
import InfoBox from "../../containers/InfoBox";
import HotspotContainer from "../../containers/HotspotContainer";
import Bottom from "../../containers/BottomAreaContainer";
import ResetContainer from "../../containers/ResetContainer";
import TransitionContainer from "../../containers/TransitionContainer";
import CompletionContainer from "../../containers/CompletionContainer";
import ScreenTwo from "../../containers/ScreenTwoContainer";
import SuccessToast from "../../containers/SuccessToast";
import FailureToast from "../../containers/IncorrectToastContainer";
import PartiallyIncorrectToast from "../../containers/PartiallyIncorrectToast";

const activity = (props) => {
  const {
    onInit,
    isPopupActive,
    data,
    screenNumber,
    toastMsg,
    showToastMessage,
    introImageAlt,
    headingLevelOne,
  } = props;

  useEffect(() => {
    onInit();
  }, []);

  return (
    <div className="activity-container">
      <Header />

      <div role="main">
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {headingLevelOne}
        </h1>
        {showToastMessage ? (
          toastMsg == "correct" ? (
            <SuccessToast />
          ) : toastMsg == "incorrect" ? (
            <FailureToast />
          ) : (
            <PartiallyIncorrectToast />
          )
        ) : null}
        {toastMsg == "incorrect" && showToastMessage && <FailureToast />}
        {toastMsg == "correct" && showToastMessage && <SuccessToast />}
        {screenNumber == 1 ? (
          <View layout="topbottom" ariahidden={isPopupActive}>
            <HotspotContainer />
            <Bottom />
          </View>
        ) : (
          <View ariahidden={isPopupActive}>
            <ScreenTwo />
          </View>
        )}

        <PopupContainer>
          <Popup popupid={1}>
            <StartInformationBox>
              <p>{data.instructionBoxContent}</p>
              <div className="intro-popup">
                <img className="sr-only sr-image" alt={introImageAlt} />
              </div>
            </StartInformationBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              {screenNumber == 1 ? data.hintContent : data.hintContent2}
            </InfoBox>
          </Popup>
          <Popup popupid={3}>
            <ResetContainer>
              <p>{data.resetMsgContent}</p>
            </ResetContainer>
          </Popup>
          <Popup popupid={4} autoFocus>
            <TransitionContainer />
          </Popup>
          <Popup popupid={5} autoFocus>
            <CompletionContainer />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
