import React, { useEffect, useRef, useState } from "react";
import Button from "../../../../app/components/Button";
import Video from "../../../containers/videoContainer";
import "./main.scss";

const TIME_LIMIT = 0;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

const LeftSection = ({
  isPopupActive,
  currentBall,
  sectionData,
  baseImgData,
  videoEnded,
  startTest,
  testButton,
  poleData,
  videoCompleted,
  ballsData,
  timerContent,
  runAriaLive,
}) => {
  const testRef = useRef(null);
  const [fallingBall, setFallingBall] = useState(false);
  const [videoCanPlay, setVideoCanPlay] = useState(false);
  const [timeCounter, setTimeCounter] = useState("00:00");

  useEffect(() => {
    setFallingBall((prevState) => (prevState = false));
    setVideoCanPlay((prevState) => (prevState = false));
    timePassed = 0;
    onTimesUp();
    setTimeCounter("00:00");
  }, [currentBall]);

  useEffect(() => {
    if (!testRef.current) return;
    setTimeout(() => {
      testRef.current.focus();
    }, 300);
  }, [ballsData]);

  useEffect(() => {
    if (videoCompleted) {
      const fetchAllBall = document.querySelectorAll(".balls");
      const filterBalls = Array.from(fetchAllBall).filter(
        (e) => !e.classList.contains("balls--selected")
      );
      if (filterBalls.length) {
        filterBalls[0].focus();
      }
    }
  }, [videoCompleted]);

  function onTimesUp() {
    clearInterval(timerInterval);
  }
  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 15;
      timeLeft = TIME_LIMIT + timePassed;
      formatTime(timeLeft);

      if (timeLeft >= 4450) {
        onTimesUp();
      }
    }, 4);
  }
  const formatTime = (time) => {
    let minutes = Math.floor(time / 1000);
    let seconds = String(time % 1000).slice(0, 2);

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    setTimeCounter((prevState) => (prevState = `${minutes}:${seconds}`));
  };

  const updateContent = () => {
    const _splitData = timeCounter.split(":");
    const updateStr = `${String(_splitData[0]).slice(1)} ${
      timerContent.minutes
    } ${_splitData[1]} ${timerContent.seconds}`;
    return updateStr;
  };
  const playVideo = () => {
    setVideoCanPlay((prevState) => (prevState = true));
  };
  useEffect(() => {
    if (fallingBall && videoCanPlay) {
      setTimeout(() => {
        startTimer();
        runAriaLive();
      }, 300);
    }
  }, [fallingBall, videoCanPlay]);
  return (
    <div className="gravityLeftHolder">
      {currentBall != 0 && (
        <div className="dataTable">
          <h2 className="data_header">
            {sectionData[currentBall - 1].details.name}
          </h2>
          <div className="data_body">
            <p className="sr-only">
              {sectionData[currentBall - 1].details.Weight}
            </p>
            <p aria-hidden="true">
              {sectionData[currentBall - 1].details.Weight}
            </p>
            <p className="sr-only">
              {sectionData[currentBall - 1].details.diameterAria}
            </p>
            <p aria-hidden="true">
              {sectionData[currentBall - 1].details.Diameter}
            </p>
          </div>

          <div className="timer">
            <p className="sr-only">{updateContent()}</p>
            <p className="timeCount" aria-hidden="true">
              {timeCounter}
            </p>
            <div className="countName">
              <p aria-hidden="true">{timerContent.minutes}</p>
              <p aria-hidden="true">{timerContent.seconds}</p>
            </div>
          </div>
        </div>
      )}
      {currentBall != 0 && (
        <Button
          text={testButton} //{launchData.friction.content}
          ref={testRef}
          onClick={() => {
            setFallingBall((prevState) => (prevState = true));
            startTest();
          }}
          hideTooltip={false}
          disabled={fallingBall}
          ariaHidden={isPopupActive}
          isPopUpOpen={isPopupActive}
          classes="hotspot-btn label testBtn"
        />
      )}
      <div className={`${!fallingBall ? "hideVideo" : ""}`}>
        <Video onVideoEnded={videoEnded} canPlayThrough={playVideo} />
      </div>
      <div className="pole">
        {/* <div className="upArrow">
          <div className="arrowHead pole--upArrow"></div>
          <div className="line"></div>
        </div>
        <div className="downArrow">
          <div className="line"></div>
          <div className="arrowHead pole--downArrow"></div>
        </div> */}
        <p className="poleData" aria-hidden="true">
          {poleData.content}
        </p>
        <img src={poleData.imgSrc} alt="" />
      </div>
      <div
        className={`baseImage ${fallingBall ? "z-shifter" : ""}`}
        style={{ backgroundImage: `url(${baseImgData.imgSrc})` }}
        aria-label={!fallingBall ? baseImgData.alt : ""}
        aria-hidden={!fallingBall ? "false" : "true"}
        role="img"
      />
    </div>
  );
};

export default LeftSection;
