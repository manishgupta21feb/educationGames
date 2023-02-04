import React, { useEffect } from "react";
import { Popup } from "../../../app/components/Popup";
import View from "../../../app/components/View";
import PopupContainer from "../../containers/PopUpContainer";
import LeftAreaContainer from "../../containers/LeftAreaContainer";
import RightAreaContainer from "../../containers/RightAreaContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import InitialInformationPopup from "../../containers/InitialInformationPopup";
import InfoPopupContainer from "../../containers/InfoPopupContainer";
import CorrectDialogContainer from "../../containers/CorrectDialogContainer";
import CompleteResetContainer from "../../containers/CompleteResetContainer";
import CompletionScreenContainer from "../../containers/CompletionScreenContainer";
import CorrectToastContainer from "../../containers/CorrectToastContainer";
import IncorrectToastContainer from "../../containers/IncorrectToastContainer";
import ResetDialogContainer from "../../containers/ResetDialogContainer";

export default (props) => {
  const {
    isPopupActive,
    togglePopup,
    showToastMessage,
    answerAttempted,
    correctAttempt,
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
        {showToastMessage && answerAttempted ? (
          correctAttempt ? (
            <CorrectToastContainer />
          ) : (
            <IncorrectToastContainer />
          )
        ) : null}
        <View layout="leftright" ariahidden={isPopupActive || null}>
          <LeftAreaContainer />
          <RightAreaContainer />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InitialInformationPopup>
              <p>{initialInformationText.dialogData.start.content}</p>
            </InitialInformationPopup>
          </Popup>
          <Popup popupid={2}>
            <CorrectDialogContainer>
              {initialInformationText.ecosystemContent
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
              <p>{initialInformationText.dialogData.info.content}</p>
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
