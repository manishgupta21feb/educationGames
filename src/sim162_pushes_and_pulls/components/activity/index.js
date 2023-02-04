import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import ResetContainer from "../../containers/ResetContainer";
import CompletionContainer from "../../containers/CompletionContainer";
import StartUpInfoDialogBox from "../../containers/StartUpInfoDialogBox";
import HeaderContainer from "../../containers/HeaderContainer";
import Full from "../Full";

const activity = (props) => {

  const {
    onInit,
    activityheading,
    isPopupActive,
    startUpInfoText,
    infoText,
    resetPopupText,
  } = props;

  useEffect(() => {
    onInit();
  }, []);

  return (
    <div className="activity-container">
      <HeaderContainer />
      <div role="main">
      <h1 className="sr-only" aria-hidden={isPopupActive}>
          {activityheading}
        </h1>
        <Full isPopupActive={isPopupActive} />
        <PopupContainer>
        <Popup popupid={1}>
            <StartUpInfoDialogBox>
              <p>{startUpInfoText}</p>
            </StartUpInfoDialogBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p>{infoText}</p>
            </InfoBox>
          </Popup>
          <Popup popupid={3}>
            <ResetContainer>
              <p>{resetPopupText}</p>
            </ResetContainer>
          </Popup>
          <Popup popupid={4} autoFocus>
            <CompletionContainer />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
