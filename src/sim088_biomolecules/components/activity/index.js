import React, { useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import InfoBox from "../../containers/InfoBox";
import Header from "../../containers/HeaderContainer";
import CorrectToast from "../../containers/CorrectToast";
import PopupContainer from "../../containers/PopUpContainer";
import ResetContainer from "../../containers/ResetContainer";
import IncorrectToast from "../../containers/IncorrectToast";
import CompletionContainer from "../../containers/CompletionContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";
import Top from "../../containers/TopContainer";
import Bottom from "../../containers/BottomContainer";
import Center from "../../containers/CenterAreaContainer";
import { getNumbers } from "../../helper.js";

import "./style.scss";

export default (props) => {
  const {
    data,
    onInit,
    toastMsg,
    isPopupActive,
    showToastMessage,
    selectedDraggable,
    observationMotive,
    screenNumber,
    getCurrentScreenData,
    currentScreen,
    visitedHotspot,
  } = props;

  useEffect(() => {
    onInit();
  }, []);

  let getCurrentScreen = (sN, cS) => {
    if (
      sN == 2 ||
      (sN == 3 && cS == 2) ||
      sN == 4 ||
      sN == 8 ||
      sN == 13 ||
      sN == 6 ||
      (sN == 11 && cS != 1)
    ) {
      return (
        <View ariahidden={isPopupActive} className="view-container">
          <Center
            screenNo={sN}
            currentScreen={cS}
            visitedHotspot={visitedHotspot}
          />
        </View>
      );
    } else if (
      sN == 5 ||
      sN == 9 ||
      sN == 10 ||
      (sN == 11 && cS == 1) ||
      sN == 12 ||
      sN == 15 ||
      sN == 1 ||
      (sN == 3 && currentScreen == 1) ||
      sN == 7 ||
      sN == 14 ||
      sN == 15
    ) {
      return (
        <View
          layout="topbottom"
          ariahidden={isPopupActive}
          tabindex={isPopupActive ? "-1" : null}
        >
          <Top screenNo={sN} currentScreen={cS} />
          <Bottom screenNo={sN} currentScreen={cS} />
        </View>
      );
    }
  };

  return (
    <div className="activity-container">
      <Header />
      <div
        role="main"
        className={selectedDraggable && selectedDraggable.id ? "z-index" : ""}
      >
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {observationMotive}
        </h1>

        {showToastMessage ? (
          toastMsg == "correct" ? (
            <CorrectToast />
          ) : (
            <IncorrectToast />
          )
        ) : null}
        {getCurrentScreen(getNumbers(screenNumber), currentScreen)}
        <PopupContainer>
          <Popup popupid={1}>
            <StartInformationBox>
              <p>{data.instructionBoxContent}</p>
            </StartInformationBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p dangerouslySetInnerHTML={{ __html: data.InfoBoxContent }}></p>
            </InfoBox>
          </Popup>
          <Popup popupid={3} autoFocus>
            <CompletionContainer />
          </Popup>
          <Popup popupid={4}>
            <ResetContainer>
              <p>{data.resetMsgContent}</p>
            </ResetContainer>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
