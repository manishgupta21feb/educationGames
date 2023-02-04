import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import StartupBox from "../../containers/StartupBox";
import ResetBox from "../../containers/ResetBox";
import CompletionScreen from "../../containers/CompletionScreenContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import SecondScreen from "../../containers/SecondScreenContainer";
import FirstScreen from "../../containers/FirstScreenContainer";
import SuccessToast from "../../containers/ToastContainerSuccess";
import FailureToast from "../../containers/ToastContainerFailure";
import ContinuePopupContainer from "../../containers/ContinuePopupContainer";
const activity = (props) => {
  const {
    isPopupActive,
    onStartActivity,
    showToastMessage,
    submitButtonPressed,
    answerAttempt,
    wrongAnswer,
    data,
    secondScreen,
    activityHeading,
    zindexStatus,
  } = props;

  useEffect(() => {
    onStartActivity();
  }, []);

  return (
    <div className="activity-container">
      <HeaderContainer />

      <div role="main"className={zindexStatus ? "z-index" : ""}>
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {activityHeading}
        </h1>
        {submitButtonPressed && showToastMessage ? (
          answerAttempt ? (
            <SuccessToast />
          ) : wrongAnswer ? (
            <FailureToast />
          ) : null
        ) : null}
        <div className="view_wrapper"></div>
        <View ariahidden={isPopupActive}>
          {secondScreen ? <SecondScreen /> : <FirstScreen />}

        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <StartupBox>
              <p dangerouslySetInnerHTML={{ __html: data.startUpPopup }}></p>
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
          <Popup popupid={6} autoFocus>
            <ContinuePopupContainer />
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
