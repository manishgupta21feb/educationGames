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
import ActivityArea from "../../containers/ActivityAreaContainer";
import NuclearComponent from "../../containers/NuclearContainer";
import CompletionScreen from "../../containers/CompletionScreen";

export default (props) => {
  const {
    answerSubmitted,
    correctAttempt,
    isPopupActive,
    showToastMessage,
    startDialogBox,
    informationText,
    resetDialogText,
  } = props;
  useEffect(() => {
    props.togglePopup(1);
  }, []);
  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        {showToastMessage && answerSubmitted ? (
          correctAttempt ? (
            <SuccessToast />
          ) : (
            <IncorrectToast />
          )
        ) : null}
        <View
          layout="topbottom"
          ariahidden={isPopupActive}
          tabindex={isPopupActive ? "-1" : null}
        >
          <ActivityArea />
          <NuclearComponent />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InfoDialogBox>
              <p>{startDialogBox}</p>
            </InfoDialogBox>
          </Popup>
          <Popup popupid={3} autoFocus>
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
