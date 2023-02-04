import React, { useEffect, useRef, useState } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import StartupBox from "../../containers/StartupBox";
import ResetBox from "../../containers/ResetBox";
import CompletionScreen from "../../containers/CompletionScreenContainer";
import HeaderContainer from "../../containers/HeaderContainer";
// import LeftArea from "../ViewArea/LeftArea";
import LeftContainer from "../../containers/LeftContainer";
// import RightArea from "../ViewArea/RightArea";
import RightContainer from "../../containers/RightContainer";
import ContinuePopup from "../../containers/ContinuePopup";
import CorrectDialogContainer from "../../containers/CorrectDialogContainer";
import SuccessToast from "../../containers/ToastContainerSuccess";
import FailureToast from "../../containers/ToastContainerFailure";
const activity = (props) => {
  const {
    onInit,
    data,
    isPopupActive,
    matchedItems,
    showToastMessage,
    submitButtonPressed,
    answerAttempt,
    wrongAnswer,
    currentPopup,
    secondScreen,
    scenerioVisitedValue,
    zindexStatus
  } = props;

  const currentPopupRef = useRef(currentPopup);
  const [showActivity, setShowActivity] = useState(true);

  useEffect(() => {
    onInit();
  }, []);

  useEffect(() => {
    if (
      currentPopup.indexOf(1) >= 0 &&
      currentPopupRef.current.indexOf(1) == -1 &&
      currentPopupRef.current.indexOf(3) >= 0
    ) {
      setShowActivity(false);
      setTimeout(() => {
        setShowActivity(true);
      });
    }
    currentPopupRef.current = currentPopup;
  }, [currentPopup]);

  useEffect(() => {
    setShowActivity(false);
    setTimeout(() => {
      setShowActivity(true);
    });
  }, [scenerioVisitedValue]);

  return (
    <div className="activity-container">
      <HeaderContainer />
      <div role="main" className={zindexStatus ? "z-index" : ""}>
        <h1 aria-hidden={isPopupActive} className="sr-only">
          {secondScreen ? data.pageHeading1 : data.pageHeading2}
        </h1>
        {submitButtonPressed && showToastMessage ? (
          answerAttempt ? (
            <SuccessToast />
          ) : wrongAnswer ? (
            <FailureToast />
          ) : null
        ) : null}
        {showActivity ? (
          <View layout="leftright" ariahidden={isPopupActive}>
            <LeftContainer />
            <RightContainer />
          </View>
        ) : null}
        <PopupContainer>
          <Popup popupid={1}>
            <StartupBox>
              <p>{data.startUpPopup}</p>
              <div
                role="img"
                className="intro-image"
                aria-label={data.imageAltPopupText}
              />
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
          <Popup popupid={5}>
            <CorrectDialogContainer>
              <p dangerouslySetInnerHTML={{ __html: matchedItems }}></p>
            </CorrectDialogContainer>
          </Popup>
          <Popup popupid={6} autoFocus>
            <ContinuePopup />
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
