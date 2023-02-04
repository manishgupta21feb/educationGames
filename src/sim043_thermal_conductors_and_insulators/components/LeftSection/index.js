import React, { useRef, useEffect, useState } from "react";
import "./style.scss";
import TemperatureGraphContainer from "../../containers/TemperatureGraphContainer";
import AccessibleList from "../../containers/AccessibleList";

const LeftSection = (props) => {
  const dropzoneRef = useRef(null);

  const [timer, setTimer] = useState(0);
  const [countStatus, setCountStatus] = useState(true);

  const {
    dropzone,
    selectedDraggable,
    selectedGlass,
    setGlass,
    isDropped,
    setIsDropped,
    setTimerStatus,
    isNext,
    activityStarted,
    graphTitle,
    graphLeftInfo,
    graphBottomInfo,
    indicatorText,
    imgAltText,
    blankGlassAltText
  } = props;

  const startTimer = () => {
    return setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
  };

  const stopTimer = (interval) => {
    clearInterval(interval);
  };

  useEffect(() => {
    if (isDropped) {
      var interval = startTimer();
      if (timer == 30) {
        stopTimer(interval);
        setTimerStatus(false);
      }
      if (timer >= 10) {
        setCountStatus(false);
      }
      return () => clearInterval(interval);
    }
  }, [timer, isDropped]);

  useEffect(() => {
    if (isNext) {
      setTimer(0);
      setCountStatus(true);
    }
  }, [isNext]);

  const createDroppable = () => {
    $(dropzoneRef.current).droppable({
      tolerance: "touch",
      drop: (event, ui) => {
        setGlass(selectedDraggable);
        setIsDropped(true);
        ui.helper[0].style.display = "none";
      },
    });
  };

  useEffect(() => {
    createDroppable();
  }, [selectedDraggable]);

  return (
    <div className="left-section">
      <div className="temperature-graph-wrapper">
        <h2 className="graph-title">{graphTitle}</h2>
        {
          isDropped &&
          <div className={`graph-material-indicator ${selectedGlass.id}`}>
            <p className="sr-only">{indicatorText}</p>
            <span className="icon" aria-hidden="true"></span>
            <span className="text" aria-hidden="true">{selectedGlass.label}</span>
          </div>
        }
        <p className={`graph-left-info ${isDropped ? "active" : ""}`}>
          {graphLeftInfo}
        </p>
        <TemperatureGraphContainer timer={timer} />
        <p className="graph-bottom-info">{graphBottomInfo}</p>
      </div>
      <div className="bottom-wrapper">
        <div className={`steam-wrapper ${activityStarted ? "active" : ""}`}>
          <div className="steam steam-1"></div>
          <div className="steam steam-2"></div>
          <div className="steam steam-3"></div>
          <div className="steam steam-4"></div>
          <div className="steam steam-5"></div>
        </div>
        <div className="dropzone-label">
          <div
            className="dropzone"
            data-id={dropzone.id}
            data-target={dropzone.target}
            ref={dropzoneRef}
          >
          </div>
          <img className="sr-only sr-image" alt={`${selectedGlass == 'blank-glass' ? blankGlassAltText : imgAltText}`}/>
          <span className={`glass-image ${selectedGlass.id}`}></span>
        </div>
        <div className="timer-wrapper">
          <p>
            <span className="sr-only sr-image">{`0 minutes ${timer} seconds`}</span>
            <span aria-hidden="true">{`00:${
              countStatus ? 0 : ""
            }${timer}`}</span>
          </p>
        </div>
        <AccessibleList/>
      </div>
    </div>
  );
};

export default LeftSection;
