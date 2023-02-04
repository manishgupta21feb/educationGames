import React, { useEffect } from "react";
import Header from "../../containers/HeaderContainer";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import InfoDialogBox from "../../containers/InfoDialogBox";
import HintConatiner from "../../containers/HintContainer";
import ResetContainer from "../../containers/ResetContainer";
import CompletionScreen from "../../containers/CompletionScreen";
import IncorrectToast from "../../containers/IncorrectToast";
import SuccessToast from "../../containers/SuccessToast";

import Screen1 from "../../containers/Screen1";
import Screen2 from "../../containers/Screen2";
import Screen3 from "../../containers/Screen3";

export default (props) => {
  const {
    data,
    correctAttempt,
    answerSubmitted,
    showToastMessage,
    observationMotive,
    isPopupActive,
    showIntroScreen,
  } = props;
  useEffect(() => {
    props.togglePopup(1);
  }, []);
  return (
    <div className="activity-container">
      <Header />

      {showToastMessage && answerSubmitted ? (
        correctAttempt ? (
          <SuccessToast />
        ) : (
          <IncorrectToast />
        )
      ) : null}

      <div role="main">
        {showIntroScreen != 3 ? (
          <h1 className="sr-only" aria-hidden={isPopupActive}>
            {observationMotive}
          </h1>
        ) : (
          ""
        )}

        <Screen1 />
        <Screen2 />
        <Screen3 />
        <PopupContainer>
          <Popup popupid={1}>
            <InfoDialogBox>
              <p>{data.instructionBoxContent}</p>
            </InfoDialogBox>
          </Popup>
          <Popup popupid={3} autoFocus>
            <CompletionScreen />
          </Popup>
          <Popup popupid={4}>
            <HintConatiner>
              <p dangerouslySetInnerHTML={{ __html: data.infoContent }}></p>
            </HintConatiner>
          </Popup>
          <Popup popupid={6}>
            <ResetContainer>
              <p>{data.messages[0].content}</p>
            </ResetContainer>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
