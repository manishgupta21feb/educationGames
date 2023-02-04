import React, { useEffect } from "react";
import InfoBox from "../../containers/InfoBox";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import StartUpInfoDialogBox from "../../containers/StartUpInfoDialogBox";
import ResetContainer from "../../containers/ResetContainer";
import { Screen } from "../../../app/components/Screens";
import { screenData } from "../../data";
import ActivityScreens from "../Screens";
import ScreensContainer from "../../containers/ScreensContainer";
import CompletionContainer from "../../containers/CompletionContainer";

const activity = (props) => {
  const {
    onInit,
    activityheading,
    isPopupActive,
    startUpInfoText,
    infoText,
    resetPopupText,
  } = props;

  useEffect(() => {
    onInit();
  }, []);

  return (
    <div className="activity-container">
      <HeaderContainer />
      <div role="main">
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
              <p>{startUpInfoText}</p>
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
            <CompletionContainer />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
