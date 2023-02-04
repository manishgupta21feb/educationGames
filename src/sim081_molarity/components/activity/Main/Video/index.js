import React from "react";
import Video from "../../../../../app/components/Video";
import "./style.scss";

const index = (props) => {
  const { videoState, labels, onVideoEnd } = props;
  const onVideoEndedHandler = () => {
    onVideoEnd(true);
  };

  return (
    <>
      <Video
        togglePlayState={videoState}
        {...props}
        onVideoEnded={() => onVideoEndedHandler()}
      />
      {labels.map((label, index) => (
        <p key={index} className={`label label${index + 1}`} aria-hidden="true">
          {label}
        </p>
      ))}
    </>
  );
};

export default index;
