import React, { useEffect, useState } from "react";
import Video from "../../../app/components/Video";
import NextButtonContainer from "../../containers/NextButtonContainer";
import "./style.scss";

const VideoArea = (props) => {
  const {

    buttonLabels,
    currentPopup,
    observationsData,
    currentExperimentNumber,
    onClick,
    onVideoEnd,
  } = props;
  const [playButton, setPlayButton] = useState(false);

  useEffect(() => {
    if (playButton) {
      setPlayButton(false);
    }
  }, [currentPopup.length]);

  const onVideoEndedHandler = () => {
    setPlayButton(false);
    onVideoEnd();
  };
  const question = observationsData[currentExperimentNumber];

  const playStateToggledHandler = (playState) => {
    if (playState) {
      onClick(observationsData[0].ariaLiveText);
    }
  };

  return (
    <div className="full-view">

      <Video
      autoPlay={true}
        question={question}
        buttonLabels={buttonLabels}
        currentPopup={currentPopup}
        disablePlayPauseButton={false}
        onVideoEnded={() => onVideoEndedHandler()}
        playStateToggled={(playState) => playStateToggledHandler(playState)}
      />

      <NextButtonContainer />
    </div>
  );
};

export default VideoArea;
