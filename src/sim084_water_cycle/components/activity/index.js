import React, { useEffect, useState } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import InfoBox from "../../containers/InfoBox";
import Header from "../../containers/HeaderContainer";

import SuccessToast from "../../containers/ToastContainerSuccess";
import PopupContainer from "../../containers/PopUpContainer";
import ResetContainer from "../../containers/ResetContainer";
import FailureToast from "../../containers/ToastContainerFailure";
import CompletionContainer from "../../containers/CompletionContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";
import Droppable from "../../containers/DroppableContainer";
import Draggable from "../../containers/DraggableContainer";

import "./style.scss";

export default (props) => {
  const {
    data,
    onInit,
    mainImg,
    isPopupActive,
    updateToastMsg,
    selectedDraggable,
    showToastMessage,
  } = props;

  useEffect(() => {
    onInit();
  }, []);

  return (
    <div className={`activity-container`}>
      <div>
        <Header />
      </div>
      <div
        role="main"
        className={selectedDraggable && selectedDraggable.id ? "z-index" : ""}
      >
        {updateToastMsg == "success" && showToastMessage ? (
          <SuccessToast />
        ) : updateToastMsg == "" && !showToastMessage ? null : (
          <FailureToast />
        )}
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {data.headingLeaveOne}
        </h1>

        <View ariahidden={isPopupActive} layout="leftright">
          <Droppable />
          <Draggable />
        </View>

        <PopupContainer>
          <Popup popupid={1}>
            <StartInformationBox>
              <p>{data.instructionBoxContent}</p>
              <img
                src={mainImg.img}
                alt={mainImg.alt}
                className="img-position"
              />
            </StartInformationBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p>{data.infoText}</p>
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
