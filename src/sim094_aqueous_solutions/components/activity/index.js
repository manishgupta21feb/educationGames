import React, { useState, useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";

import Header from "../../containers/HeaderContainer";
import StartBox from "../../containers/StartBox";
import InfoBox from "../../containers/InfoBox";
import ResetBox from "../../containers/ResetBox";
import LeftView from "../../containers/LeftViewContainer";
import RightView from "../../containers/RightViewContainer";
import IncorrectToast from "../../containers/IncorrectToast";
import SuccessToast from "../../containers/SuccessToast";
import LevelOneCompletionContainer from "../../containers/LevelOneCompletionContainer";
import LevelTwoCompletionContainer from "../../containers/LevelTwoCompletionContainer";

const activity = (props) => {
  const [toastMessage, setToastMessage] = useState(null);

  const {
    introText,
    infoText,
    resetPopupText,
    isPopupActive,
    answer,
    showToastMessage,
  } = props;

  useEffect(() => {
    props.onInit();
  }, []);

  useEffect(() => {
    let toastMessage = null;

    if (showToastMessage) {
      if (answer) {
        toastMessage = <SuccessToast />;
      } else if (!answer) {
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

        <View layout="leftright" ariahidden={isPopupActive}>
          <LeftView></LeftView>
          <RightView></RightView>
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
          <Popup popupid={4} autoFocus>
            <LevelOneCompletionContainer />
          </Popup>
          <Popup popupid={5} autoFocus>
            <LevelTwoCompletionContainer />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
