import React, { useEffect } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import Header from "../../containers/HeaderContainer";
import FullView from "../../containers/FullViewContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";
import ResetDialogBox from "../../containers/ResetDialogBox";
import data from "../../data";

const activity = (props) => {
  const { togglePopup, isPopupActive, infoText } = props;

  useEffect(() => {
    togglePopup(1);
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        <h1 className="sr-only">{data.headingOne}</h1>
        <View ariahidden={isPopupActive} tabindex={isPopupActive ? "-1" : null}>
          <FullView />
        </View>

        <PopupContainer>
          <Popup popupid={1}>
            <StartInformationBox>
              <p dangerouslySetInnerHTML={{ __html: data.startInfo }}></p>
            </StartInformationBox>
          </Popup>
          <Popup popupid={3}>
            <InfoBox>
              <p>{infoText}</p>
            </InfoBox>
          </Popup>
          <Popup popupid={4}>
            <ResetDialogBox>
              <p>{data.resetPopupText}</p>
            </ResetDialogBox>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
