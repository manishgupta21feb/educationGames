import React, { useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import InfoBox from "../../containers/InfoBox";
import Header from "../../containers/HeaderContainer";
import PopupContainer from "../../containers/PopUpContainer";
import InstructionBox from "../../containers/InstructionBox";
import ResetDialogBox from "../../containers/ResetDialogBox";
import TopAreacontainer from "../../containers/TopAreacontainer";
import BottomAreaContainer from "../../containers/BottomAreaContainer";
import TopInteractiveContainer from "../../containers/TopInteractiveContainer";
import BottomStaticContainer from "../../containers/BottomStaticContainer";
import CorrectToastContainer from "../../containers/CorrectToastContainer";
import CompleteResetContainer from "../../containers/CompleteResetContainer";
import IncorrectToastContainer from "../../containers/IncorrectToastContainer";
import CompletionScreenContainer from "../../containers/CompletionScreenContainer";
import VideoAreaContainer from "../../containers/VideoAreaContainer";
import IntroImage from "../../assets/images/intro-image.jpg";

export default (props) => {
  const {
    data,
    time1,
    time2,
    setViewScreen,
    setViewVideo,
    wrongAnswer,
    submitButtonPressed,
    isPopupActive,
    onStartActivity,
    answerAttempt,
    activityHeading,
    showToastMessage,
  } = props;

  useEffect(() => {
    onStartActivity();
  }, []);

  return (
    <>
      <div className="activity-container">
        <Header />
        <div role="main">
          <h1 className="sr-only" aria-hidden={isPopupActive}>
            {activityHeading}
          </h1>
          {submitButtonPressed && showToastMessage ? (
            answerAttempt ? (
              <CorrectToastContainer />
            ) : wrongAnswer ? (
              <IncorrectToastContainer />
            ) : null
          ) : null}

          {setViewScreen ? (
            <View
              layout="topbottom"
              ariahidden={isPopupActive || null}
              tabindex={isPopupActive ? "-1" : null}
            >
              <TopInteractiveContainer />
              <BottomStaticContainer />
            </View>
          ) : setViewVideo ? (
            <View layout="fullview" ariahidden={isPopupActive || null}>
              <VideoAreaContainer />
            </View>
          ) : (
            <View layout="topbottom" ariahidden={isPopupActive}>
              <TopAreacontainer />
              <BottomAreaContainer />
            </View>
          )}
          <PopupContainer>
            <Popup popupid={1}>
              <InstructionBox>
                <p>{data.instructionBoxContent}</p>
                <div className="intro-image">
                  <img aria-hidden="true"
                    className="sr-image into-img-size"
              
                    src={IntroImage}
                  ></img>
                  <p role="img" aria-label={data.altintroimgtextOne} className="alt1">
                 
                  </p>
                  <p role ="img" aria-label={data.altintroimgtextTwo} className="alt2">
                  
                  </p>
                  <div aria-hidden="true" className="timetext">
                    <p className="time1">{time1}</p>
                    <p className="time2">{time2}</p>
                  </div>
                </div>
              </InstructionBox>
            </Popup>
            <Popup popupid={4}>
              <InfoBox>
                <p
                  dangerouslySetInnerHTML={{ __html: data.InfoBoxContent }}
                ></p>
              </InfoBox>
            </Popup>
            <Popup popupid={6} autoFocus>
              <CompletionScreenContainer />
            </Popup>
            <Popup popupid={7} autoFocus>
              <CompleteResetContainer />
            </Popup>
            <Popup popupid={8}>
              <ResetDialogBox>
                <p>{data.resetMsgContent}</p>
              </ResetDialogBox>
            </Popup>
          </PopupContainer>
        </div>
      </div>
    </>
  );
};
