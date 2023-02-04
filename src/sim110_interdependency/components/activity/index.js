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

import LevelOneCompletionContainer from "../../containers/LevelOneCompletionContainer";
import ScreenOne from "../../containers/ScreenOneContainer";
export default (props) => {
  const {
    data,
    onInit,
    toastMsg,
    isPopupActive,
    showToastMessage,
    selectedDraggable,
    submitButtonPressed,
    answerAttempt,
    wrongAnswer,
    setStatic,
    mainImg,
  } = props;

  useEffect(() => {
    onInit();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div
        role="main"
        className={selectedDraggable && selectedDraggable.id ? "z-index" : ""}
      >
        {answerAttempt && showToastMessage ? (
          <SuccessToast />
        ) : wrongAnswer ? (
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
              <img
                src={mainImg.img}
                alt={mainImg.alt}
                className="img-position"
              />
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
          <Popup popupid={5} autoFocus>
            <LevelOneCompletionContainer />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
