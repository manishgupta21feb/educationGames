import React, { useEffect, useRef } from "react";
import Header from "../../containers/HeaderContainer";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";
import InfoBox from "../../containers/InfoBox";
import HotspotContainer from "../../containers/HotspotContainer";
import ResetContainer from "../../containers/ResetContainer";
import CompletionContainer from "../../containers/CompletionContainer";
import SuccessToast from "../../containers/SuccessToast";
import FailureToast from "../../containers/IncorrectToastContainer";
import "./style.scss"

const activity = (props) => {
  const {
    onInit,
    isPopupActive,
    data,
    screenNumber,
    toastMsg,
    showToastMessage,
  } = props;
  useEffect(() => {
    onInit();
  }, []);
  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        {toastMsg == "incorrect" && showToastMessage && <FailureToast />}
        {toastMsg == "correct" && showToastMessage && <SuccessToast />}
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {data.activityHeading}
        </h1>
        {screenNumber == 1 ? (
          <View ariahidden={isPopupActive} className="view-container">
            <HotspotContainer />
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
              <div className="intro-image">
                <img
                  className="sr-image sr-only"
                  alt={data.bgAltText}
                ></img>
              </div>
            </StartInformationBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p dangerouslySetInnerHTML={{ __html: data.hintContent }}></p>
            </InfoBox>
          </Popup>
          <Popup popupid={3}>
            <ResetContainer>
              <p>{data.resetMsgContent}</p>
            </ResetContainer>
          </Popup>
          <Popup popupid={4} autoFocus>
            <CompletionContainer />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
