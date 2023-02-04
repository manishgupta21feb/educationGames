import React, { useEffect, useRef } from "react";
import StartupBox from "../../containers/StartupBox";
import ResetBox from "../../containers/ResetBox";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import LeftContainer from "../../containers/LeftContainer";
import RightContainer from "../../containers/RightContainer";
import SuccessToast from "../../containers/SuccessToast";
import IncorrectToast from "../../containers/IncorrectToast";
import PartiallyCorrectToast from "../../containers/PartiallyCorrectToast";
import CompletionPopup from "../../containers/CompletionPopup";
const activity = (props) => {
  const {
    onInit,
    data,
    isPopupActive,
    answerAttempt,
    showToastMessage,
    submitButtonPressed,
    partiallyCorrect,
    wrongAnswer,
    infoDialogBoxText,
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
          ) : partiallyCorrect ? (
            <PartiallyCorrectToast />
          ) : wrongAnswer ? (
            <IncorrectToast />
          ) : null
        ) : null}
        <View layout="leftright" ariahidden={isPopupActive}>
          <LeftContainer />
          <RightContainer />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <StartupBox>
              <p>{data.startUpInfo.instructionBoxContent}</p>
            </StartupBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              {infoDialogBoxText.helpInfo.map((p, index) => {
                return (
                  <p className="info-text" key={`info-text-${index}`}>
                    {p}
                  </p>
                );
              })}
              <div className="shapes">
                {infoDialogBoxText.shapesInfo.map((s) => {
                  return (
                    <p key={`info-text-${s.id}`}>
                      <span className="sr-only">{s.altText}</span>
                      <span className={s.id} aria-hidden></span>
                      <span aria-hidden>{s.label}</span>
                    </p>
                  );
                })}
              </div>
            </InfoBox>
          </Popup>
          <Popup popupid={3}>
            <ResetBox>
              <p>{data.resetMsgContent}</p>
            </ResetBox>
          </Popup>
          <Popup popupid={7} autoFocus>
            <CompletionPopup />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
