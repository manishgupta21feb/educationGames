import React, { useEffect, useRef } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import LeftSectionContainer from '../../containers/LeftSectionContainer';
import RightSectionContainer from '../../containers/RightSectionContainer';
import InstructionBox from "../../containers/InstructionBox";
import Header from '../../containers/HeaderContainer';
import InfoBox from '../../containers/InfoBox';
import CorrectToastContainer from '../../containers/CorrectToastContainer';
import IncorrectToastContainer from '../../containers/IncorrectToastContainer';
import CompleteResetContainer from "../../containers/CompleteResetContainer";
import ResetDialogBox from '../../containers/ResetDialogBox';

const activity = (props) => {

  const {
    data,
    isPopupActive,
    onStartActivity,
    showToastMessage,
    answerAttempted,
    correctAttempt,
    activityHeading
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
        {showToastMessage && answerAttempted ? (
          correctAttempt ? (
            <CorrectToastContainer />
          ) : (
            <IncorrectToastContainer />
          )
        ) : null}
        <View
          layout="leftright"
          ariahidden={isPopupActive || null}
          tabindex={isPopupActive ? "-1" : null}
        >
          <LeftSectionContainer />
          <RightSectionContainer />
        </View>
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
