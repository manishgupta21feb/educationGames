import React, { useEffect } from "react";
import Header from "../../containers/Header";
import View from "../../../app/components/View";
import InfoPopup from "../../containers/InfoPopup";
import ResetPopup from "../../containers/ResetPopup";
import { Popup } from "../../../app/components/Popup";
import SuccessToast from "../../containers/SuccessToast";
import FailureToast from "../../containers/FailureToast";
import PartialCorrectToast from "../../containers/PartialCorrectToast";
import PopupContainer from "../../containers/PopUpContainer";
import TransitionPopup from "../../containers/TransitionPopup";
import IntroductionPopup from "../../containers/IntroductionPopup";
import FullView from "../../containers/FullViewContainer";
import CompletionScreen from "../../containers/CompletionScreen";
import CustomTable from "../../containers/CustomTableContainer";

const activity = (props) => {
  const {
    currentScreen,
    onInit,
    text,
    questionAnswered,
    isPopupActive,
    toastMsg,
    showToastMessage,
    allImagesData,
  } = props;

  useEffect(() => {
    if (onInit) {
      onInit();
    }
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        <div className="preload-images" aria-hidden="true">
          {allImagesData.map((imgData, i) => (
            <img src={imgData} key={i} />
          ))}
        </div>
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {text.pageHeading}
        </h1>

        {currentScreen === 0 && showToastMessage ? (
          questionAnswered ? (
            <SuccessToast />
          ) : (
            <FailureToast />
          )
        ) : toastMsg == "correct" ? (
          showToastMessage && <SuccessToast />
        ) : toastMsg == "incorrect" ? (
          showToastMessage && <FailureToast />
        ) : (
          showToastMessage && <PartialCorrectToast />
        )}
        <View ariahidden={isPopupActive}>
          <FullView />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <IntroductionPopup>
              <p>{text.introductionPopupText}</p>
            </IntroductionPopup>
          </Popup>
          <Popup popupid={2}>
            <ResetPopup>
              <p>{text.resetPopupText}</p>
            </ResetPopup>
          </Popup>
          <Popup popupid={3}>
            <InfoPopup>
              <p>{text.infoPopupText[`screen${currentScreen + 1}`]}</p>
            </InfoPopup>
          </Popup>
          <Popup popupid={4} autoFocus>
            <TransitionPopup />
          </Popup>
          <Popup popupid={5} autoFocus>
            <CustomTable />
          </Popup>
          <Popup popupid={6} autoFocus>
            <CompletionScreen />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
