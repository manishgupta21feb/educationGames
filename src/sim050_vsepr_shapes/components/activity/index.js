import React, { useEffect, useState } from "react";
import Header from "../../containers/Header";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import DialogBox from "../../containers/DialogBox";
import FinishBox from "../../containers/FinishBox";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import InstructionBox from "../../containers/InstructionBox";
import BottomArea from "../../containers/BottomAreaContainer";
import TopArea from "../../containers/AnimationAreaContainer";
import SuccessToast from "../../containers/ToastContainerSuccess";
import FailureToast from "../../containers/ToastContainerFailure";
import ResetConfirmationBox from "../../containers/ResetConfirmationBox";
import CompletionScreenContainer from "../../containers/CompletionScreenContainer";
import PartialIncorrect1 from "../../containers/PartialIncorrect1";
import PartialIncorrect2 from "../../containers/PartialIncorrect2";
export default (props) => {
  const [toastMessage, setToastMessage] = useState(null);
  const {
    isPopupActive,
    onStartActivity,
    showToastMessage,

    data,
    toastMessageType,
    showNextBtn,
  } = props;

  useEffect(() => {
    onStartActivity();
  }, []);

  useEffect(() => {
    let toastMessage = null;
    if (showToastMessage) {
      switch (toastMessageType) {
        case "correct":
          toastMessage = <SuccessToast />;
          break;
        case "incorrect":
          toastMessage = <FailureToast />;
          break;
        case "partialIncorrect1":
          toastMessage = <PartialIncorrect1 />;
          break;
        case "partialIncorrect2":
          toastMessage = <PartialIncorrect2 />;
          break;
      }
    }
    setToastMessage(toastMessage);
  }, [showToastMessage]);

  return (
    <div className="activity-container">
      <Header />

      <div role="main">
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {data.h1InfoTextA11Y}
        </h1>
        {toastMessage}

        <View
          layout="topbottom"
          ariahidden={isPopupActive}
          tabindex={isPopupActive ? "-1" : null}
        >
          <TopArea />
          <BottomArea />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InstructionBox>
              <p>{data.instructionBoxContent}</p>
            </InstructionBox>
          </Popup>
          <Popup popupid={2}>
            <DialogBox />
          </Popup>
          <Popup popupid={3}>
            <FinishBox />
          </Popup>
          <Popup popupid={4}>
            <InfoBox>
              <p>{data.InfoBoxContent}</p>
            </InfoBox>
          </Popup>
          <Popup popupid={7} autoFocus>
            <CompletionScreenContainer />
          </Popup>
          <Popup popupid={8}>
            <ResetConfirmationBox>
              <p>{data.resetMsgContent}</p>
            </ResetConfirmationBox>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
