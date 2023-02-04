import React, { useEffect, useRef } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import FullView from "../../containers/FullViewContainer";
import PopupContainer from "../../containers/PopUpContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import InfoPopupContainer from "../../containers/InfoPopupContainer";
import ResetDialogContainer from "../../containers/ResetDialogContainer";
import InitialInformationPopup from "../../containers/InitialInformationPopup";
import Right from "../../containers/Right";
import CompletionConatiner from "../../containers/Completion";

export default (props) => {
  const pRef = useRef(props.currentPopup);
  const {
    togglePopup,
    currentPopup,
    isPopupActive,
    announceLiveText,
    initialInformationText,
  } = props;

  useEffect(() => {
    togglePopup(1);
  }, []);

  useEffect(() => {
    if (pRef.current.indexOf(1) >= 0 && currentPopup.indexOf(1) == -1) {
      setTimeout(() => {
        announceLiveText();
      });
    }
    pRef.current = currentPopup;
  }, [currentPopup]);

  return (
    <div className="activity-container">
      <HeaderContainer />
      <div role="main">
        <View layout="leftright" ariahidden={isPopupActive || null}>
          <FullView />
          <Right />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InitialInformationPopup>
              <p>{initialInformationText.dialogData.start.content}</p>
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
            <CompletionConatiner />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
