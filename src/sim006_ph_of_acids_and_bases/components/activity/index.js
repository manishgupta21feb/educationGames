import React, { useEffect } from "react";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import View from "../../../app/components/View";
import Header from "../../containers/HeaderContainer";
import MainActivity from "../../containers/MainActivityContainer";
import StartUpInfoDialogBox from "../../containers/StartUpInfoDialogBox";
import InfoDialogBox from "../../containers/InfoDialogBox";
import SucessToast from "../../containers/SucessToast";
import IncorrectToast from "../../containers/IncorrectToast";
import ResetDialogBox from "../../containers/ResetDialogBox";
import StageOneCompletion from "../../containers/StageOneCompletion";
import GameCompletionContainer from "../../containers/GameCompletionContainer";

export default (props) => {
  const {
    isPopupActive,
    togglePopup,
    startUpDialogBoxText,
    infoDialogBoxText,
    resetDialogBoxText,
    fetchElements,
    toastMsg,
    showToastMessage,
    simulationEnd,
    updateSimulationEnd,
  } = props;

  useEffect(() => {
    togglePopup(1);
    fetchElements();
  }, []);

  useEffect(() => {
    if (simulationEnd) {
      updateSimulationEnd(false);
    }
  }, [simulationEnd]);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        {toastMsg == "correct" && showToastMessage && <SucessToast />}
        {toastMsg == "incorrect" && showToastMessage && <IncorrectToast />}
        <View ariahidden={isPopupActive}>
          <MainActivity />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <StartUpInfoDialogBox>
              {startUpDialogBoxText.split("\n").map((i, key) => {
                return <p key={key}>{i}</p>;
              })}
            </StartUpInfoDialogBox>
          </Popup>
          <Popup popupid={2}>
            <InfoDialogBox>
              <p>{infoDialogBoxText}</p>
            </InfoDialogBox>
          </Popup>
          <Popup popupid={3}>
            <ResetDialogBox>
              <p>{resetDialogBoxText}</p>
            </ResetDialogBox>
          </Popup>
          <Popup popupid={4} autoFocus>
            <StageOneCompletion />
          </Popup>
          <Popup popupid={5} autoFocus>
            <GameCompletionContainer />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
