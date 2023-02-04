import React, { useEffect, useState, useRef } from "react";
import SliderContainer from "../../containers/BallForceSliderContainer";
import VideoContainer from "../../containers/VideoContainer";
import Button from "../../../app/components/Button";
import "./main.scss";

const BallForce = ({
  viewData,
  isPopupActive,
  baseImage,
  beginWar,
  updateWarForce,
  videoStatus,
  exitActivityHandler,
  nextButtonLabel,
  continueButtonLabel,
  videoEnded,
}) => {
  const [exitActivity, setExit] = useState(false);
  const continueRef = useRef(null);

  useEffect(() => {
    if (!beginWar) return;
    setExit(true);
  }, [beginWar]);

  useEffect(() => {
    if (!videoStatus) return;

    if (continueRef.current) {
      setTimeout(() => {
        continueRef.current.focus();
      }, 200);
    }
  }, [videoStatus]);

  return (
    <div className="ballForceContainer" aria-hidden={isPopupActive}>
      <div className="headerContainer">
        <h2 className="topic">{viewData.header}</h2>
        <p
          className="topic_container"
          dangerouslySetInnerHTML={{ __html: viewData.content }}
        />
      </div>
      {!beginWar && <SliderContainer />}

      <div className={`${!beginWar ? "hideVideo" : ""}`}>
        <VideoContainer onVideoEnded={videoEnded} />
      </div>

      <img
        src={baseImage.imgSrc}
        alt={beginWar ? "" : baseImage.alt}
        className={`baseImage`}
      />
      {exitActivity && !beginWar && (
        <Button
          text={nextButtonLabel}
          ariaLable={nextButtonLabel}
          ariaHidden={isPopupActive || beginWar}
          hideTooltip={false}
          classes={`toast-secondary-button positive exitActivity right-arrow`}
          onClick={() => {
            exitActivityHandler();
          }}
          isPopupActive={isPopupActive || beginWar}
          disabled={isPopupActive || beginWar}
        />
      )}
      {videoStatus && (
        <Button
          ref={continueRef}
          text={continueButtonLabel}
          ariaLable={continueButtonLabel}
          ariaHidden={isPopupActive}
          hideTooltip={false}
          classes={`toast-secondary-button positive right-arrow continue`}
          onClick={() => {
            updateWarForce();
          }}
          isPopupActive={isPopupActive}
          disabled={isPopupActive}
        />
      )}
    </div>
  );
};

export default BallForce;
