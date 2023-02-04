import React, { useEffect } from "react";
import Header from "../../containers/HeaderContainer";
import InfoBox from "../../containers/InfoBox";
import StartBox from "../../containers/StartBox";
import ResetBox from "../../containers/ResetBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import SuccessToast from "../../containers/ToastContainerSuccess";
import FailureToast from "../../containers/ToastContainerFailure";
import CompletionContainer from "../../containers/CompletionContainer";

import ViewArea from "../../containers/ViewAreaContainer";
const activity = (props) => {
  const {
    data,
    observationMotive,
    infoText,
    resetPopupText,
    isPopupActive,
    checkAnswer,
    showToastMessage,
    answerSubmitted,
    correctAttempt,
  } = props;

  useEffect(() => {
    props.onInit();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {observationMotive}
        </h1>
        {answerSubmitted ? (
          correctAttempt ? (
            showToastMessage ? (
              <SuccessToast />
            ) : null
          ) : showToastMessage ? (
            <FailureToast />
          ) : null
        ) : null}

        <View ariahidden={isPopupActive}>
          <ViewArea />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <StartBox>
              <p>{data.pageHeading}</p>
            </StartBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p>{data.infoText}</p>
            </InfoBox>
          </Popup>
          <Popup popupid={3}>
            <ResetBox>
              <p>{resetPopupText}</p>
            </ResetBox>
          </Popup>
          <Popup popupid={4} autoFocus>
            <CompletionContainer />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
