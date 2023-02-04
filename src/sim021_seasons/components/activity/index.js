import React, { useEffect } from "react";
import { Popup } from "../../../app/components/Popup";

import Header from "../../containers/HeaderContainer";
import PopupContainer from "../../containers/PopUpContainer";
import TransitionPopup1 from "../../containers/TransitionPopup1";
import TransitionPopup2 from "../../containers/TransitionPopup2";
import ResetDialogBox from "../../containers/ResetDialogContainer";
import InfoPopupContainer from "../../containers/InfoPopupContainer";
import CorrectToastContainer from "../../containers/CorrectToastContainer";
import CompleteResetContainer from "../../containers/CompleteResetContainer";
import InitialInformationPopup from "../../containers/InitialInformationPopup";
import IncorrectToastContainer from "../../containers/IncorrectToastContainer";

import MCQSContainer from "../../containers/MCQSContainer";

export default (props) => {
  const {
    introImageAlt,
    correctAttempt,
    answerAttempted,
    resetPopupText,
    showToastMessage,
    introPopupLabels,
    initialInformationText,
  } = props;

  useEffect(() => {
    props.onStartActivity();
  }, []);

  return (
    <>
      <div className="activity-container">
        <Header />
        <div role="main">
          {showToastMessage && answerAttempted ? (
            correctAttempt ? (
              <CorrectToastContainer />
            ) : (
              <IncorrectToastContainer />
            )
          ) : null}
          <MCQSContainer />
          <PopupContainer>
            <Popup popupid={1}>
              <InitialInformationPopup>
                <p>{initialInformationText.dialogData.start.content}</p>
                <div className="intro-popup">
                  <div className="intro-popup-image">
                    <img className="sr-only sr-image" alt={introImageAlt} />
                    {introPopupLabels.map((item) => {
                      return (
                        <div
                          aria-hidden
                          key={item.id}
                          className={`intro-label ${item.id}`}
                        >
                          {item.labels.map((l) => {
                            return (
                              <p
                                key={l.id}
                                dangerouslySetInnerHTML={{ __html: l.text }}
                              ></p>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </InitialInformationPopup>
            </Popup>
            <Popup popupid={3}>
              <InfoPopupContainer>
                <p>{initialInformationText.dialogData.info.content}</p>
              </InfoPopupContainer>
            </Popup>
            <Popup popupid={6}>
              <ResetDialogBox>
                <p>{resetPopupText}</p>
              </ResetDialogBox>
            </Popup>
            <Popup popupid={7} autoFocus>
              <CompleteResetContainer />
            </Popup>
            <Popup popupid={8} autoFocus>
              <TransitionPopup1 />
            </Popup>
            <Popup popupid={9} autoFocus>
              <TransitionPopup2 />
            </Popup>
          </PopupContainer>
        </div>
      </div>
    </>
  );
};
