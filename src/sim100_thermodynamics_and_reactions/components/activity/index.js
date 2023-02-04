import React, { useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import Header from "../../containers/Header";
import InfoBox from "../../containers/InfoBox";
import PopupContainer from "../../containers/PopUpContainer";
import InstructionBox from "../../containers/InstructionBox";
import BottomArea from "../../containers/BottomAreaContainer";
import TopArea from "../../containers/LeftAreaContainer";
import SuccessToast from "../../containers/ToastContainerSuccess";
import FailureToast from "../../containers/ToastContainerFailure";
import ResetConfirmationBox from "../../containers/ResetConfirmationBox";
import CompletionScreenContainer from "../../containers/CompletionScreenContainer";
import "./style.scss";

export default (props) => {
  const {
    isPopupActive,
    onStartActivity,
    showToastMessage,
    wrongAnswer,
    correctAnswer,
    data,
  } = props;

  useEffect(() => {
    onStartActivity();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        {showToastMessage ? (
          correctAnswer ? (
            <SuccessToast />
          ) : wrongAnswer ? (
            <FailureToast />
          ) : null
        ) : null}
        <View layout="leftright" ariahidden={isPopupActive}>
          <TopArea />
          <BottomArea />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InstructionBox>
              <p>{data.instructionBoxContent}</p>
            </InstructionBox>
          </Popup>
          <Popup popupid={4}>
            <InfoBox>
              <p
                aria-hidden={true}
                dangerouslySetInnerHTML={{ __html: data.infoBoxContent }}
              ></p>
              <p className="sr-only">{data.infoBoxContent2}</p>
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
