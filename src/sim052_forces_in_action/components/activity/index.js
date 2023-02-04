import React, { useEffect, useState } from "react";
import Header from "../../containers/HeaderContainer";
import InfoBox from "../../containers/InfoBox";
import StartBox from "../../containers/StartBox";
import FeedbackToast from "../../containers/FeedbackToast";
import ResetBox from "../../containers/ResetBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import SuccessToast from "../../containers/SuccessToast";

import FullArea from "../../containers/FullAreaContainer";

const activity = (props) => {
  const {
    introText,
    infoText,
    resetPopupText,
    isPopupActive,
    observationMotive,
    feedTostMessage,
  } = props;

  useEffect(() => {
    props.onInit();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        <h1 className="sr-only">{observationMotive}</h1>
        <View ariahidden={isPopupActive}>
          <FullArea />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <StartBox>
              <p dangerouslySetInnerHTML={{ __html: introText }} />
            </StartBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p>{infoText}</p>
            </InfoBox>
          </Popup>
          <Popup popupid={3}>
            <ResetBox>
              <p>{resetPopupText}</p>
            </ResetBox>
          </Popup>
          <Popup popupid={4}>
            <FeedbackToast>
              <p dangerouslySetInnerHTML={{ __html: feedTostMessage }} />
            </FeedbackToast>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
