import React, { useEffect, useRef } from "react";
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
import "./style.scss";
import data from "../../data/data.en";

export default (props) => {
  const toRef = useRef(null);
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

  useEffect(() => {
    if (showToastMessage && answerSubmitted) {
      if (correctAttempt) {
        toRef.current = setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
      } else {
        toRef.current = setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);
      }
    } else if (!showToastMessage) {
      clearTimeout(toRef.current);
    }
  }, [showToastMessage, answerSubmitted]);

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
              <p dangerouslySetInnerHTML={{ __html: startDialogBox }}></p>
              <div className="startdialog-div">
                <div className="start-image">
                  <div
                    role="img"
                    className="sr-only sr-image"
                    aria-label={data.startImageAlt}
                  />
                </div>
              </div>
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
