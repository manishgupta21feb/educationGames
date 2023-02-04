import React, { useRef, useEffect, useState } from "react";
import Button from "../../../../app/components/Button";
import EventManager from "../../../../app/events/manager";
import "./style.scss";

export default (props) => {
  const { data, question, pauseVideo, currentPopup, submitAnswer } = props;

  const ref = useRef(null);
  const videos = useRef(null);
  const popupRef = useRef(props.currentPopup);
  const [videoPlayState, setVideoPlayState] = useState(false);
  const [disablePlayButton, setDisablePlayButton] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (ref.current) {
      if (question && question.id) {
        const videoElems = ref.current.querySelectorAll("video");
        if (videoElems) {
          videos.current = videoElems;
        }
        if (videos.current && props.currentPopup.indexOf(1) == -1) {
          playVideo("question");
        }
      }
    }
  }, [question]);

  const playVideo = (type) => {
    for (let video of videos.current) {
      if (video.classList.contains(type)) {
        video.play();
        setVideoPlayState(true);
        break;
      }
    }
  };

  const stopVideo = (type, timestamp = null) => {
    for (let video of videos.current) {
      if (video.classList.contains(type)) {
        video.pause();
        if (timestamp !== null) {
          video.currentTime = timestamp;
        }
        setVideoPlayState(false);
        break;
      }
    }
  };

  useEffect(() => {
    const infoPopupIsClosed = props.currentPopup.indexOf(1) == -1;
    const infoPopupWasOpen = popupRef.current.indexOf(1) != -1;
    if (infoPopupIsClosed && infoPopupWasOpen) {
      playVideo("question");
    }
    popupRef.current = [...props.currentPopup];
  }, [props.currentPopup]);

  useEffect(() => {
    if (pauseVideo) {
      stopVideo("answer");
    }
  }, [pauseVideo]);

  useEffect(() => {
    if (submitAnswer) {
      playVideo("answer");
    }
  }, [submitAnswer]);


  const onClick = (e) => {
    setDisablePlayButton(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setDisablePlayButton(false);
      EventManager.broadcast("SECONDARY_CLICK");
      if (submitAnswer) {
        videoPlayState ? stopVideo("answer") : playVideo("answer");
      } else {
        videoPlayState ? stopVideo("question") : playVideo("question");
      }
    },200);
  };

  const questionId = question && question.questionId ? question.questionId : "";
  const a11yVideoButtonLabel = videoPlayState
    ? data.videoStopText
    : data.videoPlayText;
  const buttonClasses = videoPlayState
    ? "icon-only stop-state"
    : "icon-only play-state";
  return (
    <div className="videos-container">
      {questionId && (
        <div
          ref={ref}
          key={question.srNo}
          id="qbutton-labelled-by"
          // role="img"
          className={`animation-container`}
          onContextMenu={(e) => e.preventDefault()}
          // aria-label={
          //   submitAnswer ? question.answerTitle : question.questionTitle
          // }
        >
          <img className="sr-only" style={{ height : '100%', width: '100%'}} alt={submitAnswer ? question.answerTitle : question.questionTitle} />
          <video
            loop
            tabIndex="-1"
            preload="auto"
            aria-hidden={true}
            src={question.quesAnimation}
            poster={question.questionFrame}
            className={`video-container question ${questionId} ${
              submitAnswer ? "hide" : ""
            }`}
          ></video>
          <video
            loop
            tabIndex="-1"
            preload="auto"
            aria-hidden={true}
            src={question.ansAnimation}
            className={`video-container answer ${!submitAnswer ? "hide" : ""}`}
          ></video>
        </div>
      )}
      <div className="play-pause-buttons">
        <Button
          onClick={onClick}
          classes={buttonClasses}
          label={a11yVideoButtonLabel}
          disabled={currentPopup.length || disablePlayButton}
          describedby="qbutton-labelled-by"
          ariaLable={a11yVideoButtonLabel}
          isPopupActive={currentPopup.length}
        ></Button>
      </div>
    </div>
  );
};
