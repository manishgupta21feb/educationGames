import React from "react";
import VideoContainer from "../../containers/VideoContainer";
import "./labels.scss";

const VideoLabels = (props) => {
  const { videoContent } = props;

  const label = videoContent.labels.map((item, index) => {
    return (
      <label key={index} className="video-labels__label" aria-hidden="true">
        {item}
      </label>
    );
  });

  return (
    <>
      <VideoContainer />
      <div className={`video-labels ${videoContent.class}`}>{label}</div>
    </>
  );
};

export default VideoLabels;
