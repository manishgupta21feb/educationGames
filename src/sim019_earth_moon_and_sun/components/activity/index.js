import React, { useEffect } from "react";
import Header from "../../containers/Header";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import Left from "../../containers/Left";
import Right from "../../containers/Right";
import PopupContainer from "../../containers/PopUpContainer";
import InfoDialogPopup from "../../containers/InfoDialogPopup";
import ResetDialogPopup from "../../containers/ResetDialogPopup";
import InitialDialogPopup from "../../containers/InitialDialogPopup";
import "./style.scss";

const activity = (props) => {
  const {
    isPopupActive,
    activityHeading,
    infoDialogMessage,
    resetDialogMessage,
    initialDialogMessage,
  } = props;

  useEffect(() => {
    props.onInit();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {activityHeading}
        </h1>
        <View layout="leftright" ariahidden={isPopupActive || null}>
          <Left />
          <Right />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InitialDialogPopup>
              <p>{initialDialogMessage}</p>
            </InitialDialogPopup>
          </Popup>
          <Popup popupid={2}>
            <ResetDialogPopup>
              <p>{resetDialogMessage}</p>
            </ResetDialogPopup>
          </Popup>
          <Popup popupid={3}>
            <InfoDialogPopup>
              <p>{infoDialogMessage}</p>
            </InfoDialogPopup>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
