import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import Header from "../../containers/HeaderContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";
import FullView from "../../containers/FullViewContainer";
import ResetContainer from "../../containers/ResetContainer";
import CompletionContainer from "../../containers/CompletionContainer";

const activity = (props) => {
  const {data,onInit,isPopupActive}=props;
  
  useEffect(()=>{
    onInit();
  },[])
  return (
    <div className="activity-container">
     <Header />
      <div role="main">
      <View  ariahidden={isPopupActive}>
        <FullView/>
        </View>
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
 
          <Popup popupid={5} autoFocus>
            <CompletionContainer/>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
