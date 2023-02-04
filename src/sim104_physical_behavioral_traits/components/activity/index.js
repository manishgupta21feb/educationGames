import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import Header from "../../containers/HeaderContainer";

import ResetContainer from "../../containers/ResetContainer";
import CompletionContainer from "../../containers/CompletionContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";

import BehaviorIncorrect from "../../containers/BehaviorIncorrect";
import BehaviorsInstinctCorrect from "../../containers/BehaviorsInstinctCorrect";
import BehaviorsLearnedCorrect from "../../containers/BehaviorsLearnedCorrect";
import PhysicalAcquiredCorrect from "../../containers/PhysicalAcquiredCorrect";
import PhysicalIncorrect from "../../containers/PhysicalIncorrect";
import PhysicalInheritedCorrect from "../../containers/PhysicalInheritedCorrect";

import ViewArea from "../../containers/ViewAreaContainer";

const activity = (props) => {
  const { isPopupActive, data, onInit, selectedTrait, mainImg } = props;
  useEffect(() => {
    onInit();
  }, []);
  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {data.activityHeading}
        </h1>
        <View ariahidden={isPopupActive} tabindex={isPopupActive ? "-1" : null}>
          <ViewArea />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <StartInformationBox>
              <p>{data.instructionBoxContent}</p>
              <div className="img-flex">
                <img
                  src={mainImg.img}
                  alt={mainImg.alt}
                  className="img-position"
                />
              </div>
            </StartInformationBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p>
                {selectedTrait[0] && selectedTrait[0].id
                  ? selectedTrait[0].infoText
                  : data.defaultInfo}
              </p>
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
          <Popup popupid={5}>
            <BehaviorsInstinctCorrect>
              <p>{data.behaviorsInstinctCorrect}</p>
            </BehaviorsInstinctCorrect>
          </Popup>
          <Popup popupid={6}>
            <BehaviorsLearnedCorrect>
              <p>{data.behaviorsLearnedCorrect}</p>
            </BehaviorsLearnedCorrect>
          </Popup>
          <Popup popupid={7}>
            <BehaviorIncorrect>
              <p>{data.behaviorIncorrect}</p>
            </BehaviorIncorrect>
          </Popup>
          <Popup popupid={8}>
            <PhysicalInheritedCorrect>
              <p>{data.physicalInheritedCorrect}</p>
            </PhysicalInheritedCorrect>
          </Popup>
          <Popup popupid={9}>
            <PhysicalAcquiredCorrect>
              <p>{data.physicalAcquiredCorrect}</p>
            </PhysicalAcquiredCorrect>
          </Popup>
          <Popup popupid={10}>
            <PhysicalIncorrect>
              <p>{data.physicalIncorrect}</p>
            </PhysicalIncorrect>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
