import React, { useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import Header from "../../containers/HeaderContainer";
import SuccessToast from "../../containers/SuccessToast";
import InfoDialogBox from "../../containers/InfoDialogBox";
import IncorrectToast from "../../containers/IncorrectToast";
import PopupContainer from "../../containers/PopUpContainer";
import InformationBox from "../../containers/InformationBox";
import ResetDialogBox from "../../containers/ResetDialogBox";
import ImageContainer from "../../containers/ImageContainer";
import BottomArea from "../../containers/BottomAreaContainer";

import CompletionScreen from "../../containers/CompletionScreen";

export default (props) => {
  const {
    imagesArray,
    isPopupActive,
    toastMsg,
    startDialogBox,
    informationText,
    resetDialogText,
    showToastMessage,
    activityHeading,
  } = props;
  useEffect(() => {
    // props.onStartActivity();
    props.togglePopup(1);
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {activityHeading}
        </h1>
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
        <View layout="topbottom" ariahidden={isPopupActive}>
          <ImageContainer />
          <BottomArea />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InfoDialogBox>
              <p>{startDialogBox.content}</p>
              <div className="infoImageHolder">
                <p className="text1" aria-hidden="true">
                  {startDialogBox.placementTexts.text1}
                </p>
                <p className="text2" aria-hidden="true">
                  {startDialogBox.placementTexts.text2}
                </p>
                <p className="text3" aria-hidden="true">
                  {startDialogBox.placementTexts.text3}
                </p>
                <p className="text4" aria-hidden="true">
                  {startDialogBox.placementTexts.text4}
                </p>
                <p className="text5" aria-hidden="true">
                  {startDialogBox.placementTexts.text5}
                </p>
                <p className="text6" aria-hidden="true">
                  {startDialogBox.placementTexts.text6}
                </p>
                <p className="text7" aria-hidden="true">
                  {startDialogBox.placementTexts.text7}
                </p>
                <img
                  src={startDialogBox.imgSrc}
                  alt={startDialogBox.alt}
                  className="infoImage"
                />
              </div>
            </InfoDialogBox>
          </Popup>
          <Popup popupid={7} autoFocus>
            <CompletionScreen />
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
