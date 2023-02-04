import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import StartupBox from "../../containers/StartupBox";
import HeaderContainer from "../../containers/HeaderContainer";
import ResetBox from "../../containers/ResetBox";
import LeftContainer from "../../containers/LeftContainer";
import CompletionScreen from "../../containers/CompletionScreenContainer";
import ContinuePopup from "../../containers/ContinuePopupContainer";
import RightContainer from "../../containers/RightContainer";
 import SuccessToast from "../../containers/SuccessToast";
 import PartiallyCorrectToast from "../../containers/PartiallyCorrectToast";
 import IncorrectToast from "../../containers/IncorrectToast";
 import GraphContainer from "../../containers/GraphContainer";

const activity = (props) => {
  const {
    onInit,
    data,
    isPopupActive,
    secondScreen,
     showToastMessage,
     submitButtonPressed,
    answerAttempt,
    wrongAnswer,
    partiallyCorrect,
  } = props;
  useEffect(() => {
    onInit();
  }, []);
  return (
    <div className="activity-container">
      <HeaderContainer />
      <div role="main">
      {secondScreen ? (
                 <h1 aria-hidden={isPopupActive} className="sr-only">
                 {data.pageHeadingTwo}
               </h1>
              ) : (
                <h1 aria-hidden={isPopupActive} className="sr-only">
                {data.pageHeadingOne}
              </h1>
              )}
       
        {submitButtonPressed && showToastMessage ? (
          answerAttempt ? (
            <SuccessToast />
          ) : partiallyCorrect ? (
            <PartiallyCorrectToast />
          ) : wrongAnswer ? (
            <IncorrectToast />
          ) : null
        ) : null}
        
        <View layout="leftright" ariahidden={isPopupActive}>
          {/* <GraphContainer/> */}
          <LeftContainer />
          <RightContainer />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <StartupBox>
              <p>{data.startupPopup}</p>
            </StartupBox>
          </Popup>
          <Popup popupid={3}>
            <ResetBox>
              <p>{data.resetPopupText}</p>
            </ResetBox>
          </Popup>
          <Popup popupid={4}>
            <InfoBox>
              {secondScreen ? (
                <p>{data.infoPopupTextScreen2}</p>
              ) : (
                <p>{data.infoPopupTextScreen1}</p>
              )}
            </InfoBox>
          </Popup>
          <Popup popupid={7} autoFocus>
            <ContinuePopup />
          </Popup>
          <Popup popupid={8} autoFocus>
            <CompletionScreen />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;