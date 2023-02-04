import React, { useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import Header from "../../containers/Header";
import InfoBox from "../../containers/InfoBox";
import PopupContainer from "../../containers/PopUpContainer";
import InstructionBox from "../../containers/InstructionBox";
import BottomArea from "../../containers/BottomAreaContainer";
import ImageContainer from "../../containers/ImageContainer";
import SuccessToast from "../../containers/ToastContainerSuccess";
import FailureToast from "../../containers/ToastContainerFailure";
import ResetConfirmationBox from "../../containers/ResetConfirmationBox";
import CompletionScreenContainer from "../../containers/CompletionScreenContainer";
import ContinuePopup from "../../containers/ContinuePopup";
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
    getNextClick,
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

        <View layout="topbottom" ariahidden={isPopupActive}>
          <ImageContainer />
          <BottomArea />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InstructionBox>
              <p>{data.instructionBoxContent}</p>
              <div className="intro-image">
                <img
                  className="sr-only sr-image"
                  alt={data.altintroimgtext}
                ></img>
              </div>
            </InstructionBox>
          </Popup>
          <Popup popupid={4}>
            <InfoBox>
              <p>{data.infoBoxContent}</p>
            </InfoBox>
          </Popup>

          <Popup popupid={6} autoFocus>
            <CompletionScreenContainer />
          </Popup>
          <Popup popupid={7} autoFocus>
            <ContinuePopup />
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
