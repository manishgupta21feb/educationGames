import React, { useEffect } from "react";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import Header from "../../containers/HeaderContainer";
import MainActivity from "../../containers/MainActivity";
import StartUpInfoDialogBox from "../../containers/StartUpInfoDialogBox";
import InfoDialogBox from "../../containers/InfoDialogBox";
import SucessToast from "../../containers/SucessToast";
import IncorrectToast from "../../containers/IncorrectToast";
import ResetDialogBox from "../../containers/ResetDialogBox";
import TransitionPopup from "../../containers/TransitionPopup";
import CompletionPopup from "../../containers/CompletionPopup";
import QuestionDialogBox from "../../containers/QuestionDialogBox";
// ../../containers/IncorrectToastContainer.js.
export default (props) => {
  const {
    isPopupActive,
    togglePopup,
    startUpDialogBoxText,
    infoDialogBoxText,
    resetDialogBoxText,
    fetchElements,
    toastMsg,
    showToastMessage,
    simulationEnd,
    updateSimulationEnd,
    QuestionInfo,
    massInfo,
  } = props;

  useEffect(() => {
    togglePopup(1);
    fetchElements();
  }, []);

  useEffect(() => {
    if (simulationEnd) {
      updateSimulationEnd(false);
    }
  }, [simulationEnd]);

  return (
    <div className="activity-container">
      <Header></Header>
      <div role="main">
        {toastMsg == "correct" && showToastMessage && <SucessToast />}
        {toastMsg == "incorrect" && showToastMessage && <IncorrectToast />}
        <MainActivity />
        <PopupContainer>
          <Popup popupid={1}>
            <StartUpInfoDialogBox>{startUpDialogBoxText}</StartUpInfoDialogBox>
          </Popup>
          <Popup popupid={2}>
            <InfoDialogBox>
              {infoDialogBoxText.map((info, ind) => {
                return (
                  <p className="info-popup-para" key={`info${ind}`}>
                    {info}
                  </p>
                );
              })}
            </InfoDialogBox>
          </Popup>
          <Popup popupid={3}>
            <ResetDialogBox>
              <p>{resetDialogBoxText}</p>
            </ResetDialogBox>
          </Popup>
          <Popup popupid={4} autoFocus>
            <TransitionPopup />
          </Popup>
          <Popup popupid={5} autoFocus>
            <CompletionPopup />
          </Popup>
          <Popup popupid={6}>
            <QuestionDialogBox>
              {QuestionInfo.map((quest, ind) => {
                return (
                  <p className="info-popup-para" key={`quest${ind}`}>
                    {quest}
                  </p>
                );
              })}
            </QuestionDialogBox>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
