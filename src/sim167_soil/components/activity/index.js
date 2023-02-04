import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import FullViewContainer from "../../containers/FullViewContainer";
import SuccessToast from "../../containers/SuccessToast";
import IncorrectToast from "../../containers/IncorrectToast";
import CompletionPopup from "../../containers/CompletionPopup";
import HintBoxContainer from "../../containers/HintBoxContainer.js";
import LevelOneCompletion from "../../containers/LevelOneCompletionContainer";
import ResetDialogBox from "../../containers/ResetDialogBox";
import Header from "../../containers/HeaderContainer";

const activity = (props) => {
  const {
    onInit,
    isPopupActive,
    introContent,
    toastMsg,
    showToastMessage,
    activityHeading,
    hintData,
    resetDialogText,
    imagesArray,
  } = props;

  useEffect(() => {
    onInit();
  }, []);
  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {activityHeading}
        </h1>
        {imagesArray.map((image, index) => (
          <div
            aria-hidden
            key={`hidden-image${index}`}
            className={`hidden-images image${index}`}
          ></div>
        ))}
        {showToastMessage ? (
          toastMsg == "incorrect" ? (
            <IncorrectToast />
          ) : (
            <SuccessToast />
          )
        ) : null}
        <View>
          <FullViewContainer />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InfoBox>
              <p dangerouslySetInnerHTML={{ __html: introContent }} />
            </InfoBox>
          </Popup>
          <Popup popupid={2}>
            <HintBoxContainer>{hintData}</HintBoxContainer>
          </Popup>
          <Popup popupid={3} autoFocus>
            <CompletionPopup />
          </Popup>
          <Popup popupid={4} autoFocus>
            <LevelOneCompletion />
          </Popup>
          <Popup popupid={5}>
            <ResetDialogBox>{resetDialogText}</ResetDialogBox>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
