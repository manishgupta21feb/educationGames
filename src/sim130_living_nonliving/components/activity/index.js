import React, { useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import InfoBox from "../../containers/InfoBox";
import Header from "../../containers/HeaderContainer";

import SuccessToast from "../../containers/ToastContainerSuccess";
import PopupContainer from "../../containers/PopUpContainer";
import ResetContainer from "../../containers/ResetContainer";
import FailureToast from "../../containers/ToastContainerFailure";
import CompletionContainer from "../../containers/CompletionContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";

import ScreenOne from "../../containers/ScreenOneContainer";
export default (props) => {
  const {
    data,
    onInit,

    isPopupActive,
    showToastMessage,

    answerAttempt,

    mainImg,
  } = props;

  useEffect(() => {
    onInit();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        {answerAttempt && showToastMessage ? (
          <SuccessToast />
        ) : showToastMessage ? (
          <FailureToast />
        ) : null}

        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {data.activityHeading}
        </h1>

        <View ariahidden={isPopupActive}>
          <ScreenOne />
        </View>

        <PopupContainer>
          <Popup popupid={1}>
            <StartInformationBox>
              <p
                dangerouslySetInnerHTML={{ __html: data.instructionBoxContent }}
              ></p>
            </StartInformationBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p dangerouslySetInnerHTML={{ __html: data.InfoBoxContent }}></p>
            </InfoBox>
          </Popup>
          <Popup popupid={3} autoFocus>
            <CompletionContainer />
          </Popup>
          <Popup popupid={4}>
            <ResetContainer>
              <p>{data.resetMsgContent}</p>
            </ResetContainer>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
