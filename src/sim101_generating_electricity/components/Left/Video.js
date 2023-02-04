import React from "react";
import VideoContainer from "../../containers/VideoContainer";
import "./_video.scss";

export default (props) => {
    const { videoEnded } = props;
  return <VideoContainer onVideoEnded={videoEnded} />;
};
