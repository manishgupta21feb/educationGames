import React, { useEffect, useRef, useState } from "react";
import Button from "../../../../../app/components/Button";
import "./style.scss";

const videoFeedback = ({
  feedbackData,
  isPopupActive,
  videoPlay,
  videoStop,
}) => {
  const videoRef = useRef(null);
  const [videoState, setVideoState] = useState(false);
  const VideoButtonLabel = videoState ? videoStop : videoPlay;
  const buttonClasses = `icon-only ${videoState ? "stop-state" : "play-state"}`;

  useEffect(() => {
    setTimeout(() => {
      setVideoState(true);
    }, 200);
  }, []);

  // const toggleVideo = () => {
  //   if (videoRef.current.playing) {
  //     videoRef.current.pause();
  //   } else {
  //     videoRef.current.play();
  //   }
  // };
  const toggleVideo = () => {
    if (videoState) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    toggleVideo();
  }, [videoState]);

  const videoEnded = (e) => {
    if (videoRef.current) {
      setVideoState(false);
    }
  };

  const playPause = () => {
    setVideoState((state) => !state);
    EventManager.broadcast("PRIMARY_CLICK");
  };
  return (
    <>
      <div className={`video-container`}>
        <div className={`animation-container`}>
          <img
            id="video-description-sr-only"
            alt={feedbackData.ariaLabel}
            className="sr-only video-description"
          />
          <video
            muted
            autoPlay
            playsInline
            tabIndex="-1"
            preload="auto"
            ref={videoRef}
            aria-hidden={true}
            onEnded={videoEnded}
            src={feedbackData.assetUrl}
            className={feedbackData.classes}
          ></video>
        </div>
      </div>

      <div className="play-pause-button">
        <Button
          onClick={() => playPause()}
          classes={buttonClasses}
          label={VideoButtonLabel}
          ariaLable={VideoButtonLabel}
          describedby="video-description-sr-only"
          isPopupActive={isPopupActive ? "-1" : null}
        ></Button>
      </div>
      <p
        className={`tested-element ${feedbackData.experimentClass}`}
        dangerouslySetInnerHTML={{ __html: feedbackData.element }}
      ></p>
      <p
        className="experiment-label"
        dangerouslySetInnerHTML={{ __html: feedbackData.experimentName }}
      ></p>
    </>
  );
};

export default videoFeedback;
