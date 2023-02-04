import React, { useEffect, useState } from "react";
import InfoBox from "../../containers/InfoBox";
import HintBox from "../../containers/HintBox";
import Header from "../../containers/HeaderContainer";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import LaunchUpperContainer from "../../containers/LaunchUpperContainer";
import LaunchLowerContainer from "../../containers/LaunchLowerContainer";
import LocationUp from "../../containers/LocationUpContainer";
import LocationDown from "../../containers/LocationDownContainer";
import PopupContainer from "../../containers/PopUpContainer";
import SuccessToast from "../../containers/SuccessToast";
import IncorrectToast from "../../containers/IncorrectToast";
import TransitionPopup from "../../containers/LevelOneCompletionContainer";
import ResetPopup from "../../containers/ResetPopup";
import CompletionPopup from "../../containers/CompletionPopup";
import EventManager from "../../../app/events/manager";
import Assessment from "../../containers/AssessmentContainer";

import "../stylesheet/_main.scss";

const activity = ({
  onInit,
  isPopupActive,
  currentWindow,
  quesState,
  isToastActive,
  imagesArray,
  data,
}) => {
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    onInit();
  }, []);

  useEffect(() => {
    let toastMessage = null;
    if (isToastActive) {
      if (quesState) {
        toastMessage = <SuccessToast />;
        EventManager.broadcast("POSITIVE_FEEDBACK");
      } else {
        toastMessage = <IncorrectToast />;
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }
    }
    setToastMessage(toastMessage);
  }, [isToastActive]);

  const { hint, introductoryText, learningObjective, resetPopupData } = data;
  return (
    <div className="activity-container">
      <Header />

      <div role="main" className="sim118">
        {toastMessage}
        {imagesArray.map((image, index) => (
          <div
            aria-hidden
            key={`hidden-image${index}`}
            className={`hidden-images image${index}`}
          ></div>
        ))}
        <h1
          aria-hidden={isPopupActive}
          className="sr-only"
          dangerouslySetInnerHTML={{ __html: learningObjective }}
        ></h1>
        {currentWindow == "launchScreen" ? (
          <View ariahidden={isPopupActive} layout="topbottom">
            <LaunchUpperContainer />
            <LaunchLowerContainer />
          </View>
        ) : currentWindow == "locations" ? (
          <View ariahidden={isPopupActive} layout="topbottom">
            <LocationUp key={`location${currentWindow}`} />
            <LocationDown />
          </View>
        ) : (
          <View ariahidden={isPopupActive} key={currentWindow}>
            <Assessment />
          </View>
        )}

        <PopupContainer>
          <Popup popupid={1}>
            <InfoBox>
              <p>{introductoryText}</p>
            </InfoBox>
          </Popup>
          <Popup popupid={2}>
            <HintBox>
              <p>{hint}</p>
            </HintBox>
          </Popup>
          <Popup popupid={3} autoFocus>
            <CompletionPopup />
          </Popup>
          {/* <Popup popupid={4} autoFocus>
            <CompletionPopup />
          </Popup> */}
          <Popup popupid={5}>
            <ResetPopup>{resetPopupData}</ResetPopup>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
