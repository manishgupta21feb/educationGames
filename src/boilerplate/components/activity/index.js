import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";

const activity = (props) => {
  return (
    <div className="activity-container">
      <div role="main">
        <PopupContainer>
          <Popup popupid={1}>
            <InfoBox>
              <p>Hi there, how are you?</p>
            </InfoBox>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
