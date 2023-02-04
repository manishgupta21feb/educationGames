import React, { useEffect } from "react";
import View from "../../../app/components/View";

import { Popup } from "../../../app/components/Popup";
import Header from "../../containers/HeaderContainer";
import InformationBox from "../../containers/InfoContainer";
import ResetDialogBox from "../../containers/ResetContainer";
import PopupContainer from "../../containers/PopUpContainer";
import InstructionBox from "../../containers/InstructionBox";

import ThumbnailsContainer from "../../containers/ThumbnailsContainer";
import Fullview from "../../containers/FullviewContainer";
import CompletionScreenContainer from "../../containers/CompletionScreenContainer";
export default (props) => {
  const {
    activityHeading,
    initialInfoDialog,
    informationTextFirst,
    informationTextSecond,
    isPopupActive,
    onStartActivity,
    resetDialogText,
    firstcarvscarVisited,
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
        <div className="fullview-wrap ">
          <View layout="fullview"
           ariahidden={isPopupActive  || null}>
            {firstcarvscarVisited ? <Fullview /> : <ThumbnailsContainer />}
          </View>
        </div>
        <PopupContainer>
          <Popup popupid={1}>
            <InstructionBox>
              <p>{initialInfoDialog.heading}</p>
            </InstructionBox>
          </Popup>
          <Popup popupid={6}>
            <ResetDialogBox>
              <p>{resetDialogText}</p>
            </ResetDialogBox>
          </Popup>
          <Popup popupid={4}>
            <InformationBox>
            {firstcarvscarVisited ?  <p>{informationTextFirst}</p> :  <p>{informationTextSecond}</p>}

            </InformationBox>
          </Popup>
          <Popup popupid={7} autoFocus>
            <CompletionScreenContainer />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
