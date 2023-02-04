import React, { useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import InfoBox from "../../containers/InfoBox";
import Header from "../../containers/HeaderContainer";
import Left from "../../containers/LeftViewContainer";
import Right from "../../containers/Draggable";
import SuccessToast from "../../containers/ToastContainerSuccess";
import PopupContainer from "../../containers/PopUpContainer";
import ResetContainer from "../../containers/ResetContainer";
import FailureToast from "../../containers/ToastContainerFailure";
import CompletionContainer from "../../containers/CompletionContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";
import FirstScreenLeftContainer from "../../containers/FirstScreenLeftContainer";
import FirstScreenRightContainer from "../../containers/FirstScreenRightContainer";
import IntroImages from "./introImages";
import ForthScreenLeftContainer from "../../containers/ForthScreenLeftContainer";
import ForthScreenRightContainer from "../../containers/ForthScreenRightContainer";
import CodonChartContainer from "../../containers/CodonChartContainer";
import LastScreenLeftContainer from "../../containers/LastScreenLeftContainer";
import LastScreenRightContainer from "../../containers/LastScreenRightContainer";

export default (props) => {
  const {
    data,
    onInit,
    isPopupActive,
    showToastMessage,
    submitButtonPressed,
    wrongAnswer,
    currentScreen,
    zindexStatus,
  } = props;

  useEffect(() => {
    onInit();
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main" className={zindexStatus ? "z-index" : ""}>
        <div className="preload-images" aria-hidden="true">
          {data.allImagesData.map((imgData, i) => (
            <img src={imgData} key={i} />
          ))}
        </div>
        {submitButtonPressed && showToastMessage ? (
          wrongAnswer ? (
            <FailureToast />
          ) : (
            <SuccessToast />
          )
        ) : null}
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {data.activityHeading}
        </h1>

        {currentScreen === "first" ? (
          <View layout="leftright" ariahidden={isPopupActive}>
            <FirstScreenLeftContainer />
            <FirstScreenRightContainer />
          </View>
        ) : currentScreen === "forth" ? (
          <View layout="leftright" ariahidden={isPopupActive}>
            <ForthScreenLeftContainer />
            <ForthScreenRightContainer />
          </View>
        ) : currentScreen === "sixth" ? (
          <View layout="leftright" ariahidden={isPopupActive}>
            <LastScreenLeftContainer />
            <LastScreenRightContainer />
          </View>
        ) : (
          <View layout="leftright" ariahidden={isPopupActive}>
            <Left />
            <Right />
          </View>
        )}

        <PopupContainer>
          <Popup popupid={1}>
            <StartInformationBox>
              <p>
                <span className="sr-only read-only-text">
                  {data.instructionBoxContent2}
                </span>
                <span aria-hidden>{data.instructionBoxContent}</span>
              </p>
              <IntroImages data={data} />
            </StartInformationBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p>{data.InfoBoxContent}</p>
            </InfoBox>
          </Popup>
          <Popup popupid={3} autoFocus>
            <CompletionContainer />
          </Popup>
          <Popup popupid={4}>
            <ResetContainer>
              <p>{data.resetMsgContent}</p>
            </ResetContainer>
          </Popup>
          <Popup popupid={6} autoFocus>
            <CodonChartContainer />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
