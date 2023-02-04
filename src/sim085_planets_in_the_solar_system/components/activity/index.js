import React, { useEffect, useRef } from "react";
import StartupBox from "../../containers/StartupBox";
import View from "../../../app/components/View";
import TopContainer from "../../containers/TopContainer";
import BottomContainer from "../../containers/BottomContainer";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import InfoBox from "../../containers/InfoBox";
import ResetBox from "../../containers/ResetBox";
import Header from "../../containers/HeaderContainer";
import CompletionScreenContainer from "../../containers/CompletionScreenContainer";
import SuccessToast from "../../containers/SuccessToast";
import PartiallyCorrectToast from "../../containers/PartiallyCorrectToast";
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
    partiallyCorrect,
  } = props;
  useEffect(() => {
    onInit();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        <h1 aria-hidden={isPopupActive} className="sr-only">
          {data.pageHeading}
        </h1>
        {submitButtonPressed && showToastMessage ? (
          answerAttempt ? (
            <SuccessToast />
          ) : partiallyCorrect ? (
            <PartiallyCorrectToast />
          ) : wrongAnswer ? (
            <IncorrectToast />
          ) : null
        ) : null}
        <View layout="topbottom" ariahidden={isPopupActive}>
          <TopContainer />
          <BottomContainer />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <StartupBox>
              {data.startUpInfo.instructionBoxContent.map((i, index) => {
                return (
                  <p key={index} className="start-info">
                    {i}
                  </p>
                );
              })}
            </StartupBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p>{data.infoBoxContent}</p>
            </InfoBox>
          </Popup>
          <Popup popupid={3}>
            <ResetBox>
              <p>{data.resetMsgContent}</p>
            </ResetBox>
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
