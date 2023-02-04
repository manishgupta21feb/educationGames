import React, { useRef, useEffect, useState } from "react";
import Button from "../Button";
import "./style.scss";

const Video = (props) => {
  const {
    loop,
    unmuted,
    autoPlay,
    question,
    buttonLabels,
    currentPopup,
    togglePlayState,
    playStateToggled,
    disablePlayPauseButton,
  } = props;

  const ref = useRef(null);
  const video = useRef(null);
  const timerRef = useRef(null);
  const popupRef = useRef(props.currentPopup);
  const [videoPlayState, setVideoPlayState] = useState(false);
  const [disablePlayButton, setDisablePlayButton] = useState(false);

  useEffect(() => {
    if (ref.current) {
      if (question && question.id) {
        const videoElems = ref.current.querySelector("video");
        setVideoPlayState(false);
        if (videoElems) {
          video.current = videoElems;
          video.current.load();
        }
      }
    }
  }, [question.videoSrc]);
  const playVideo = () => {
    if (video.current) {
      video.current.play();
      setVideoPlayState(true);
      if (video.current.muted && unmuted) {
        video.current.muted = false;
      }
    }
  };

  const stopVideo = (timestamp = null) => {
    if (video.current) {
      video.current.pause();
      if (timestamp !== null) {
        video.current.currentTime = timestamp;
      }
      setVideoPlayState(false);
    }
  };

  useEffect(() => {
    const infoPopupIsClosed = props.currentPopup.indexOf(1) == -1;
    const infoPopupWasOpen = popupRef.current.indexOf(1) != -1;
    if (infoPopupIsClosed && infoPopupWasOpen && props.autoPlay) {
      playVideo();
    }
    popupRef.current = [...props.currentPopup];
  }, [props.currentPopup]);

  const videoEnded = () => {
    setVideoPlayState(false);
    if (props.onVideoEnded) {
      props.onVideoEnded();
    }
  };

  const onClick = (e) => {
    setDisablePlayButton(true);
    if (playStateToggled) {
      playStateToggled(!videoPlayState);
    }
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setDisablePlayButton(false);
      EventManager.broadcast("SECONDARY_CLICK");
      videoPlayState ? stopVideo() : playVideo();
    }, 200);
  };

  const onCanPlayThrough = (event) => {
    if (props.canPlayThrough) {
      props.canPlayThrough();
    }
    if (video.current && props.currentPopup.indexOf(1) == -1) {
      if (autoPlay) {
        playVideo();
      }
    }
  };

  useEffect(() => {
    if (togglePlayState == "play") {
      playVideo();
    } else if (togglePlayState == "pause") {
      stopVideo();
    } else if (togglePlayState == "stop") {
      stopVideo(0);
    }
  }, [togglePlayState]);

  const onTimeUpdate = (e) => {
    if (props.onTimeUpdate) {
      props.onTimeUpdate(video.current.currentTime);
    }
  };

  const questionId = question && question.id ? question.id : "";
  const a11yVideoButtonLabel = videoPlayState
    ? buttonLabels.pauseVideo
    : buttonLabels.playVideo;
  const buttonClasses = videoPlayState
    ? "icon-only stop-state"
    : "icon-only play-state";

  return (
    <div className="video-container">
      <div className={`${videoPlayState ? "" : "overlay"}`}>
        {questionId && (
          <div
            ref={ref}
            key={question.id}
            className="video-wrapper"
            id={`qbutton-labelled-by-${question.id}`}
            onContextMenu={(e) => e.preventDefault()}
          >
            {question.alt ? (
              <img className="sr-only sr-image" alt={question.alt} />
            ) : null}
            <video
              muted
              loop={loop}
              playsInline
              tabIndex="-1"
              preload="auto"
              aria-hidden={true}
              onEnded={videoEnded}
              className={questionId}
              src={question.videoSrc}
              onTimeUpdate={onTimeUpdate}
              onCanPlayThrough={onCanPlayThrough}
            ></video>
          </div>
        )}
      </div>
      <div className={`play-pause-buttons ${videoPlayState ? "" : "paused"}`}>
        <Button
          classes={buttonClasses}
          label={a11yVideoButtonLabel}
          ariaLable={a11yVideoButtonLabel}
          isPopupActive={currentPopup.length}
          describedby={`qbutton-labelled-by-${question.id}`}
          onClick={() => (disablePlayButton ? null : onClick())}
          disabled={currentPopup.length || disablePlayPauseButton}
        ></Button>
      </div>
    </div>
  );
};

Video.defaultProps = {
  unmuted: false,
};

export default Video;
