import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import HintBox from "../../containers/HintBox";
import LevelOne from "../../containers/LevelOneCompletionContainer";
import Completion from "../../containers/CompletionScreen";
import ResetBox from "../../containers/ResetDialogBox";
import View from "../../../app/components/View";
import InfoContent from "../../components/InfoContent";

import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import Header from "../../containers/HeaderContainer";
import LeftView from "../../containers/LeftContainer";
import RightView from "../../containers/RightContainer";
import SuccessToast from "../../containers/SuccessToast";
import IncorrectToast from "../../containers/IncorrectToast";

const activity = ({
  imagesArray,
  isPopupActive,
  onInit,
  simHeading,
  infoContent,
  hint,
  toastMsg,
  showToastMessage,
  resetPopupText,
}) => {
  useEffect(() => {
    onInit();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main" className="sim150">
        <h1 className="sr-only">{simHeading}</h1>
        {imagesArray.map((image, index) => (
          <div
            aria-hidden
            key={`hidden-image${index}`}
            className={`hidden-images image${index}`}
          ></div>
        ))}
        {showToastMessage ? (
          toastMsg == "incorrect" ? (
            <IncorrectToast />
          ) : (
            <SuccessToast />
          )
        ) : null}
        <View layout="leftright" ariahidden={isPopupActive}>
          <LeftView />
          <RightView />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InfoBox>
              <InfoContent infoContent={infoContent} />
            </InfoBox>
          </Popup>
          <Popup popupid={2}>
            <HintBox>
              <p>{hint}</p>
            </HintBox>
          </Popup>

          <Popup popupid={3} autoFocus>
            <LevelOne />
          </Popup>
          <Popup popupid={4} autoFocus>
            <Completion />
          </Popup>
          <Popup popupid={5}>
            <ResetBox>{resetPopupText}</ResetBox>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
