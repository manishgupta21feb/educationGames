import React, { useEffect, useRef, useState } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import InfoBox from "../../containers/InfoBox";
import Header from "../../containers/HeaderContainer";
import Left from "../../containers/LeftAreaContainer";
import Right from "../../containers/RightAreaContainer";
import PopupContainer from "../../containers/PopUpContainer";
import ResetContainer from "../../containers/ResetContainer";
import IncorrectToast from "../../containers/IncorrectToast";
import CompletionContainer from "../../containers/CompletionContainer";
import ContinueContainer from "../../containers/ContinueContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";
import popupImg from "../../assets/images/popup.png";
import DialogContainer from "../../containers/DialogContainer";

export default (props) => {
  const {
    data,
    onInit,
    toastMsg,
    isPopupActive,
    showToastMessage,
    selectedDraggable,
    correctDropInformation,
    currentPopup,
    instructionBoxImgAria,
    zindexStatus,
  } = props;

  const flag = useRef(false);
  const currentPopupRef = useRef(currentPopup);
  const [showActivityArea, setShowActivityArea] = useState(true);

  useEffect(() => {
    onInit();
  }, []);

  useEffect(() => {
    if (
      currentPopup.indexOf(1) >= 0 &&
      currentPopupRef.current.indexOf(1) === -1 &&
      currentPopupRef.current.indexOf(5) >= 0
    ) {
      // console.log("useEff");
      setShowActivityArea(false);
      setTimeout(() => {
        setShowActivityArea(true);
      });
    }
    currentPopupRef.current = currentPopup;
  }, [currentPopup]);

  return (
    <div className="activity-container">
      <Header />
      <div role="main" className={zindexStatus ? "z-index" : ""}>
        {showToastMessage ? (
          toastMsg == "incorrect" ? (
            <IncorrectToast />
          ) : (
            ""
          )
        ) : null}
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {data.activityHeading}
        </h1>
        {showActivityArea ? (
          <View layout="leftright" ariahidden={isPopupActive}>
            <Left flag={flag} />
            <Right flag={flag} />
          </View>
        ) : null}
        <PopupContainer>
          <Popup popupid={1}>
            <StartInformationBox>
              <p>{data.instructionBoxContent}</p>
              <div
                role="img"
                className="intro-popup-img"
                aria-label={instructionBoxImgAria}
              />
            </StartInformationBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p dangerouslySetInnerHTML={{ __html: data.InfoBoxContent }}></p>
            </InfoBox>
          </Popup>
          <Popup popupid={3} autoFocus>
            <ContinueContainer />
          </Popup>
          <Popup popupid={4} autoFocus>
            <CompletionContainer />
          </Popup>
          <Popup popupid={5}>
            <ResetContainer>
              <p>{data.resetMsgContent}</p>
            </ResetContainer>
          </Popup>
          <Popup popupid={6}>
            <DialogContainer>
              <p
                dangerouslySetInnerHTML={{
                  __html: correctDropInformation,
                }}
              ></p>
            </DialogContainer>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
