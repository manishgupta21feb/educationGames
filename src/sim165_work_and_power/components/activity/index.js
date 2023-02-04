import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import FullViewContainer from "../../containers/FullViewContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import ResetDialogBox from "../../containers/ResetDialogBox";
import InformationBox from "../../containers/InformationBox";
import LevelOneCompletionContainer from "../../containers/LevelOneCompletionContainer";

const activity = ({
  onInit,
  resetDialogText,
  infoContent,
  hintContent,
  imagesArray,
  simHeading,
  isPopupActive,
}) => {
  useEffect(() => {
    onInit();
  }, []);
  return (
    <div className="activity-container">
      <HeaderContainer />
      <div role="main">
        <h1 className="sr-only">{simHeading}</h1>
        {imagesArray.map((image, index) => (
          <div
            aria-hidden
            key={`hidden-image${index}`}
            className={`hidden-images image${index}`}
          ></div>
        ))}
        <View ariahidden={isPopupActive}>
          <FullViewContainer />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InfoBox>
              <p>{infoContent}</p>
            </InfoBox>
          </Popup>
          <Popup popupid={2}>
            <ResetDialogBox>{resetDialogText}</ResetDialogBox>
          </Popup>
          <Popup popupid={3}>
            <InformationBox>
              <p>{hintContent}</p>
            </InformationBox>
          </Popup>
          <Popup popupid={4} autoFocus>
            <LevelOneCompletionContainer></LevelOneCompletionContainer>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
