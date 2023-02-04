import React, { useRef, useState, useEffect } from "react";
import Video from "../../../containers/videoContainer";
import Button from "../../../../app/components/Button";
import "../video.scss";

const LeftSection = ({
  isPopupActive,
  isActivityRunning,
  updateVideoCount,
  conclusion,
  isTestCompleted,
  testCompleted,
  currentVideoCount,
  baseImgData,
  resetExperiement,
  resetFocus,
  videoFinished,
  testButton,
  closeButton,
  videoCompletedF,
  videoId,
  currentExperiment,
  runAriaLive,
}) => {
  const testRef = useRef(null);
  const closeRef = useRef(null);
  const [isLevelComplete, setLevelOne] = useState(false);

  useEffect(() => {
    if (isTestCompleted) {
      closeRef.current.focus();
    }
  }, [isTestCompleted]);

  useEffect(() => {
    if (videoCompletedF) {
      if (currentVideoCount == 0 || currentVideoCount == 1) {
        setTimeout(() => {
          if (testRef.current) {
            testRef.current.focus();
          }
        }, 300);
      }
    }
  }, [videoCompletedF]);

  const videoCompleted = (evt) => {
    if (currentVideoCount > 0) {
      testCompleted();
      setLevelOne((prevState) => (prevState = false));
    } else {
      setLevelOne((prevState) => (prevState = true));

      let _object = document.querySelector("video");

      if (currentExperiment == "experiment1") {
        _object.classList.add("friction_poster_2");
        _object.classList.remove("friction_poster_1");
      }
      if (currentExperiment == "experiment2") {
        _object.classList.add("friction_poster_4");
        _object.classList.remove("friction_poster_3");
      }
    }

    videoFinished();
  };
  return (
    <div
      className="frictionLeftHolder"
      id={`vid_${videoId}`}
      key={`vid_${videoId}`}
    >
      <div className={`testClass ${!isActivityRunning ? "hideVideo" : ""}`}>
        <Video onVideoEnded={videoCompleted} canPlayThrough={runAriaLive} />
      </div>
      <div
        className={`baseImage `}
        style={{ backgroundImage: `url(${baseImgData.imgSrc})` }}
        aria-label={isActivityRunning ? "" : baseImgData.alt}
        role="img"
      />
      {isTestCompleted && (
        <div className="conclusionContainer" key={`close_${videoId}`}>
          <p
            dangerouslySetInnerHTML={{ __html: conclusion }}
            id="dialog-description-infoBox"
          />
          <Button
            text={closeButton}
            ref={closeRef}
            onClick={() => {
              resetExperiement();
            }}
            hideTooltip={false}
            disabled={false}
            ariaHidden={isPopupActive}
            isPopUpOpen={isPopupActive}
            classes="hotspot-btn label"
          />
        </div>
      )}
      {isLevelComplete && (
        <Button
          text={testButton} //{launchData.friction.content}
          ref={testRef}
          onClick={() => {
            updateVideoCount();
            setLevelOne((prevState) => (prevState = false));
          }}
          hideTooltip={false}
          disabled={!isActivityRunning}
          ariaHidden={isPopupActive}
          isPopUpOpen={isPopupActive}
          classes="hotspot-btn label testBtn"
        />
      )}
    </div>
  );
};

export default LeftSection;
