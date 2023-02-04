import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import LeftSectionContainer from '../../containers/LeftSectionContainer';
import RightSectionContainer from '../../containers/RightSectionContainer';
import InstructionBox from '../../containers/InstructionBox';
import Header from '../../containers/HeaderContainer';
import ResetDialogBox from '../../containers/ResetDialogBox';

const activity = (props) => {

  const {
    data,
    activityHeading,
    isPopupActive,
    onStartActivity,
    zindexStatus
  } = props;

  useEffect(() => {
    onStartActivity();
  }, []);

  return (
    <div className="activity-container">
      <Header/>
      <div role="main" className={zindexStatus ? 'z-index' : ''}>
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {activityHeading}
        </h1>
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
