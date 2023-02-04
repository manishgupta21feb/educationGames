import React, { useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import FullView from "../../containers/FullViewContainer";
import PopupContainer from "../../containers/PopUpContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import LeftAreaContainer from "../../containers/LeftAreaContainer";
import InfoPopupContainer from "../../containers/InfoPopupContainer";
import RightAreaContainer from "../../containers/RightAreaContainer";
import ResetDialogContainer from "../../containers/ResetDialogContainer";
import CorrectToastContainer from "../../containers/CorrectToastContainer";
import CorrectDialogContainer from "../../containers/CorrectDialogContainer";
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
      <div role="main">
        {showToastMessage ? (
          correctAttempt ? (
            <CorrectToastContainer />
          ) : (
            <IncorrectToastContainer />
          )
        ) : null}
        {props.showStatic ? (
          <View layout="leftright" ariahidden={isPopupActive || null}>
            <LeftAreaContainer />
            <RightAreaContainer />
          </View>
        ) : (
          <View ariahidden={isPopupActive || null}>
            <FullView />
          </View>
        )}
        <PopupContainer>
          <Popup popupid={1}>
            <InitialInformationPopup>
              <p>{initialInformationText.dialogData.start.content}</p>
            </InitialInformationPopup>
          </Popup>
          <Popup popupid={2}>
            <CorrectDialogContainer>
              {initialInformationText.classifyingMatterContent
                .filter((e) => e.id == selectedQuestion)
                .map((s, i) => {
                  return (
                    <div key={`${s.id}-dialog-p`} aria-label={s.correctAltText}>
                      <p
                        aria-hidden={true}
                        dangerouslySetInnerHTML={{ __html: s.correctText }}
                      ></p>
                    </div>
                  );
                })}
            </CorrectDialogContainer>
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
          <Popup popupid={4}>
            <IncorrectToastContainer />
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
