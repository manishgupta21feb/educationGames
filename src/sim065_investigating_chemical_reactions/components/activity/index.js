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
    data,
    answerSubmitted,
    correctAttempt,
    isPopupActive,
    toastMsg,
    startDialogBox,
    informationText,
    resetDialogText,
    showToastMessage,
    activityHeading,
  } = props;
  useEffect(() => {
    props.onStartActivity();
    props.togglePopup(1);
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {activityHeading}
        </h1>

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
              {startDialogBox.map((i, index) => {
                return (
                  <p key={index} className="start-info">
                    {i}
                  </p>
                );
              })}
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
