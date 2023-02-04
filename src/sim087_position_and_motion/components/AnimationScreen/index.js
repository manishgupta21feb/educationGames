import React, { useEffect, useState } from "react";

import Video from "../../../app/components/Video";
import RadioButtons from "../../containers/RadioButtonContainer";
import NextButtonContainer from "../../containers/NextButtonContainer";
import ScreenVideoData from "../../containers/ScreenDataContainer";

import "./style.scss";

const AnimationScreen = (props) => {
  const {
    imgAlt,
    heading,
    currentPopup,
    buttonLabels,
    isPopupActive,
    observationsData,
    currentExperimentNumber,
    playSelectedAnimation,
    onAnimationStart,
    onAnimationEnd,
    animationScreenId,
    isContinue,
  } = props;
  const [playButton, setPlayButton] = useState(false);

  useEffect(() => {
    if (playButton) {
      setPlayButton(false);
    }
  }, [currentPopup.length]);

  const question = { ...observationsData[currentExperimentNumber - 1] };
  question.alt = question.altLivePlay;
  return (
    <div className={`full-view full-view-${animationScreenId}`}>
      <div className="full-view-wrapper">
        <h2 className="main-heading" id={"mainHeading"}>
          {heading}
        </h2>
        <RadioButtons disabled={playSelectedAnimation || isPopupActive} />
        <img
          alt={imgAlt}
          className="sr-only sr-image"
          aria-hidden={playButton || (question && question.id)}
        />
        {question && question.id ? (
          <>
            <Video
              question={question}
              buttonLabels={buttonLabels}
              currentPopup={currentPopup}
              disablePlayPauseButton={false}
              canPlayThrough={onAnimationStart}
              onVideoEnded={onAnimationEnd}
              autoPlay={true}
            />
          </>
        ) : null}
        <ScreenVideoData />
      </div>
      {isContinue && <NextButtonContainer />}
    </div>
  );
};

export default AnimationScreen;
