import React, { useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import "./style.scss";

import FullView from "../../containers/FullViewContainer";
import PopupContainer from "../../containers/PopUpContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import InfoPopupContainer from "../../containers/InfoPopupContainer";
import ResetDialogContainer from "../../containers/ResetDialogContainer";
import InitialInformationPopup from "../../containers/InitialInformationPopup";
import CorrectToastContainer from "../../containers/CorrectToastContainer";

export default (props) => {
  const {
    togglePopup,
    isPopupActive,
    initialInformationText,
    showToastMessage,
  } = props;

  useEffect(() => {
    togglePopup(1);
  }, []);

  return (
    <div className="activity-container">
      <HeaderContainer />
      {showToastMessage ? <CorrectToastContainer /> : null}
      <div role="main">
        {[...Array(11).keys()].map((k) => {
          return (
            <div
              aria-hidden
              key={`hidden-image${k}`}
              className={`hidden-image image${k}`}
            ></div>
          );
        })}
        <View ariahidden={isPopupActive || null}>
          <FullView />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InitialInformationPopup>
              <div className="initial-info-content">
                <p>{initialInformationText.initialInfoText}</p>
              </div>
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
        </PopupContainer>
      </div>
    </div>
  );
};
