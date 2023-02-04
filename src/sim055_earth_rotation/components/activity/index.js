import React, { useEffect, useState } from "react";
import Header from "../../containers/HeaderContainer";
import InfoBox from "../../containers/InfoBox";
import StartBox from "../../containers/StartBox";
import ResetBox from "../../containers/ResetBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import SuccessToast from "../../containers/SuccessToast";
import IncorrectToast from "../../containers/IncorrectToast";

import FullArea from "../../containers/FullAreaContainer";

const activity = (props) => {
  const [toastMessage, setToastMessage] = useState(null);

  const {
    introText,
    infoText,
    resetPopupText,
    isPopupActive,
    checkAnswer,
    showToastMessage,
  } = props;

  useEffect(() => {
    props.onInit();
  }, []);

  useEffect(() => {
    let toastMessage = null;

    if (showToastMessage) {
      if (checkAnswer) {
        toastMessage = <SuccessToast />;
      } else if (!checkAnswer) {
        toastMessage = <IncorrectToast />;
      }
    }
    setToastMessage(toastMessage);
  }, [showToastMessage]);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        {toastMessage}
        <View aria-hidden={isPopupActive}>
          <FullArea />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <StartBox>
              <p>{introText}</p>
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
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
