import React, { useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import InfoBox from "../../containers/InfoBox";
import Header from "../../containers/HeaderContainer";
import Center from "../../containers/CenterAreaContainer";
import PopupContainer from "../../containers/PopUpContainer";
import ResetContainer from "../../containers/ResetContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";
import LevelOneCompletionContainer from "../../containers/LevelOneCompletionContainer";
import LevelTwoCompletionContainer from "../../containers/LevelTwoCompletionContainer";
import CorrectToastContainer from "../../containers/CorrectToastContainer";
import IncorrectToastContainer from "../../containers/IncorrectToastContainer";
import "./style.scss";

export default (props) => {
  const {
    data,
    onInit,
    isPopupActive,
    observationMotive,
    showToastMessage,
    answerAttempted,
    correctAttempt,
  } = props;

  useEffect(() => {
    onInit();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {observationMotive}
        </h1>
        {showToastMessage && answerAttempted ? (
          correctAttempt ? (
            <CorrectToastContainer />
          ) : (
            <IncorrectToastContainer />
          )
        ) : null}
        <View ariahidden={isPopupActive} className="view-container">
          <Center />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <StartInformationBox>
              <p
                dangerouslySetInnerHTML={{
                  __html: data.instructionBoxContent.label,
                }}
              ></p>
              <div className="sr-image instruction-area ">
                <img
                  src={data.instructionBoxContent.img}
                  alt={data.instructionBoxContent.alt}
                />
              </div>
            </StartInformationBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p dangerouslySetInnerHTML={{ __html: data.InfoBoxContent }}></p>
            </InfoBox>
          </Popup>
          <Popup popupid={4}>
            <ResetContainer>
              <p>{data.resetMsgContent}</p>
            </ResetContainer>
          </Popup>
          <Popup popupid={5} autoFocus>
            <LevelOneCompletionContainer />
          </Popup>
          <Popup popupid={6} autoFocus>
            <LevelTwoCompletionContainer />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
