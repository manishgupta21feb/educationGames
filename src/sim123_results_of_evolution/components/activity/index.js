import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import StartupBox from "../../containers/StartupBox";
import ResetBox from "../../containers/ResetBox";
import CompletionScreen from "../../containers/CompletionScreenContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import LeftContainer from "../../containers/LeftContainer";
import RightContainer from "../../containers/RightContainer";
import SuccessToast from "../../containers/SuccessToast";
import IncorrectToast from "../../containers/IncorrectToast";
const activity = (props) => {
  const {
    onInit,
    data,
    isPopupActive,
    showToastMessage,
    submitButtonPressed,
    answerAttempt,
    wrongAnswer,
  } = props;
  useEffect(() => {
    onInit();
  }, []);
  return (
    <div className="activity-container">
      <HeaderContainer />
      <div role="main">
        <h1 aria-hidden={isPopupActive} className="sr-only">
          {data.pageHeading}
        </h1>
        {submitButtonPressed && showToastMessage ? (
          answerAttempt ? (
            <SuccessToast />
          ) : wrongAnswer ? (
            <IncorrectToast />
          ) : null
        ) : null}
        <View layout="leftright" ariahidden={isPopupActive}>
          <LeftContainer />
          <RightContainer />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <StartupBox>
              <p>{data.startUpPopup}</p>
            </StartupBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p>{data.infoPopupText}</p>
            </InfoBox>
          </Popup>
          <Popup popupid={3}>
            <ResetBox>
              <p>{data.resetPopupText}</p>
            </ResetBox>
          </Popup>
          <Popup popupid={7} autoFocus>
            <CompletionScreen />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
