import React, { useEffect } from "react";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import ScreensContainer from "../../containers/ScreensContainer";
import { Screen } from "../../../app/components/Screens";
import { screenData } from "../../data";
import ActivityScreens from "../Screens";
import StartUpInfoDialogBox from "../../containers/StartUpInfoDialogBox";
import InfoDialogBox from "../../containers/InfoDialogBox";
import HeaderContainer from "../../containers/HeaderContainer";
import ResetContainer from "../../containers/ResetContainer";
import CompletionContainer from "../../containers/CompletionContainer";

const activity = (props) => {

  const { onInit, startUpInfoText, infoText, resetPopupText } = props;

  useEffect(() => {
    onInit();
  }, []);

  return (
    <div className="activity-container">
      <HeaderContainer></HeaderContainer>
      <div role="main">
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
            <InfoDialogBox>
              <p>{infoText}</p>
            </InfoDialogBox>
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
