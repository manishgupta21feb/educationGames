import React, { useEffect } from "react";
import { Popup } from "../../../app/components/Popup";
import { Screen } from "../../../app/components/Screens";

import { ActivityComponent } from "./allComponents";
import HelpContainer from "../../containers/HelpContainer";
import InfoDialogBox from "../../containers/InfoDialogBox";
import PopupContainer from "../../containers/PopUpContainer";
import ResetContainer from "../../containers/ResetContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import ScreensContainer from "../../containers/ScreensContainer";
import GameCompletionContainer from "../../containers/GameCompletionContainer";
import StepOneCompletionContainer from "../../containers/StepOneCompletionContainer";

import data from "../../data";
const { screenData } = data;
export default (props) => {
  const { data: textData, togglePopup } = props;

  useEffect(() => {
    togglePopup(1);
  }, []);

  return (
    <div className="activity-container">
      <HeaderContainer />
      <div role="main">
        <ScreensContainer>
          {screenData.map(({ component, id }, i) => {
            return (
              <Screen index={id} key={`screen-${id}`}>
                {React.createElement(ActivityComponent[component], {
                  index: id,
                })}
              </Screen>
            );
          })}
        </ScreensContainer>
        <PopupContainer>
          <Popup popupid={1}>
            <InfoDialogBox>
              <p>{textData.startScreenInfo}</p>
            </InfoDialogBox>
          </Popup>
          <Popup popupid={2}>
            <ResetContainer>
              <p>{textData.resetDialogText}</p>
            </ResetContainer>
          </Popup>
          <Popup popupid={3}>
            <HelpContainer>
              <p>{textData.informationText}</p>
            </HelpContainer>
          </Popup>
          <Popup popupid={4} autoFocus>
            <StepOneCompletionContainer />
          </Popup>
          <Popup popupid={5} autoFocus>
            <GameCompletionContainer />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
