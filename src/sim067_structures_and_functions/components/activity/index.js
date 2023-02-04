import React, { useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import InfoBox from "../../containers/InfoBox";
import Header from "../../containers/HeaderContainer";
import Left from "../../containers/LeftAreaContainer";
import Right from "../../containers/RightAreaContainer";
import PopupContainer from "../../containers/PopUpContainer";
import ResetContainer from "../../containers/ResetContainer";
import CompletionContainer from "../../containers/CompletionContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";
import Center from "../../containers/CenterAreaContainer";

import "./style.scss";

export default (props) => {
  const {
    data,
    onInit,
    toastMsg,
    isPopupActive,
    showToastMessage,
    getLabels,
    observationMotive,
    getCurrentScreenAndEnvironment,
    setIsVisitedType,
  } = props;

  useEffect(() => {
    onInit();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {observationMotive}
        </h1>

        {getCurrentScreenAndEnvironment.screen == 0 ? (
          <View ariahidden={isPopupActive}>
            <Center />
          </View>
        ) : (
          <View
            layout="leftright"
            ariahidden={isPopupActive}
            tabindex={isPopupActive ? "-1" : null}
          >
            <Left />
            <Right />
          </View>
        )}
        <PopupContainer>
          <Popup popupid={1}>
            <StartInformationBox>
              <p>{data.instructionBoxContent.label}</p>
            </StartInformationBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p dangerouslySetInnerHTML={{ __html: data.InfoBoxContent }}></p>
            </InfoBox>
          </Popup>
          <Popup popupid={3} autoFocus>
            <CompletionContainer />
          </Popup>
          <Popup popupid={4}>
            <ResetContainer>
              <p>{data.resetMsgContent}</p>
            </ResetContainer>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
