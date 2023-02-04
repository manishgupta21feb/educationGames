import Video from "../../../app/components/Video";
import React from "react";
import "./style.scss";

const VideoComponent = (props) => {
  const { label, isLabelled } = props;
  return (
    <>
      <div className="top-static">
        <Video {...props} />
        {!isLabelled ? (
          <div className={`label-wrap`} aria-hidden={isLabelled}>
            <div className={`plain-line`}></div>
            <div className={`label-text`}>
              <p>{label}</p>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default VideoComponent;
