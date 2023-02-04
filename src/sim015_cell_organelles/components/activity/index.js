import React, { useEffect, useState } from "react";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import Header from "../../containers/HeaderContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";
import ResetContainer from "../../containers/ResetContainer";
import InfoBox from "../../containers/InfoBox";
import CorrectToastContainer from "../../containers/SuccessToast";
import InCorrectToastConatiner from "../../containers/IncorrectToastContainer.js";
import LevelOneCompletionContainer from "../../containers/LevelOneCompletionContainer";
import CompletionConatiner from "../../containers/CompletionContainer";
import View from "../../../app/components/View";
import TopContainer from "../../containers/TopAreaSectionContainer";
import BottomContainer from "../../containers/BottomAreaSectionContainer";
import LeftAreaContainer from "../../containers/LeftAreaContainer";
import RightAreaContainer from "../../containers/RightAreaContainer";
import FullContainer from "../../containers/FullContainer";

export default (props) => {
  const [selectedView, setSelectedView] = useState(null);
  const {
    data,
    togglePopup,
    currentLayout,
    isPopupActive,
    correctAttempt,
    answerSubmitted,
    showToastMessage,
  } = props;

  useEffect(() => {
    togglePopup();
  }, []);

  useEffect(() => {
    if (currentLayout) {
      let view = null;
      switch (currentLayout) {
        case "topbottom":
          view = (
            <View layout={currentLayout} ariahidden={isPopupActive}>
              <TopContainer />
              <BottomContainer />
            </View>
          );
          break;
        case "leftright":
          view = (
            <View layout={currentLayout} ariahidden={isPopupActive}>
              <LeftAreaContainer />
              <RightAreaContainer />
            </View>
          );
          break;
        case "full":
          view = (
            <View ariahidden={isPopupActive}>
              <FullContainer />
            </View>
          );
          break;
        default:
          view = null;
      }
      setSelectedView(view);
    }
  }, [currentLayout, isPopupActive]);

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
        {selectedView}
        <PopupContainer>
          <Popup popupid={1}>
            <StartInformationBox>
              <p>{data.instructionBoxContent}</p>
            </StartInformationBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p dangerouslySetInnerHTML={{ __html: data.InfoBoxContent }}></p>
            </InfoBox>
          </Popup>
          <Popup popupid={3} autoFocus>
            <LevelOneCompletionContainer />
          </Popup>
          <Popup popupid={4} autoFocus>
            <CompletionConatiner />
          </Popup>
          <Popup popupid={5}>
            <ResetContainer>
              <p>{data.resetMsgContent}</p>
            </ResetContainer>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
