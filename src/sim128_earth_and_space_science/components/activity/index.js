import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import FullSectionContainer from '../../containers/FullSectionContainer';
import InstructionBox from '../../containers/InstructionBox';
import Header from '../../containers/HeaderContainer';
import ResetDialogBox from '../../containers/ResetDialogBox';
import CompleteResetContainer from '../../containers/CompleteResetContainer';
import CorrectToastContainer from "../../containers/CorrecToastContainer";
import IncorrectToastContainer from '../../containers/IncorrectToastContainer';
import '../../stylesheets/activity/main.scss';

const activity = (props) => {

  const {
    data,
    isPopupActive,
    onStartActivity,
    showToastMessage,
    answerAttempted,
    correctAttempt
  } = props;

  useEffect(() => {
    onStartActivity();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {data.activityHeading}
        </h1>
        {showToastMessage && answerAttempted ? (
          correctAttempt ? (
            <CorrectToastContainer />
          ) : (
            <IncorrectToastContainer />
          )
        ) : null}
        <View
          ariahidden={isPopupActive || null}
          tabindex={isPopupActive ? "-1" : null}
        >
          <FullSectionContainer />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InstructionBox>
              <p>{data.instructionBoxContent}</p>
              <div className="instruction-img-wrapper">
                <img className="sr-only sr-image" alt={data.mainInstructionAlt} />
              </div>
              <div className="main-instruction-img"></div>
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
