import React, { useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import Header from "../../containers/Header";
import InfoBox from "../../containers/InfoBox";
import PopupContainer from "../../containers/PopUpContainer";
import InstructionBox from "../../containers/InstructionBox";
import RightSection from "../../containers/RightContainer";
import LeftSection from "../../containers/LeftContainer";
import SuccessToast from "../../containers/ToastContainerSuccess";
import FailureToast from "../../containers/ToastContainerFailure";
import ResetConfirmationBox from "../../containers/ResetConfirmationBox";
import TransitionPopup from "../../containers/TransitionPopup";
import CompletionScreenContainer from "../../containers/CompletionScreenContainer";

export default (props) => {
  const {
    isPopupActive,
    onStartActivity,
    showToastMessage,
    submitButtonPressed,
    answerAttempt,
    wrongAnswer,
    data,
    activityHeading,
    infoText
  } = props;

  useEffect(() => {
    onStartActivity();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
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
        <View layout="leftright" ariahidden={isPopupActive}>
          <LeftSection />
          <RightSection />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InstructionBox>
              <p>{data.instructionBoxContent}</p>
            </InstructionBox>
          </Popup>
          <Popup popupid={4}>
            <InfoBox>
              <p>{infoText}</p>
            </InfoBox>
          </Popup>
          <Popup popupid={6} autoFocus>
              <TransitionPopup />
            </Popup>
          <Popup popupid={7} autoFocus>
            <CompletionScreenContainer />
          </Popup>
          <Popup popupid={8}>
            <ResetConfirmationBox>
              <p>{data.resetMsgContent}</p>
            </ResetConfirmationBox>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
