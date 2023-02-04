import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import Header from "../../containers/HeaderContainer";
import StartInfoBoxContainer from "../../containers/StartInfoBoxContainer";
import ViewArea from "../../containers/ViewAreaContainer";
import ResetContainer from "../../containers/ResetContainer";
import SuccessToast from "../../containers/ToastContainerSuccess";
import FailureToast from "../../containers/ToastContainerFailure";
import CompletionContainer from "../../containers/CompletionContainer";

const activity = (props) => {
  const { onInit, isPopupActive, data, correctAnswerMcq, showToastMessage } =
    props;
  useEffect(() => {
    onInit();
  }, []);
  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        {correctAnswerMcq && showToastMessage ? (
          <SuccessToast />
        ) : showToastMessage ? (
          <FailureToast />
        ) : null}
        <h1 aria-hidden={isPopupActive} className="sr-only">
          {data.objectiveHeading}
        </h1>
        <View ariahidden={isPopupActive}>
          <ViewArea />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <StartInfoBoxContainer>
              <p>{data.startScreenHeading}</p>
            </StartInfoBoxContainer>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p>{data.infoText}</p>
            </InfoBox>
          </Popup>
          <Popup popupid={3}>
            <ResetContainer>
              <p>{data.resetMsgContent}</p>
            </ResetContainer>
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
