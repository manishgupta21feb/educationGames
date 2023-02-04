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
import ResetDialogBox from "../../containers/ResetDialogBox";

export default (props) => {
  const {
    isPopupActive,
    startUpDialogBoxText,
    infoDialodBoxText,
    resetDialogBoxText,
    togglePopup,
  } = props;

  useEffect(() => {
    togglePopup(1);
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
              <p>{startUpDialogBoxText}</p>
            </StartUpInfoDialogBox>
          </Popup>
          <Popup popupid={2}>
            <InfoDialogBox>
              <p>{infoDialodBoxText}</p>
            </InfoDialogBox>
          </Popup>
          <Popup popupid={3}>
            <ResetDialogBox>
              <p>{resetDialogBoxText}</p>
            </ResetDialogBox>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
