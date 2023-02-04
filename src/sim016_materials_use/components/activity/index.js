import React, { useEffect, useState } from "react";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import Header from "../../containers/HeaderContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";
import ResetContainer from "../../containers/ResetContainer";
import InfoBox from "../../containers/InfoBox";
import ActivityScreens from "../Screens";
import ScreensContainer from "../../containers/ScreensContainer";
import { Screen } from "../../../app/components/Screens";
import CompletionConatiner from "../../containers/CompletionContainer";

export default (props) => {
  const { data, togglePopup, selectedDraggable } = props;
  const screenData = data.screenData;
  useEffect(() => {
    togglePopup();
  }, []);
  return (
    <div className="activity-container">
      <Header />

      <div role="main" className={selectedDraggable ? "z-index" : ""}>
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
            <StartInformationBox>
              <p>{data.instructionBoxContent}</p>
            </StartInformationBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p dangerouslySetInnerHTML={{ __html: data.InfoBoxContent }}></p>
            </InfoBox>
          </Popup>
          <Popup popupid={4} autoFocus>
            <CompletionConatiner />
          </Popup>
          <Popup popupid={5}>
            <ResetContainer>
              <p>{data.resetPopupText}</p>
            </ResetContainer>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
