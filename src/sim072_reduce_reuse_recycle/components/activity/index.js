import React, { useEffect } from "react";

import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import Header from "../../containers/HeaderContainer";
import InstructionBox from "../../containers/InstructionBox";
import InfoBox from "../../containers/InfoBox";
import PopupContainer from "../../containers/PopUpContainer";
import CorrectToastContainer from "../../containers/CorrectToastContainer";
import IncorrectToastContainer from "../../containers/IncorrectToastContainer";
import ResetDialogBox from "../../containers/ResetDialogBox";
import CompletionScreenContainer from "../../containers/CompletionScreenContainer";
import TransitionPopup from "../../containers/TransitionPopup";
import HotspotView from './../../containers/hotspotContainer';
import QuestionView from './../../containers/questionContainer';

export default (props) => {

  const {
    data,
    onStartActivity,
    isPopupActive,
    showToastMessage,
    answerAttempted,
    correctAttempt,
    questionView
  } = props;

  useEffect(() => {
    onStartActivity();
  }, []);

  return (
    <>
      <div className="activity-container">
        <Header />
        <div role="main">
          <h1 className="sr-only" aria-hidden={isPopupActive} >{data.h1InfoTextA11Y}</h1>
          {showToastMessage && answerAttempted ? (
            correctAttempt ? (
              <CorrectToastContainer />
            ) : (
              <IncorrectToastContainer />
            )
          ) : null}
          <View
            ariahidden={isPopupActive || null}
            tabindex={isPopupActive ? "-1" : null}>
            {!questionView ? <HotspotView /> : <QuestionView />}
          </View>
          <PopupContainer>
            <Popup popupid={1}>
              <InstructionBox>
                <p>{data.instructionBoxContent}</p>
              </InstructionBox>
            </Popup>
            <Popup popupid={4}>
              <InfoBox>
                <p
                  dangerouslySetInnerHTML={{ __html: data.InfoBoxContent }}
                ></p>
              </InfoBox>
            </Popup>
            <Popup popupid={7} autoFocus>
              <CompletionScreenContainer />
            </Popup>
            <Popup popupid={8}>
              <ResetDialogBox>
                <p>{data.resetMsgContent}</p>
              </ResetDialogBox>
            </Popup>
            <Popup popupid={6} autoFocus>
              <TransitionPopup />
            </Popup>
          </PopupContainer>
        </div>
      </div>
    </>
  );
};
