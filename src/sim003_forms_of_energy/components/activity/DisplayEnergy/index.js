import React, { useEffect, useRef } from "react";
import ButtonContinue from "../../../containers/ButtonContinue";
import "./styles.scss";

const DisplayEnergy = (props) => {
  const ref = useRef(null);
  const timeoutRef = useRef(null);
  const playingRef = useRef(false);
  const { data, selectedQuestion, videoPlayState } = props;
  const resultEnergy = selectedQuestion.associatedEnergy;

  const visChange2 = (e) => {
    if (document.visibilityState === "visible") {
      if (playingRef.current) {
        if (ref && ref.current) {
          const _videos = [];
          const videos = ref.current.querySelectorAll("video");
          for (let video of videos) {
            const id = video.getAttribute("id");
            if (
              id &&
              videoPlayState &&
              selectedQuestion &&
              selectedQuestion.associatedEnergy &&
              selectedQuestion.associatedEnergy.indexOf(id) >= 0
            )
              // video.play();
              _videos.push(video);
          }
          setTimeout(() => {
            for (let video of _videos) {
              video.play();
            }
          }, 350);
        }
      }
    } else if (document.visibilityState === "hidden") {
      if (playingRef.current) {
        if (ref && ref.current) {
          const videos = ref.current.querySelectorAll("video");
          for (let video of videos) {
            const id = video.getAttribute("id");
            if (
              id &&
              videoPlayState &&
              selectedQuestion &&
              selectedQuestion.associatedEnergy &&
              selectedQuestion.associatedEnergy.indexOf(id) >= 0
            )
              video.pause();
          }
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener("visibilitychange", visChange2, true);
    return () => {
      document.removeEventListener("visibilitychange", visChange2, true);
    };
  }, []);

  useEffect(() => {
    if (ref && ref.current) {
      const videos = ref.current.querySelectorAll("video");
      if (videoPlayState) {
        for (let video of videos) {
          const id = video.getAttribute("id");
          if (
            id &&
            videoPlayState &&
            selectedQuestion &&
            selectedQuestion.associatedEnergy &&
            selectedQuestion.associatedEnergy.indexOf(id) >= 0
          )
            video.play();
        }
      } else {
        for (let video of videos) {
          video.pause();
          video.currentTime = 0;
        }
      }
    }
    playingRef.current = videoPlayState;
  }, [videoPlayState]);

  useEffect(() => {
    if (selectedQuestion && ref && ref.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        const videos = ref.current.querySelectorAll("video");
        for (let video of videos) {
          const id = video.getAttribute("id");
          if (
            id &&
            videoPlayState &&
            selectedQuestion.associatedEnergy &&
            selectedQuestion.associatedEnergy.indexOf(id) >= 0
          )
            video.play();
        }
      });
    }
  }, [selectedQuestion]);

  const energiesAssocHeading = `${data.energiesHeading} ${selectedQuestion.questionId}`;
  return (
    <div className="energies-container">
      <div
        role="heading"
        aria-level="1"
        className="energies-heading"
        aria-label={energiesAssocHeading}
      >
        <p aria-hidden="true">{energiesAssocHeading}</p>
      </div>
      <div
        ref={ref}
        className={`energy-container ${selectedQuestion.questionId}`}
      >
        {data.energyData.map((n, i) => {
          const result = resultEnergy && resultEnergy.includes(n.answerId);
          const selected = result ? "active" : "inactive";
          return (
            <div
              key={`${n.id}-${i}`}
              className={`energy ${n.answerId}-display`}
            >
              {selected == "active" ? (
                <p className="sr-only-text">{n.label}</p>
              ) : null}
              <div className={`video-wrapper ${n.answerId}`}>
                <video
                  loop
                  muted
                  playsInline
                  tabIndex="-1"
                  preload="auto"
                  id={n.answerId}
                  aria-hidden={true}
                  src={n.AnsAnimation}
                ></video>
                <div className="video-overlay"></div>
              </div>
              <div className="energy-captionwrap" aria-hidden="true">
                <p>{n.id}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="continue-button">
        <ButtonContinue />
      </div>
    </div>
  );
};

export default DisplayEnergy;
