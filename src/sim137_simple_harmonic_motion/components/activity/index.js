import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import Header from "../../containers/HeaderContainer";
import StartInfoBoxContainer from "../../containers/StartInfoBoxContainer";
import ViewArea from "../../containers/ViewAreaContainer";
import ResetContainer from "../../containers/ResetContainer";

const activity = (props) => {
  const { onInit, isPopupActive, data } = props;
  useEffect(() => {
    onInit();
  }, []);
  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        {[...Array(7).keys()].map((el) => (
          <div
            aria-hidden
            key={`hidden-image${el}`}
            className={`hidden-images image${el}`}
          ></div>
        ))}
        <h1 aria-hidden={isPopupActive} className="sr-only">
          {data.objectiveHeading}
        </h1>
        <View ariahidden={isPopupActive}>
          <ViewArea />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <StartInfoBoxContainer>
              <p>{data.startScreenHeading}</p>
            </StartInfoBoxContainer>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p>{data.infoText}</p>
            </InfoBox>
          </Popup>
          <Popup popupid={3}>
            <ResetContainer>
              <p>{data.resetMsgContent}</p>
            </ResetContainer>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
