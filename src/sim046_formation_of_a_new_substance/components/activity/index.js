import React, { useEffect, useState } from "react";
import InfoBox from "../../containers/InfoBox";
import StartBox from "../../containers/StartBox";
import ResetBox from "../../containers/ResetBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import LevelOneCompletionContainer from "../../containers/LevelOneCompletionContainer";
import LevelTwoCompletionContainer from "../../containers/LevelTwoCompletionContainer";

import Header from "../../containers/HeaderContainer";
import TopArea from "../../containers/TopContainer";
import BottomArea from "../../containers/BottomContainer";
import FullArea from "../Dnd/FullArea";
import SuccessToast from "../../containers/SuccessToast";
import IncorrectToast from "../../containers/IncorrectToast";

const activity = (props) => {
  const [toastMessage, setToastMessage] = useState(null);

  const {
    infoText,
    introductoryText,
    showToastMessage,
    checkAns,
    levelOneComplete,
    dragDropComplete,
    resetPopupText,
    observationMotive,
    bgImgAlt,
    isPopupActive,
  } = props;

  useEffect(() => {
    props.onInit();
  }, []);

  useEffect(() => {
    let toastMessage = null;

    if (showToastMessage) {
      if (dragDropComplete || checkAns) {
        toastMessage = <SuccessToast />;
      } else if (!dragDropComplete || !checkAns) {
        toastMessage = <IncorrectToast />;
      }
    }
    setToastMessage(toastMessage);
  }, [showToastMessage]);

  return (
    <>
      <div className="activity-container activity-container--sim-46">
        <Header />
        <div role="main">
          {!levelOneComplete ? (
            <h1 className="sr-only" aria-hidden={isPopupActive}>
              {observationMotive}
            </h1>
          ) : null}

          {toastMessage}
          {levelOneComplete ? (
            <View ariahidden={isPopupActive}>
              <FullArea />
            </View>
          ) : (
            <View layout="topbottom" ariahidden={isPopupActive}>
              <TopArea bgImgAlt={bgImgAlt} />
              <BottomArea />
            </View>
          )}

          <PopupContainer>
            <Popup popupid={1}>
              <StartBox>
                <p>{introductoryText}</p>
              </StartBox>
            </Popup>
            <Popup popupid={2}>
              <InfoBox>
                <p>{infoText.title}</p>
                <p className="list-title">{infoText.subTitle}</p>
                <ul className="simple-list">
                  {infoText.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
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
    </>
  );
};

export default activity;
