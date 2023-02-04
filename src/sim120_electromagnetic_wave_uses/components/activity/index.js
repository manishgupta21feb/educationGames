import React, { useEffect } from "react";
import InfoBox from "../../containers/InfoBox";
import ResetContainer from "../../containers/ResetContainer";
import StartUpInfoDialogBox from "../../containers/StartUpInfoDialogBox";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import { Screen } from "../../../app/components/Screens";
import { screenData } from "../../data";
import ActivityScreens from "../Screens";
import HeaderContainer from "../../containers/HeaderContainer";
import ScreensContainer from "../../containers/ScreensContainer";
import TransactionContainer from "../../containers/TransactionContainer";
import CompletionContainer from "../../containers/CompletionContainer";
import StartUpInfoBoxContainer from "../../containers/StartUpInfoBoxContainer";
import IncorrectToast from "../../containers/IncorrectToast";
import SucessToast from "../../containers/SucessToast";
 
const activity = (props) => {
  const {
    onInit,
    activityheading,
    isPopupActive,
    infoText,
    resetPopupText,
    showToastMessage,
    toastMsg
  } = props;

  useEffect(() => {
    onInit();
  }, []);

  return (
    <div className="activity-container">
      <HeaderContainer />
      <div role="main">
      {showToastMessage ? (
          toastMsg == "incorrect" ? (
            <IncorrectToast />
          ) : (
            <SucessToast />
          )
        ) : null}
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {activityheading}
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
            <StartUpInfoDialogBox>
              <StartUpInfoBoxContainer  />
            </StartUpInfoDialogBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p>{infoText}</p>
            </InfoBox>
          </Popup>
          <Popup popupid={3}>
            <ResetContainer>
              <p>{resetPopupText}</p>
            </ResetContainer>
          </Popup>
          <Popup popupid={4} autoFocus>
            <TransactionContainer />
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
