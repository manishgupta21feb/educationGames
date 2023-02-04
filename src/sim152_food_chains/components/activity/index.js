import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import Header from "../../containers/HeaderContainer";
import ActivityArea from "../../containers/ActivityContainer";
import FullView from "../../containers/FullViewContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";
import ResetDialogBox from "../../containers/ResetDialogBox";
import TransitionPopup from "../../containers/TransitionPopup";
import data from "../../data";

import SuccessToast from "../../containers/CorrectToastContainer";
import IncorrectToast from "../../containers/IncorrectToastContainer";
import CompletionScreen from "../../containers/CompletionPopup";

const activity = (props) => {
  const {
    togglePopup,
    isPopupActive,
    initialInformationText,
    showToastMessage,
    correctAttempt,
    infoText,
  } = props;

  useEffect(() => {
    togglePopup(1);
  }, []);
  // useEffect(() => {}, [infoText]);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        <h1 className="sr-only">{data.headingOne}</h1>
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
            <StartInformationBox>
              <p dangerouslySetInnerHTML={{ __html: data.startInfo }}></p>
            </StartInformationBox>
          </Popup>
          <Popup popupid={3}>
            <InfoBox>
              <p>{infoText}</p>
            </InfoBox>
          </Popup>
          <Popup popupid={4}>
            <ResetDialogBox>
              <p>{data.resetPopupText}</p>
            </ResetDialogBox>
          </Popup>
          <Popup popupid={5} autoFocus>
            <TransitionPopup />
          </Popup>
          <Popup popupid={6} autoFocus>
            <CompletionScreen />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
