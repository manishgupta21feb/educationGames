import React, { useEffect } from "react";

import View from "../../../app/components/View";

import Header from "../../containers/HeaderContainer";
import InstructionBox from "../../containers/InstructionBox";
import InfoBox from "../../containers/InfoBox";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import ResetDialogBox from "../../containers/ResetDialogBox";

import AnimationScreen from "../../containers/AnimationScreenContainer";
import HomeScreen from "../../containers/HomeScreenContainer";

import "./style.scss";

export default (props) => {

  const {
    data,
    onStartActivity,
    isPopupActive,
    homeScreen,
    infoBox
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
          <div className="sr-only preload-image preload-image-1"></div>
          <div className="sr-only preload-image preload-image-2"></div>
          <div className="sr-only preload-image preload-image-3"></div>
          <div className="sr-only preload-image preload-image-4"></div>
          <View ariahidden={isPopupActive || null}>
            {homeScreen ? <HomeScreen /> : <AnimationScreen />}
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
                  dangerouslySetInnerHTML={{ __html: infoBox }}
                ></p>
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
    </>
  );
};
