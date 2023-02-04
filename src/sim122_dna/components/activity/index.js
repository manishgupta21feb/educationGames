import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import TopSectionContainer from '../../containers/TopSectionContainer';
import BottomSectionContainer from '../../containers/BottomSectionContainer';
import Header from '../../containers/HeaderContainer';
import InstructionBox from '../../containers/InstructionBox';
import CompletionScreenContainer from '../../containers/CompletionScreenContainer';
import CompleteResetContainer from '../../containers/CompleteResetContainer';
import ResetDialogBox from '../../containers/ResetDialogBox';
import FullViewContainer from '../../containers/FullViewContainer';
import CorrectToastContainer from '../../containers/CorrectToastContainer';
import InCorrectToastContainer from '../../containers/InCorrectToastContainer';
import LeftSectionContainer from '../../containers/LeftSectionContainer';
import RightSectionContainer from "../../containers/RightSectionContainer";

const activity = (props) => {

  const {
    data,
    isPopupActive,
    onStartActivity,
    screenStatus,
    showToastMessage,
    answerAttempted,
    correctAttempt,
    activityHeading,
    zIndexStatus,
    allImagesData
  } = props;

  useEffect(() => {
    onStartActivity();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main" className={zIndexStatus ? 'z-index' : ''}>
        <div className="preload-images" aria-hidden="true">
          {
            allImagesData.map((imgData, i) =>
              <img src={imgData} key={i} />
            )
          }
        </div>
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
          (screenStatus == 1 || screenStatus == 3 || screenStatus == 5) &&
          <View
            layout="topbottom"
            ariahidden={isPopupActive || null}
            tabindex={isPopupActive ? "-1" : null}
          >
            <TopSectionContainer />
            <BottomSectionContainer />
          </View>
        }
        {
          (screenStatus == 2 || screenStatus == 4) &&
          <View
            layout=""
            ariahidden={isPopupActive || null}
            tabindex={isPopupActive ? "-1" : null}
          >
            <FullViewContainer />
          </View>
        }
        {
          screenStatus == 6 &&
          <View
            layout="leftright"
            ariahidden={isPopupActive || null}
            tabindex={isPopupActive ? "-1" : null}
          >
            <LeftSectionContainer />
            <RightSectionContainer />
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
