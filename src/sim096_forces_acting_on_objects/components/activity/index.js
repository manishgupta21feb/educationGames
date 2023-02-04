import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import HintBox from "../../containers/HintBox";
import View from "../../../app/components/View";
import LaunchPage from "../../containers/LaunchContainer";
import GravityLeft from "../../containers/GravityLeftContainer";
import GravityRight from "../../containers/GravityRightContainer";
import FrictionLeft from "../../containers/FrictionLeftContainer";
import FrictionRight from "../../containers/FrictionRightContainer";
import ResetPopup from "../../containers/ResetBox";
import ForceCompletionPopup from "../../containers/LevelOneCompletionContainer";
import Header from "../../containers/HeaderContainer";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";

const activity = ({
  onInit,
  currentSection,
  simData,
  isPopupActive,
  parentId,
}) => {
  useEffect(() => {
    onInit();
  }, []);
  return (
    <div className="activity-container" id={parentId} key={parentId}>
      <Header />
      <div role="main" className="sim096">
        <h1 className="sr-only">{simData.simHeading}</h1>

        {currentSection === "launch" ? (
          <View ariahidden={isPopupActive}>
            <LaunchPage />
          </View>
        ) : currentSection === "gravity" ? (
          <View ariahidden={isPopupActive} layout="leftright">
            <GravityLeft />
            <GravityRight />
          </View>
        ) : (
          <View ariahidden={isPopupActive} layout="leftright">
            <FrictionLeft />
            <FrictionRight />
          </View>
        )}

        <PopupContainer>
          <Popup popupid={1}>
            <InfoBox>
              <p>{simData.infoContent}</p>
            </InfoBox>
          </Popup>
          <Popup popupid={2}>
            <HintBox>
              <p
                dangerouslySetInnerHTML={{
                  __html: simData.hintContent[currentSection],
                }}
              />
            </HintBox>
          </Popup>
          <Popup popupid={3}>
            <ResetPopup>{simData.commonData.resetPopupText}</ResetPopup>
          </Popup>
          <Popup popupid={4} autoFocus>
            <ForceCompletionPopup />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
