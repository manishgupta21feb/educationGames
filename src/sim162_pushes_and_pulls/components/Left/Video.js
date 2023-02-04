import React from "react";
import VideoContainer from "../../containers/VideoContainer";
import "./_video.scss";

export default (props) => {
  const { videoEnded, screen } = props;
  return (
    <div className={`screen-${screen}`}>
      <VideoContainer onVideoEnded={videoEnded} />
    </div>
  );
};
