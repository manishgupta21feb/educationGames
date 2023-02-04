import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import TopSectionContainer from '../../containers/TopSectionContainer';
import BottomSectionContainer from '../../containers/BottomSectionContainer';
import Header from '../../containers/HeaderContainer';
import CorrectToastContainer from '../../containers/CorrectToastContainer';
import InCorrectToastContainer from '../../containers/InCorrectToastContainer';
import InstructionBox from '../../containers/InstructionBox';
import CompletionScreenContainer from '../../containers/CompletionScreenContainer';
import FullViewContainer from '../../containers/FullViewContainer';
import CompleteResetContainer from "../../containers/CompleteResetContainer";
import ResetDialogBox from '../../containers/ResetDialogBox';

const activity = (props) => {

  const {
    data,
    isPopupActive,
    onStartActivity,
    correctAttempt,
    answerAttempted,
    showStatic,
    showToastMessage,
    activityHeading,
    infoDialogText
  } = props;

  useEffect(() => {
    onStartActivity();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {activityHeading}
        </h1>
        {
          showToastMessage && answerAttempted ? (
            correctAttempt ?
              <CorrectToastContainer />
              :
              <InCorrectToastContainer />
          )
            : null
        }
        {
          showStatic ?
            <View
              layout=""
              ariahidden={isPopupActive || null}
              tabindex={isPopupActive ? "-1" : null}
            >
              <FullViewContainer />
            </View>
            :
            <View
              layout="topbottom"
              ariahidden={isPopupActive || null}
              tabindex={isPopupActive ? "-1" : null}
            >
              <TopSectionContainer />
              <BottomSectionContainer />
            </View>
        }
        <PopupContainer>
          <Popup popupid={1}>
            <InstructionBox>
              <p>{data.instructionBoxContent}</p>
            </InstructionBox>
          </Popup>
          <Popup popupid={4}>
            <InfoBox>
              <p>{data.infoDialogText}</p>
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
  );
};

export default activity;
