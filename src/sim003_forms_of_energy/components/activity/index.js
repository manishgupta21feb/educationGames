import React, { useEffect } from "react";
import View from "../../../app/components/View";

import { Popup } from "../../../app/components/Popup";
import Header from "../../containers/HeaderContainer";
import InformationBox from "../../containers/InfoContainer";
import ResetDialogBox from "../../containers/ResetContainer";
import PopupContainer from "../../containers/PopUpContainer";
import InstructionBox from "../../containers/InstructionBox";
import ActivityVideo from "../../containers/ActivityVideoContainer";
import DisplayEnergy from "../../containers/DisplayEnergyContainer";
import ThumbnailsComponent from "../../containers/ThumbnailsContainer";

export default (props) => {
  const {
    showFullView,
    isPopupActive,
    initialInfoDialog,
    informationText,
    resetDialogText,
    question,
  } = props;
  useEffect(() => {
    props.togglePopup(1);
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        <ThumbnailsComponent isPopupActive={isPopupActive || !showFullView} />
        <div className={`topbottom-view ${showFullView ? "" : "selected"}`}>
          <View layout="topbottom" ariahidden={isPopupActive || showFullView}>
            {question && question.id ? <ActivityVideo /> : null}
            <DisplayEnergy />
          </View>
        </div>
        <PopupContainer>
          <Popup popupid={1}>
            <InstructionBox>
              <h1>{initialInfoDialog.heading}</h1>
              {initialInfoDialog.list.map((c, i) => {
                return <p key={`para-${i}`}>{c}</p>;
              })}
            </InstructionBox>
          </Popup>
          <Popup popupid={6}>
            <ResetDialogBox>
              <p>{resetDialogText}</p>
            </ResetDialogBox>
          </Popup>
          <Popup popupid={4}>
            <InformationBox>
              <p>{informationText}</p>
            </InformationBox>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
