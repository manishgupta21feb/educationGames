import React from "react";
import "./style.scss";
import VideoOnlyContainer from "../../../containers/VideoOnlyContainer";
const VideoOnly = (props) => {
  const {
    selectedVehicleData,
    data,
    currentPopup,
    setContinueState,
    isVideoPlay,
    keepTime,
    onVideoEndedHandler,
  } = props;

  const playStateToggledHandler = (playState) => {
    if (playState) {
      isVideoPlay(selectedVehicleData.liveText);
    }
  };
  return (
    <div className="video-component-container">
      <VideoOnlyContainer
        playStateToggled={(playState) => playStateToggledHandler(playState)}
      />

      {selectedVehicleData.id == "ambulance" ? (
        <div className="hospital" aria-hidden>
          <p className="hospital-label">{data.hospital}</p>
        </div>
      ) : null}
    </div>
  );
};

export default VideoOnly;
