import React, { useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import InfoBox from "../../containers/InfoBox";
import Header from "../../containers/HeaderContainer";
import PopupContainer from "../../containers/PopUpContainer";
import InstructionBox from "../../containers/InstructionBox";
import ResetDialogBox from "../../containers/ResetDialogBox";
import TopSectionContainer from "../../containers/TopSectionContainer";
import CorrectToastContainer from "../../containers/CorrectToastContainer";
import CompleteResetContainer from "../../containers/CompleteResetContainer";
import BottomSectionContainer from "../../containers/BottomSectionContainer";
import IncorrectToastContainer from "../../containers/IncorrectToastContainer";
import CompletionScreenContainer from "../../containers/CompletionScreenContainer";

export default (props) => {
  const {
    data,
    isPopupActive,
    correctAttempt,
    onStartActivity,
    answerAttempted,
    activityHeading,
    showToastMessage,
  } = props;

  useEffect(() => {
    onStartActivity();
  }, []);

  return (
    <>
      <div className="activity-container">
        <Header />
        <div role="main">
          <h1 className="sr-only" aria-hidden={isPopupActive}>
            {activityHeading}
          </h1>
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
            <Popup popupid={6} autoFocus>
              <CompletionScreenContainer />
            </Popup>
            <Popup popupid={7} autoFocus>
              <CompleteResetContainer />
            </Popup>
            <Popup popupid={8}>
              <ResetDialogBox>
                <p>{data.resetMsgContent}</p>
              </ResetDialogBox>
            </Popup>
          </PopupContainer>
        </div>
      </div>
    </>
  );
};
