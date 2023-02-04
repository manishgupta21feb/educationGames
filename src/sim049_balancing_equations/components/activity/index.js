import React, { useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import FullView from "../../containers/FullViewContainer";
import PopupContainer from "../../containers/PopUpContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import InfoPopupContainer from "../../containers/InfoPopupContainer";
import ResetDialogContainer from "../../containers/ResetDialogContainer";
import CorrectToastContainer from "../../containers/CorrectToastContainer";
import CompleteResetContainer from "../../containers/CompleteResetContainer";
import InitialInformationPopup from "../../containers/InitialInformationPopup";
import IncorrectToastContainer from "../../containers/IncorrectToastContainer";
import CompletionScreenContainer from "../../containers/CompletionScreenContainer";

export default (props) => {
  const {
    togglePopup,
    isPopupActive,
    correctAttempt,
    showToastMessage,
    selectedQuestion,
    initialInformationText,
  } = props;

  useEffect(() => {
    togglePopup(1);
  }, []);

  return (
    <div className="activity-container">
      <HeaderContainer />
      {showToastMessage ? (
        correctAttempt ? (
          <CorrectToastContainer />
        ) : (
          <IncorrectToastContainer />
        )
      ) : null}
      <div role="main">
        <View ariahidden={isPopupActive || null}>
          <FullView />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InitialInformationPopup>
              {initialInformationText.dialogData.start.content.map((c, i) => {
                return (
                  <p key={`start-info${i}`} className="initial-info-popup">
                    {c}
                  </p>
                );
              })}
            </InitialInformationPopup>
          </Popup>
          <Popup popupid={3}>
            <InfoPopupContainer>
              <div className="initial-info-popup">
                {initialInformationText.dialogData.info.content.map((a, i) => {
                  return (
                    <p key={i} dangerouslySetInnerHTML={{ __html: a }}></p>
                  );
                })}
              </div>
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
      </div>
    </div>
  );
};
