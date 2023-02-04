import React, { useEffect, useState } from "react";
import View from "../../../app/components/View";
import VideoContainer from "../../containers/VideoContainer";
import MCQArea from "../../containers/McqSecondContainer";
import RadioButton from "../../containers/RadioButtonSecond";
import ButtonNextQuestion from "../../containers/ButtonNextQuestion";
import PieChartContainer from "../../containers/PieChartContainer";
import "./style.scss";

const SecondScreen = (props) => {
  const {
    isPopupActive,
    getScreenNumber,
    pieContent,
    getIsAnswerCorrect,
    cosmicImageAlt,
    ariaLable,
    onClick,
    videoLiveText,
  } = props;

  const [isLoad, setIsLoad] = useState(0);
  useEffect(() => {
    if (getScreenNumber.screen == 3 && getScreenNumber.btn == 1) {
      if (isLoad == 0) {
        onClick(videoLiveText);
        setIsLoad(1);
      }
    }
  }, [getScreenNumber.btn]);

  const playStateToggledHandler = (playState) => {
    // onClick(ariaLable)
    if (playState) {
      onClick(videoLiveText);
    }
  };

  const [getCurrentId, setGetCurrentId] = useState(0);
  const getNewScreen = () => {
    const screen3 = getScreenNumber && getScreenNumber.screen == 3;
    const showVideo = screen3 && getScreenNumber.btn == 1;
    if (screen3) {
      return (
        <View ariahidden={isPopupActive || null} layout="topbottom">
          <div className="screen3-top">
            <div aria-hidden={!showVideo} className="videoContainer-screen1">
              <VideoContainer
                disablePlayPauseButton={!showVideo}
                togglePlayState={showVideo ? "play" : "stop"}
                playStateToggled={(playState) =>
                  playStateToggledHandler(playState)
                }
              />
            </div>
            {getScreenNumber.btn == 2 ? (
              <div className="cosmic">
                <div
                  className="cosmicImage"
                  role="img"
                  aria-label={cosmicImageAlt}
                ></div>
              </div>
            ) : getScreenNumber.btn == 3 || getScreenNumber.btn == 4 ? (
              <div className="pieChart">
                <PieChartContainer />
              </div>
            ) : null}
          </div>
          {getScreenNumber.btn == 3 ? (
            <div className="textContent">{pieContent}</div>
          ) : (
            <div className="mcqContainer-screen1">
              <MCQArea>
                <RadioButton />
              </MCQArea>
            </div>
          )}
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      {getNewScreen()}
      {getScreenNumber.screen == 3 && getScreenNumber.btn == 3 ? (
        <ButtonNextQuestion />
      ) : getIsAnswerCorrect ? (
        <ButtonNextQuestion />
      ) : (
        ""
      )}
    </>
  );
};

export default SecondScreen;
