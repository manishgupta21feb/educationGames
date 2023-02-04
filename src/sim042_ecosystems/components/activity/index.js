import React, { useEffect } from "react";
import Header from "../../containers/Header";
import View from "../../../app/components/View";
import HelpPopup from "../../containers/HelpPopup";
import ResetPopup from "../../containers/ResetPopup";
import { Popup } from "../../../app/components/Popup";
import HotspotArea from "../../containers/HotspotArea";
import BottomArea from "../../containers/BottomArea";
import PopupContainer from "../../containers/PopUpContainer";
import InitialInfoPopup from "../../containers/InitialInfoPopup";
import CompletionScreenContainer from "../../containers/CompletionScreenContainer";
import IncorrectToastContainer from "../../containers/IncorrectToast";
import CorrectToastContainer from "../../containers/SuccessToast";
import PartiallyIncorrectToast from "../../containers/PartiallyIncorrectToast";

export default (props) => {
  const {
    isPopupActive,
    helpPopupText,
    resetPopupText,
    initialInfoPopupText,
    showToastMessage,
    answerAttempted,
    correctAttempt,
    partiallyCorrect,
  } = props;

  useEffect(() => {
    if (props.onMount) {
      props.onMount();
    }
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        {showToastMessage && answerAttempted ? (
          !correctAttempt ? (
            partiallyCorrect ? (
              <PartiallyIncorrectToast />
            ) : (
              <IncorrectToastContainer />
            )
          ) : null
        ) : null}
        <View
          layout="topbottom"
          ariahidden={isPopupActive}
          tabindex={isPopupActive ? "-1" : null}
        >
          <HotspotArea />
          <BottomArea />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InitialInfoPopup>
              {initialInfoPopupText.map((info, index) => {
                return (
                  <p
                    className="info-popup-para"
                    key={`info-popup-para${index}`}
                  >
                    {info}
                  </p>
                );
              })}
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
            <CompletionScreenContainer />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
