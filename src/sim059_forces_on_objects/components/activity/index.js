import React, { useEffect, useRef, useState } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import Header from "../../containers/HeaderContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";
import ResetContainer from "../../containers/ResetContainer";
import TransitionContainer from "../../containers/TransitionContainer";
import CompletionContainer from "../../containers/CompletionContainer";
import CorrectToastContainer from "../../containers/SuccessToast";
import InCorrectToastConatiner from "../../containers/IncorrectToastContainer.js";
import BottomArea from "../../containers/BottomContainer";
import HotspotArea from "../../containers/HotspotArea";
import FullContainer from "../../containers/FullViewContainer"
const activity = (props) => {
  const { data, onInit, isPopupActive, currentLayout,
    correctAttempt,
    answerSubmitted,
    showToastMessage, } = props;

  useEffect(() => {
    onInit();
  }, [])


  return (
    <div className="activity-container">
      <Header />

      <div role="main">
        {showToastMessage && answerSubmitted ? (
          correctAttempt ? (
            <CorrectToastContainer />
          ) : (
            <InCorrectToastConatiner />
          )
        ) : null}
        {currentLayout == "topbottom" &&
          <View layout={currentLayout} ariahidden={isPopupActive}>
            <HotspotArea />
            <BottomArea />
          </View>
        }
        {currentLayout == "full" &&
          <View ariahidden={isPopupActive}>
            <FullContainer />
          </View>
        }
        <PopupContainer>
          <Popup popupid={1}>
            <StartInformationBox>
              <p>{data.instructionBoxContent}</p>
            </StartInformationBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p dangerouslySetInnerHTML={{ __html: data.hintContent }}></p>
            </InfoBox>
          </Popup>
          <Popup popupid={3}>
            <ResetContainer>
              <p>{data.resetMsgContent}</p>
            </ResetContainer>
          </Popup>
          <Popup popupid={4} autoFocus>
            <TransitionContainer />
          </Popup>
          <Popup popupid={5} autoFocus>
            <CompletionContainer />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
