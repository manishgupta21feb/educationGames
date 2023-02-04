import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import CorrectToastContainer from '../../containers/CorrectToastContainer';
import InCorrectToastContainer from '../../containers/InCorrectToastContainer';
import InstructionBox from '../../containers/InstructionBox';
import CompleteResetContainer from '../../containers/CompleteResetContainer';
import ResetDialogBox from '../../containers/ResetDialogBox';
import Header from '../../containers/HeaderContainer';
import CompletionScreenContainer from '../../containers/CompletionScreenContainer';
import FullViewContainer from '../../containers/FullViewContainer';
import TopSectionContainer from '../../containers/TopSectionContainer';
import BottomSectionContainer from '../../containers/BottomSectionContainer';

const activity = (props) => {

  const {
    data,
    showToastMessage,
    answerAttempted,
    correctAttempt,
    isPopupActive,
    onStartActivity,
    screenStatus,
    allImagesData
  } = props;

  useEffect(() => {
    onStartActivity();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        <div className="preload-images" aria-hidden="true">
          {
            allImagesData.map((imgData, i) =>
              <img src={imgData} key={i} />
            )
          }
        </div>
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {data.activityHeading}
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
          (screenStatus == 'main-screen' ||
            screenStatus == 'carbon-explore' ||
            screenStatus == 'carbonDioxide-explore' ||
            screenStatus == 'nitrogen-explore'
          ) &&
          <View
            layout=""
            ariahidden={isPopupActive || null}
            tabindex={isPopupActive ? "-1" : null}
          >
            <FullViewContainer />
          </View>
        }
        {
          (screenStatus == 'carbon-info' ||
            screenStatus == 'photosynthesis' ||
            screenStatus == 'respiration' ||
            screenStatus == 'carbonDioxide-info' ||
            screenStatus == 'ocean' ||
            screenStatus == 'fossil-fuels' ||
            screenStatus == 'nitrogen-info' ||
            screenStatus == 'nitrogen-fixation' ||
            screenStatus == 'nitrogen-ND' ||
            screenStatus == 'carbon-and-nitrogen' ||
            screenStatus == 'climate'
          ) &&
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
              <p className="instruction-box-text" aria-label={data.instructionBoxContent.ariaLabel}>
                {data.instructionBoxContent.text.map((item, i) =>
                  <span
                    key={i}
                    dangerouslySetInnerHTML={{
                      __html: item
                    }}
                  ></span>
                )}
              </p>
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
