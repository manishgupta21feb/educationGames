import React, { useEffect, useState } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import Header from "../../containers/HeaderContainer";
import InfoDialogBox from "../../containers/InfoDialogBox";
import IncorrectToast from "../../containers/IncorrectToast";
import SuccessToast from "../../containers/successToast";
import AlreadyDroppedToast from "../../containers/AlreadyDroppedIncorrectToast";
import ResetDialogBox from "../../containers/ResetDialogBox";
import PopupContainer from "../../containers/PopUpContainer";
import CompletionPopup from "../../containers/CompletionPopup";
import MainActivity from "../../containers/MainActivityContainer";
import StartUpInfoDialogBox from "../../containers/StartUpInfoDialogBox";

export default (props) => {
  const [toast, setToast] = useState(null);
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

  useEffect(() => {
    let _toast = null;
    if (showToastMessage) {
      switch (toastMsg) {
        case "correct":
          _toast = <SuccessToast />;
          break;
        case "incorrect":
          _toast = <IncorrectToast />;
          break;
        case "incorrect2":
          _toast = <AlreadyDroppedToast />;
          break;
      }
    }
    setToast(_toast);
  }, [showToastMessage]);

  return (
    <div className="activity-container">
      <Header></Header>
      <div role="main">
        {toast}
        <View ariahidden={isPopupActive}>
          <MainActivity />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <StartUpInfoDialogBox>
              {startUpDialogBoxText.split("\n").map((i, key) => {
                return <p key={key}>{i}</p>;
              })}
            </StartUpInfoDialogBox>
          </Popup>
          <Popup popupid={2}>
            <InfoDialogBox>
              {infoDialogBoxText.helpInfo.map((p, index) => {
                return (
                  <p className="info-text" key={`info-text-${index}`}>
                    {p}
                  </p>
                );
              })}
              <div className="shapes">
                {infoDialogBoxText.shapesInfo.map((s) => {
                  return (
                    <p key={`info-text-${s.id}`}>
                      <span className="sr-only">{s.altText}</span>
                      <span className={s.id} aria-hidden></span>
                      <span aria-hidden>{s.label}</span>
                    </p>
                  );
                })}
              </div>
            </InfoDialogBox>
          </Popup>
          <Popup popupid={3}>
            <ResetDialogBox>
              <p>{resetDialogBoxText}</p>
            </ResetDialogBox>
          </Popup>
          <Popup popupid={4} autoFocus>
            <CompletionPopup />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
