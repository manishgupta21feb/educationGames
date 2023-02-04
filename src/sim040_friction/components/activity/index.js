import React, { useEffect, useRef } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import Header from "../../containers/Header";
import InfoBox from "../../containers/InfoBox";
import LeftContainer from "../../containers/LeftContainer";
import RightContainer from "../../containers/RightContainer";
import PopupContainer from "../../containers/PopUpContainer";
import StartPopup from "../../containers/StartPopup";
import ResetPopup from "../../containers/ResetPopup";

const activity = (props) => {
  const { activityHeading, isPopupActive, onInit } = props;

  useEffect(() => {
    onInit();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        <h1 aria-hidden={isPopupActive} className="sr-only">
          {activityHeading}
        </h1>
        <View layout="leftright" ariahidden={isPopupActive}>
          <LeftContainer />
          <RightContainer />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <StartPopup>
              {props.startPopupText.map((s, i) => {
                return <p key={`start-popup${i}`}>{s}</p>;
              })}
            </StartPopup>
          </Popup>
          <Popup popupid={2}>
            <ResetPopup>{props.resetPopupText}</ResetPopup>
          </Popup>
          <Popup popupid={3}>
            <InfoBox>{props.infoBoxText}</InfoBox>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
