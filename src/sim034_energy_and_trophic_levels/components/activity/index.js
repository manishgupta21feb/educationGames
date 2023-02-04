import React, { useEffect } from "react";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import InitialInformationPopup from "../../containers/InitialInformationPopup";
import InfoPopupContainer from "../../containers/InfoPopupContainer";
import CompleteResetContainer from "../../containers/CompleteResetContainer";
import CompletionScreenContainer from "../../containers/CompletionScreenContainer";
import CorrectToastContainer from "../../containers/CorrectToastContainer";
import IncorrectToastContainer from "../../containers/IncorrectToastContainer";
import ResetDialogContainer from "../../containers/ResetDialogContainer";
import "../../stylesheets/activity/main.scss";
import ScreensContainer from "../../containers/ScreenContainer";
import { screenData } from "../../data";
import ActivityScreens from "../Screens";
import { Screen } from "../../../app/components/Screens";

export default (props) => {
  const {
    togglePopup,
    currentScreen,
    popupImageAlt,
    correctAttempt,
    answerAttempted,
    showToastMessage,
    initialInformationText,
  } = props;

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
                {React.createElement(ActivityScreens[component], {
                  index: id,
                })}
              </Screen>
            );
          })}
        </ScreensContainer>
        <PopupContainer>
          <Popup popupid={1}>
            <InitialInformationPopup>
              <h1 className="intro-text">
                {initialInformationText.dialogData.start.content}
              </h1>
              <div
                role="img"
                className="intro-image"
                aria-label={popupImageAlt}
              ></div>
            </InitialInformationPopup>
          </Popup>
          <Popup popupid={3}>
            <InfoPopupContainer>
              <p>
                {currentScreen == 2
                  ? initialInformationText.mcqHelpText
                  : initialInformationText.dialogData.info.content}
              </p>
            </InfoPopupContainer>
          </Popup>
          <Popup popupid={6}>
            <ResetDialogContainer>
              <p>{initialInformationText.resetText[0].content}</p>
            </ResetDialogContainer>
          </Popup>
          <Popup popupid={7} autoFocus>
            <CompleteResetContainer />
          </Popup>
          <Popup popupid={8} autoFocus>
            <CompletionScreenContainer />
          </Popup>
        </PopupContainer>
        {showToastMessage && answerAttempted ? (
          correctAttempt ? (
            <CorrectToastContainer />
          ) : (
            <IncorrectToastContainer />
          )
        ) : null}
      </div>
    </div>
  );
};
