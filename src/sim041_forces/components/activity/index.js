import React, { useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import Header from "../../containers/Header";
import SuccessToast from "../../containers/SuccessToast";
import ResetDialogBox from "../../containers/ResetPopup";
import FullView from "../../containers/FullViewContainer";
import InfoDialogBox from "../../containers/InfoDialogbox";
import InformationBox from "../../containers/InformationBox";
import IncorrectToast from "../../containers/IncorrectToast";
import PopupContainer from "../../containers/PopUpContainer";
import CompletionScreen from "../../containers/CompletionScreen";

export default (props) => {
  const {
    isPopupActive,
    correctAttempt,
    resetPopupText,
    helpInfoContent,
    showToastMessage,
    initialPopupContent,
  } = props;

  useEffect(() => {
    props.onStartActivity();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        {showToastMessage ? (
          correctAttempt ? (
            <SuccessToast />
          ) : (
            <IncorrectToast />
          )
        ) : null}
        <View ariahidden={isPopupActive}>
          <FullView />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InfoDialogBox>{initialPopupContent}</InfoDialogBox>
          </Popup>
          <Popup popupid={2}>
            <ResetDialogBox>{resetPopupText}</ResetDialogBox>
          </Popup>
          <Popup popupid={3}>
            <InformationBox>{helpInfoContent}</InformationBox>
          </Popup>
          <Popup popupid={4} autoFocus>
            <CompletionScreen />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
