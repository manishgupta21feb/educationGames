import React, { useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import InfoDialogBox from "../../containers/InfoDialogBox";
import LeftContainer from "../../containers/LeftContainer";
import RightContainer from "../../containers/RightContainer";
import PopupContainer from "../../containers/PopUpContainer";
import ResetContainer from "../../containers/ResetContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import InitialInformationPopup from "../../containers/InitialInformationPopup";

const Activity = (props) => {
  const {
    onClick,
    onClick2,
    togglePopup,
    resetDialog,
    isPopupActive,
    helpPopupText,
    resetPopupText,
    initialPopupText,
  } = props;

  useEffect(() => {
    togglePopup(1);
  }, []);

  useEffect(() => {
    if (resetDialog) {
      togglePopup(2);
    }
  }, [resetDialog]);

  return (
    <div className="activity-container">
      <HeaderContainer />
      <div role="main">
        <View layout="leftright" ariahidden={isPopupActive}>
          <LeftContainer />
          <RightContainer />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InitialInformationPopup>
              <p>{initialPopupText}</p>
            </InitialInformationPopup>
          </Popup>
          <Popup popupid={2}>
            <ResetContainer
              onClick={() => onClick(2)}
              onClick2={() => onClick2(2)}
            >
              <p>{resetPopupText}</p>
            </ResetContainer>
          </Popup>
          <Popup popupid={3}>
            <InfoDialogBox>
              <p>{helpPopupText}</p>
            </InfoDialogBox>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default Activity;
