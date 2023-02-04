import React, { useEffect } from "react";

import { Popup } from "../../../app/components/Popup";
import SuccessToast from "../../containers/SuccessToast";
import InfoDialogBox from "../../containers/InfoDialogBox";
import PopupContainer from "../../containers/PopUpContainer";
import ResetContainer from "../../containers/ResetContainer";
import InformationBox from "../../containers/InformationBox";
import IncorrectToast from "../../containers/IncorrectToast";
import Background from "../../containers/BackgroundContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import CompletionScreen from "../../containers/CompletionScreen";
import CompletedDialogContainer from "../../containers/CompletedDialogContainer";

const Activity = (props) => {
  const {
    toastMsg,
    togglePopup,
    isPopupActive,
    startDialogBox,
    completionText,
    informationText,
    resetDialogText,
    showToastMessage,
  } = props;

  useEffect(() => {
    togglePopup(1);
  }, []);

  useEffect(() => {
    if (toastMsg == "finalToast") {
      togglePopup(4);
    }
  }, [toastMsg]);

  const successToast = toastMsg == "correct" ? <SuccessToast /> : null;
  const incorrectToast = toastMsg == "incorrect" ? <IncorrectToast /> : null;

  return (
    <div className="activity-container">
      <HeaderContainer />
      <div role="main">
        {showToastMessage ? (
          <>
            {successToast}
            {incorrectToast}
          </>
        ) : null}
        <Background isPopupActive={isPopupActive} />
        <PopupContainer>
          <Popup popupid={1}>
            <InfoDialogBox>
              {startDialogBox.map((s, i) => {
                return <p key={i}>{s}</p>;
              })}
            </InfoDialogBox>
          </Popup>
          <Popup popupid={2}>
            <ResetContainer>
              <p>{resetDialogText}</p>
            </ResetContainer>
          </Popup>
          <Popup popupid={4}>
            <CompletedDialogContainer>
              <p dangerouslySetInnerHTML={{ __html: completionText }}></p>
            </CompletedDialogContainer>
          </Popup>
          <Popup popupid={5}>
            <InformationBox>
              <p>{informationText}</p>
            </InformationBox>
          </Popup>
          <Popup popupid={6} autoFocus>
            <CompletionScreen />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default Activity;
