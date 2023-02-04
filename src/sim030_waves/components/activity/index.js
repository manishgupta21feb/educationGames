import React, { useEffect, useRef } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import HelpPopup from "../../containers/HelpPopup";
import ResetPopup from "../../containers/ResetPopup";
import InitialPopup from "../../containers/InitialPopup";
import LeftContainer from "../../containers/LeftContainer";
import RightContainer from "../../containers/RightContainer";
import PopupContainer from "../../containers/PopUpContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import CompletionPopup from "../../containers/CompletionPopup";

const activity = (props) => {
  useEffect(() => {
    props.onInit();
  }, []);

  return (
    <div className="activity-container">
      <HeaderContainer />
      <div role="main">
        <View layout="leftright" ariahidden={props.isPopupActive}>
          <LeftContainer />
          <RightContainer />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InitialPopup>
              <p>{props.initialPopupText}</p>
            </InitialPopup>
          </Popup>
          <Popup popupid={2}>
            <ResetPopup>{props.resetPopupText}</ResetPopup>
          </Popup>
          <Popup popupid={3}>
            <HelpPopup>{props.helpPopupText}</HelpPopup>
          </Popup>
          <Popup popupid={4} autoFocus>
            <CompletionPopup />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
