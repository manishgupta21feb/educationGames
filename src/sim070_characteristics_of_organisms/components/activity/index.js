import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import HeaderContainer from "../../containers/HeaderContainer";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import InstructionBox from "../../containers/InstructionBox";
import ResetBox from "../../containers/ResetBox";
import MCQScreenContainer from "../../containers/MCQScreenContainer";
import SuccessToast from "../../containers/ToastContainerSuccess";
import FailureToast from "../../containers/ToastContainerFailure";
import CompletionScreenContainer from "../../containers/CompletionScreenContainer";
import LeftScreenContainer from "../../containers/LeftContainer";
import RightScreenContainer from "../../containers/RightScreenContainer";
import LevelOneCompletionContainer from "../../containers/LevelOneCompletionContainer";
const activity = (props) => {
  const {
    data,
    onInit,
    showToastMessage,
    submitButtonPressed,
    answerAttempt,
    wrongAnswer,
    secondScreen,
    isPopupActive,
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
            <FailureToast />
          ) : null
        ) : null}
        {/* <MCQScreenContainer /> */}
        {secondScreen ? (
          <MCQScreenContainer />
        ) : (
          <View layout="leftright" ariahidden={isPopupActive}>
            <LeftScreenContainer />
            <RightScreenContainer />
          </View>
        )}
        <PopupContainer>
          <Popup popupid={1}>
            <InfoBox>
              <p>{data.startUpInfo.instructionBoxContent}</p>
            </InfoBox>
          </Popup>
          <Popup popupid={2}>
            <InstructionBox>
              <p>{data.informationBoxContent}</p>
            </InstructionBox>
          </Popup>
          <Popup popupid={3}>
            <ResetBox>
              <p>{data.resetMsgContent}</p>
            </ResetBox>
          </Popup>
          <Popup popupid={4} autoFocus>
            <LevelOneCompletionContainer />
          </Popup>
          <Popup popupid={7} autoFocus>
            <CompletionScreenContainer />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
