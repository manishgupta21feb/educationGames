import React, { useEffect, useRef } from "react";

import { Popup } from "../../../app/components/Popup";

import HintBox from "../../containers/HintBox";
import View from "../../../app/components/View";
import Header from "../../containers/HeaderContainer";
import SuccessToast from "../../containers/SuccessToast";
import MainContainer from "../../containers/MainContainer";
import PopupContainer from "../../containers/PopUpContainer";
import ResetContainer from "../../containers/ResetContainer";
import FailureToast from "../../containers/IncorrectToastContainer";
import CompletionContainer from "../../containers/CompletionContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";
import "./style.scss";

const activity = ({
  data,
  onInit,
  toastMsg,
  isPopupActive,
  showToastMessage,
}) => {
  useEffect(() => {
    onInit();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main" className="sim103_activity">
        {toastMsg == "correct" && showToastMessage && <SuccessToast />}
        {toastMsg == "incorrect" && showToastMessage && <FailureToast />}
        <h1 aria-hidden={isPopupActive} className="sr-only">
          {data.learningObjective}
        </h1>
        <View ariahidden={isPopupActive}>
          <MainContainer />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <StartInformationBox>
              <p>{data.instructionBoxContent}</p>
              <div className="intro-popup">
                <div className="intro-popup-image">
                  <img className="sr-only sr-image" alt={data.popupImgAlt} />
                </div>
              </div>
            </StartInformationBox>
          </Popup>
          <Popup popupid={2}>
            <HintBox>
              <p dangerouslySetInnerHTML={{ __html: data.hintContent }}></p>
            </HintBox>
          </Popup>
          <Popup popupid={3}>
            <ResetContainer>
              <p>{data.resetMsgContent}</p>
            </ResetContainer>
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
