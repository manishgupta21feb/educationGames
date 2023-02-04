import React, { useState, useRef, useEffect } from "react";
import Video from "../../../../app/components/Video";
import "./main.scss";

const VideoAreaComponent = (props) => {
  const {
    currentPopup,
    observationsData,
    currentExperimentNumber,
    buttonLabels,
    readingMeters,
    isVideoPlay,
    isVideoEnd,
    animationInfo,
    redArrow,
    thermometer,
    altTextChange,
  } = props;

  const rafRef = useRef(null);
  const timeoutRef = useRef(null);
  const [videoEnd, setVideoEnd] = useState(false);
  const [playPauseState, setPlayPauseState] = useState(false);

  const [meter1, setMeter1] = useState(readingMeters.meterA.value);
  const [meter2, setMeter2] = useState(readingMeters.meterB.value);
  const [showImage, setShowImage] = useState(false);
  const [showLabel, setShowLabel] = useState(true);

  const meter1Ref = useRef(null);
  const meter2Ref = useRef(null);
  const popupRef = useRef(props.currentPopup);

  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    setVideoData(observationsData[currentExperimentNumber - 1]);
  }, [observationsData, currentExperimentNumber]);

  useEffect(() => {
    if (
      props.currentPopup.indexOf(1) >= 0 &&
      popupRef.current &&
      popupRef.current.indexOf(6) >= 0
    ) {
      setMeter1(readingMeters.meterA.value);
      setMeter2(readingMeters.meterB.value);
      setShowImage(false);
      isVideoPlay(false);
      setShowLabel(false);
    }
    popupRef.current = props.currentPopup;
  }, [props.currentPopup]);

  //#region animation-handlers
  useEffect(() => {
    if (videoEnd) {
      setVideoEnd(false);
      setShowLabel(false);
      if (meter1Ref.current) {
        animateValue(
          readingMeters.meterA.value,
          readingMeters.meterA.endValue,
          3000,
          "A"
        );
        animateValue(
          readingMeters.meterB.value,
          readingMeters.meterB.endValue,
          3000,
          "B"
        );
      }
    }
  }, [videoEnd]);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // useEffect(() => {
  //   if (isVideoEnd && !showImage) altTextChange(currentExperimentNumber - 1);
  // }, [isVideoEnd, showImage]);

  const animateValue = (start, end, duration, type) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      type == "A" ? setMeter1((val) => value) : setMeter2((val) => value);
      if (progress < 1) {
        rafRef.current = window.requestAnimationFrame(step);
      } else {
        setPlayPauseState(false);
        isVideoEnd(true);
        setShowImage(false);
      }
    };
    rafRef.current = window.requestAnimationFrame(step);
  };
  //#endregion
  //#region video-handlers
  const onVideoEndedHandler = () => {
    setVideoEnd(true);
    if (currentExperimentNumber - 1 == 0) {
      setTimeout(() => {
        videoData.alt = videoData.afterAlt;
      }, 3000);
    } else {
      videoData.alt = videoData.afterAlt;
    }

    if (currentExperimentNumber != 1) {
      isVideoEnd(true);
    } else {
      setShowImage(true);
      setPlayPauseState(true);
    }
  };

  const playStateToggledHandler = (playState) => {
    if (playState) {
      isVideoPlay(true, observationsData[currentExperimentNumber - 1].liveText);
      setMeter1(readingMeters.meterA.value);
      setMeter2(readingMeters.meterB.value);
      setShowImage(false);
      setShowLabel(false);
    }
  };
  //#endregion

  return (
    <div className={`topMainContainer active`}>
      <Video
        buttonLabels={buttonLabels}
        question={videoData}
        currentPopup={currentPopup}
        onVideoEnded={() => onVideoEndedHandler()}
        playStateToggled={(playState) => playStateToggledHandler(playState)}
        disablePlayPauseButton={playPauseState}
        // autoPlay={true}
      />
      {currentExperimentNumber == 1 ? (
        <div className="animate-objects">
          <p
            className={thermometer[0].classes}
            ref={meter1Ref}
            aria-label={thermometer[0].aria}
            aria-hidden={true}
          >
            {meter1}
            <span className={thermometer[2].classes}>
              {thermometer[2].label}
            </span>
          </p>
          <p
            className={thermometer[1].classes}
            ref={meter2Ref}
            aria-label={thermometer[1].aria}
            aria-hidden={true}
          >
            {meter2}
            <span className={thermometer[2].classes}>
              {thermometer[2].label}
            </span>
          </p>
          {showImage ? (
            <>
              <span
                className="arrow animate"
                aria-label={redArrow.aria}
                aria-hidden={true}
              ></span>
            </>
          ) : (
            " "
          )}

          {animationInfo.map((val, index) => {
            return (
              <span
                className={val.classes}
                key={index}
                aria-label={val.aria}
                aria-hidden={true}
              >
                {val.label}
              </span>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {currentExperimentNumber == 2 ? (
        <span className={thermometer[4].classes} aria-hidden={true}>
          {thermometer[4].label}
        </span>
      ) : (
        ""
      )}
      {showLabel ? (
        <div className="labels">
          {observationsData[currentExperimentNumber - 1].labels.map(
            (val, index) => {
              return (
                <span
                  key={index}
                  className={`labels labels__` + val.classes}
                  aria-label={val.labelName}
                  aria-hidden={true}
                >
                  {val.labelName}
                </span>
              );
            }
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default VideoAreaComponent;
