import React, { useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import InfoBox from "../../containers/InfoBox";
import Header from "../../containers/HeaderContainer";
import Left from "../../containers/LeftAreaContainer";
import Right from "../../containers/RightAreaContainer";
import CorrectToast from "../../containers/CorrectToast";
import PopupContainer from "../../containers/PopUpContainer";
import ResetContainer from "../../containers/ResetContainer";
import IncorrectToast from "../../containers/IncorrectToast";
import CompletionContainer from "../../containers/CompletionContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";

import "./style.scss";

export default (props) => {
  const {
    data,
    onInit,
    toastMsg,
    isPopupActive,
    showToastMessage,
    selectedDraggable,
    getLabels,
    observationMotive,
  } = props;

  useEffect(() => {
    onInit();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div
        role="main"
        className={selectedDraggable && selectedDraggable.id ? "z-index" : ""}
      >
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {observationMotive}
        </h1>

        {showToastMessage ? (
          toastMsg == "incorrect" ? (
            <IncorrectToast />
          ) : (
            <CorrectToast />
          )
        ) : null}

        <View
          layout="leftright"
          ariahidden={isPopupActive}
          tabindex={isPopupActive ? "-1" : null}
        >
          <Left />
          <Right />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <StartInformationBox>
              <p>{data.instructionBoxContent.label}</p>
              <div className="sr-image instruction-area">
                <img
                  src={data.instructionBoxContent.img}
                  alt={data.instructionBoxContent.alt}
                />
              </div>
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
