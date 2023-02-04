import React, { useEffect, useRef } from "react";

import LeftRight from "../LeftRight";
import Header from "../../containers/Header";
import InfoPopup from "../../containers/InfoPopup";
import ResetPopup from "../../containers/ResetPopup";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import CompletionPopup from "../../containers/CompletionPopup";
import TransitionPopup from "../../containers/TransitionPopup";
import IntroductionPopup from "../../containers/IntroductionPopup";

const activity = (props) => {
  const { onInit, text } = props;

  useEffect(() => {
    if (onInit) {
      onInit();
    }
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        <LeftRight />
        <PopupContainer>
          <Popup popupid={1}>
            <IntroductionPopup>
              <p
                dangerouslySetInnerHTML={{ __html: text.introductionPopupText }}
              ></p>
            </IntroductionPopup>
          </Popup>
          <Popup popupid={2}>
            <ResetPopup>
              <p>{text.resetPopupText}</p>
            </ResetPopup>
          </Popup>
          <Popup popupid={3}>
            <InfoPopup>
              <p>{text.infoPopupText}</p>
            </InfoPopup>
          </Popup>
          <Popup popupid={4} autoFocus>
            <TransitionPopup />
          </Popup>
          <Popup popupid={5} autoFocus>
            <CompletionPopup />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
