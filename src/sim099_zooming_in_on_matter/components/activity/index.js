import React, { useEffect, useRef } from "react";
import Header from "../../containers/Header";
import ResetBox from "../../containers/ResetBox";
import InfoBox from "../../containers/InfoBox";
import FullArea from "../../containers/FullArea";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import CompletionPopup from "../../containers/CompletionPopup";
import StartBox from "../../containers/StartBox";

const activity = (props) => {
  const {
    introText,
    infoText,
    resetPopupText,
    isPopupActive,
    observationMotive,
    buttonClicked,
    infoNail,
    infoWater,
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
        <View ariahidden={isPopupActive}>
          <FullArea />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <StartBox>
              {introText.map((i, index) => {
                return (
                  <p key={index} className="start-info">
                    {i}
                  </p>
                );
              })}
            </StartBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              {buttonClicked == "viewFromSpace"
                ? infoNail
                : buttonClicked == "viewFromEarth"
                ? infoWater
                : infoText}
            </InfoBox>
          </Popup>
          <Popup popupid={3}>
            <ResetBox>
              <p>{resetPopupText}</p>
            </ResetBox>
          </Popup>
          <Popup popupid={4} autoFocus>
            <CompletionPopup />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
