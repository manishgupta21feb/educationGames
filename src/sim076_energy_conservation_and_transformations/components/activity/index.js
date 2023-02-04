import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import Header from "../../containers/HeaderContainer";
import ResetContainer from "../../containers/ResetContainer";
import TransitionContainer from "../../containers/TransitionContainer";
import CompletionContainer from "../../containers/CompletionContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";
import ScreenOneTop from "../../containers/ScreenOneTopContainer";
import ScreenOneBottom from "../../containers/ScreenOneBottomContainer";
import ScreenTwoTop from "../../containers/ScreenTwoTopContainer";
import ScrrenTwoBottom from "../../containers/ScreenTwoBottomContainer";
const activity = (props) => {
  const { isPopupActive, onInit, data, getScreen } = props
  useEffect(() => {
    onInit();
  }, [])
  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        {getScreen == 0 && <View layout="topbottom" ariahidden={isPopupActive}>
          <ScreenOneTop />
          <ScreenOneBottom />
        </View>
        }
        {getScreen ==1 && <View layout="topbottom" ariahidden={isPopupActive}>
         <ScreenTwoTop/>
         <ScrrenTwoBottom/>
        </View> }
        <PopupContainer>
          <Popup popupid={1}>
            <StartInformationBox>
              <p>{data.instructionBoxContent}</p>
            </StartInformationBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p dangerouslySetInnerHTML={{ __html: data.hintContent }}></p>
            </InfoBox>
          </Popup>
          <Popup popupid={3}>
            <ResetContainer>
              <p>{data.resetMsgContent}</p>
            </ResetContainer>
          </Popup>
          <Popup popupid={4} autoFocus>
            <TransitionContainer />
          </Popup>
          <Popup popupid={5} autoFocus>
            <CompletionContainer />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
