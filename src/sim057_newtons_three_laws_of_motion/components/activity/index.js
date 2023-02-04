import React, { useEffect } from "react";

import Header from "../../containers/HeaderContainer";
import InstructionBox from "../../containers/InstructionBox";
import InfoBox from "../../containers/InfoBox";
import TopSectionContainer from "../../containers/TopSectionContainer";
import BottomSectionContainer from "../../containers/BottomSectionContainer";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import View from "../../../app/components/View";
import CorrectToastContainer from "../../containers/CorrectToastContainer";
import IncorrectToastContainer from "../../containers/IncorrectToastContainer";
import ResetDialogBox from "../../containers/ResetDialogBox";
import CompleteResetContainer from "../../containers/CompleteResetContainer";
import TransitionPopup from "../../containers/TransitionPopup";

export default (props) => {
  const {
    data,
    isPopupActive,
    onStartActivity,
    correctAttempt,
    answerAttempted,
    showToastMessage,
    altInfoText,
    infoText
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
            layout="topbottom"
            ariahidden={isPopupActive || null}
            tabindex={isPopupActive ? "-1" : null}
          >
            <TopSectionContainer />
            <BottomSectionContainer />
          </View>
          <PopupContainer>
            <Popup popupid={1}>
              <InstructionBox>
                <p dangerouslySetInnerHTML={{ __html: data.instructionBoxContent }}></p>
              </InstructionBox>
            </Popup>
            <Popup popupid={4}>
              <InfoBox>
                {/* <p className="sr-only"></span></p> */}
                <p>
                  <span className="sr-only">{altInfoText}</span>
                  <span aria-hidden={true}
                    dangerouslySetInnerHTML={{ __html: infoText }}></span>
                </p>
              </InfoBox>
            </Popup>
            <Popup popupid={8}>
              <ResetDialogBox>
                <p>{data.resetMsgContent}</p>
              </ResetDialogBox>
            </Popup>
            <Popup popupid={6} autoFocus>
              <TransitionPopup />
            </Popup>
            <Popup popupid={5} autoFocus>
              <CompleteResetContainer />
            </Popup>
          </PopupContainer>
        </div>
      </div>
    </>
  );
};
