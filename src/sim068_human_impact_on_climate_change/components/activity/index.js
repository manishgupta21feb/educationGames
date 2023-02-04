import React, { useEffect, useRef } from "react";
import StartUpBox from "../../containers/StartUpBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import InstructionBox from "../../containers/InstructionBox";
import FullViewContainer from "../../containers/FullViewContainer";
import CompletionPopup from "../../containers/CompletionPopup";
import ZoomViewContainer from "../../containers/ZoomViewContainer";
import ResetBox from "../../containers/ResetBox";
const activity = (props) => {
  const { data, onInit, isPopupActive } = props;
  useEffect(() => {
    onInit();
  }, []);
  return (
    <div className="activity-container">
      <HeaderContainer />
      <div role="main">
        <h1 aria-hidden={isPopupActive} className="sr-only">
          {data.pageHeading}
        </h1>
        <View ariahidden={isPopupActive}>
          <FullViewContainer />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <StartUpBox>
              <p>{data.startupPopUp}</p>
            </StartUpBox>
          </Popup>
          <Popup popupid={2}>
            <InstructionBox>
              <p>{data.infoBoxContent}</p>
            </InstructionBox>
          </Popup>
          <Popup popupid={3}>
            <ResetBox>
              <p>{data.resetPopupText}</p>
            </ResetBox>
          </Popup>

          <Popup popupid={4} autoFocus>
            <ZoomViewContainer />
          </Popup>
          <Popup popupid={7} autoFocus>
            <CompletionPopup />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
