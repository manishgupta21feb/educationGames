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
import LeftScreen from "../../containers/LeftContainer";
import RightScreen from "../../containers/RightContainer";
import ButterflyDnDCompletion from "../../containers/ButterflyDnDCompletionContainer";
import LevelOneCompletion from "../../containers/LevelOneCompletionContainer";
import SuccessToastFive from "../../containers/ToastContainerSuccessFive";

export default (props) => {
  const {
    data,
    onInit,
    isPopupActive,
    showToastMessage,
    correctAnswer,
    showToastFive,
    mainImg,
    selectedDraggable,
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
        {correctAnswer && showToastMessage ? (
          showToastFive ? (
            <SuccessToastFive />
          ) : (
            <SuccessToast />
          )
        ) : showToastMessage ? (
          <FailureToast />
        ) : null}

        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {data.activityHeading}
        </h1>
        <View layout="leftright" ariahidden={isPopupActive}>
          <LeftScreen />
          <RightScreen />
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
            <ButterflyDnDCompletion />
          </Popup>
          <Popup popupid={6} autoFocus>
            <LevelOneCompletion />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
