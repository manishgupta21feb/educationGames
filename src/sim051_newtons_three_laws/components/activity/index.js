import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import HintContainer from "../../containers/HintContainer";
import ScreensContainer from "../../containers/ScreensContainer";
import { Screen } from "../../../app/components/Screens";
import ActivityScreens from "../Screens";
import SucessToast from "../../containers/SucessToast";
import IncorrectToast from "../../containers/IncorrectToast";
import ResetContainer from "../../containers/ResetContainer";

const activity = (props) => {
  const {
    initialInfotext,
    onInit,
    hintText,
    screenData,
    toastMsg,
    showToastMessage,
    resetPopupText,
  } = props;

  useEffect(() => {
    onInit();
  }, []);

  return (
    <div className="activity-container">
      <HeaderContainer />
      {toastMsg == "correct" && showToastMessage && <SucessToast />}
      {toastMsg == "incorrect" && showToastMessage && <IncorrectToast />}
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
            <InfoBox>
              <p>{initialInfotext}</p>
            </InfoBox>
          </Popup>
          <Popup popupid={2}>
            <HintContainer>
              <p>{hintText}</p>
            </HintContainer>
          </Popup>
          <Popup popupid={3}>
            <ResetContainer>
              <p>{resetPopupText}</p>
            </ResetContainer>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
