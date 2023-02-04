import React, { useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import Header from "../../containers/HeaderContainer";
import SuccessToast from "../../containers/SuccessToast";
import HintConatiner from "../../containers/HintContainer";
import InfoDialogBox from "../../containers/InfoDialogBox";
import PopupContainer from "../../containers/PopUpContainer";
import IncorrectToast from "../../containers/IncorrectToast";
import ResetContainer from "../../containers/ResetContainer";
import TopAreaContainer from "../../containers/TopAreaContainer";
import CompletionScreen from "../../containers/CompletionScreen";
import BottomAreaComponent from "../../containers/BottomAreaComponent";

export default (props) => {
  const {
    data,
    isPopupActive,
    correctAttempt,
    answerSubmitted,
    showToastMessage,
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
        >
          <TopAreaContainer />
          <BottomAreaComponent />
        </View>

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
