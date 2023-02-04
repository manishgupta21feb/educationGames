import React, { useEffect } from "react";
import Header from "../../containers/Header";
import HelpPopup from "../../containers/HelpPopup";
import ResetPopup from "../../containers/ResetPopup";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import InitialInfoPopup from "../../containers/InitialInfoPopup";
import TransitionPopup from "../../containers/TransitionPopup";
import ScreensContainer from "../../containers/Screens";
import { screenData } from "../../data";
import ActivityScreens from "../Screens";
import { Screen } from "../../../app/components/Screens";
import SuccessToast from "../../containers/SuccessToast";
import IncorrectToast from "../../containers/IncorrectToast";
import CompletionPopup from "../../containers/CompletionPopup";

export default (props) => {
  const {
    helpPopupText,
    resetPopupText,
    initialInfoPopupText,
    showToastMessage,
    submitButtonPressed,
    answerAttempt,
    wrongAnswer,
    transitionPopup,
    isPopupActive,
    currentPopup,
  } = props;

  useEffect(() => {
    if (props.onMount) {
      props.onMount();
    }
  }, []);

  return (
    <div className="activity-container">
      {currentPopup.indexOf(1) >= 0 ? (
        <p aria-hidden className="hidden-para">
          T
        </p>
      ) : null}
      <Header />
      <div role="main">
        {submitButtonPressed && showToastMessage ? (
          answerAttempt ? (
            <SuccessToast />
          ) : wrongAnswer ? (
            <IncorrectToast />
          ) : null
        ) : null}
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
            <InitialInfoPopup>
              {initialInfoPopupText.map((p, index) => {
                return (
                  <p className="info-text" key={`info-text-${index}`}>
                    {p}
                  </p>
                );
              })}

              {/* <p dangerouslySetInnerHTML={{ __html: initialInfoPopupText }}></p> */}
            </InitialInfoPopup>
          </Popup>
          <Popup popupid={2}>
            <HelpPopup>
              <p>{helpPopupText}</p>
            </HelpPopup>
          </Popup>
          <Popup popupid={3}>
            <ResetPopup>
              <p>{resetPopupText}</p>
            </ResetPopup>
          </Popup>
          <Popup popupid={4} autoFocus>
            <TransitionPopup />
          </Popup>
          <Popup popupid={5} autoFocus>
            <CompletionPopup />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
