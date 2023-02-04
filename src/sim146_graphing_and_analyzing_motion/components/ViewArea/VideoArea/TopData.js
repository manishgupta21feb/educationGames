import React, { useEffect, useRef, useState } from "react";

import "./style.scss";
import ContinueButton from "../../../containers/ContinueButton";

const TopData = (props) => {
  const {
    selectedVehicleData,
    data,
    currentPopup,
    setContinueState,
    isVideoPlay,
    videoTime,
    screenVal,
  } = props;

  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0.5);

  let stopDist = useRef(0);

  useEffect(() => {
    setTime(0);
  }, [screenVal]);

  useEffect(() => {
    if (selectedVehicleData.id == "ambulance") {
      if (videoTime < 6) {
        let dis = videoTime * 5;
        setTime(videoTime);
        setDistance(dis);
      } else if (videoTime > 5 && videoTime < 16) {
        setTime(videoTime);
        stopDist.current = videoTime * 5;
      } else if (videoTime == 18) {
        setDistance((dist) => dist + 1);
        setTime(videoTime);
      } else {
        setTime(videoTime);
        setDistance((dist) => dist + 5);
      }
    }
    if (selectedVehicleData.id == "lawn_mover") {
      if (videoTime < 11) {
        let dis = videoTime * 1;
        setTime(videoTime);
        setDistance(dis);
      } else if (videoTime > 11 && videoTime < 13) {
        setTime(videoTime);
        stopDist.current = videoTime * 1;
      } else if (videoTime < 25) {
        setDistance((dist) => dist + 1);
        setTime(videoTime);
      } else if (videoTime > 24 && videoTime < 27) {
        setTime(videoTime);
        stopDist.current = videoTime * 1;
      } else {
        setTime(videoTime);
        setDistance((dist) => dist + 1);
      }
    }
    if (selectedVehicleData.id == "truck") {
      if (videoTime < 6) {
        let dis = videoTime * 5;

        setTime(videoTime);
        setDistance(dis);
      } else if (videoTime > 5 && videoTime < 11) {
        setTime(videoTime);
        stopDist.current = videoTime * 5;
      } else if (videoTime > 10 && videoTime < 13) {
        setDistance((val) => val + 5);
        setTime(videoTime);
      } else if (videoTime > 13 && videoTime < 18) {
        let prevVal = stopDist.current;
        setTime(videoTime);
        stopDist.current = prevVal + 5;
      } else {
        setTime(videoTime);
        if (distance < 65) {
          setDistance((dist) => dist + 5);
        }
      }
    }
  }, [videoTime]);

  return (
    <div className="video-screen-container">
      <h2>{selectedVehicleData.animationHeading}</h2>
      <div className="time-distance-container">
        <div className="time">
          <p className="sr-only sr-image">{`${data.timeLabel} ${time} ${
            time == 1 ? data.secondOne : data.graphAltTxt2
          }`}</p>
          <p className="time-label" aria-hidden>
            {data.videoTime}
          </p>
          <div>
            <p className="time-value" aria-hidden>
              {time}
            </p>
            <p aria-hidden>s</p>
          </div>
        </div>
        <div className="distance">
          <p className="sr-only sr-image">{`${data.distanceLabel} ${distance} ${
            distance == 1 ? data.distanceOne : data.graphAltTxt3
          }`}</p>
          <p className="distance-label" aria-hidden>
            {data.videoDistance}
          </p>
          <div>
            <p className="distance-value" aria-hidden>
              {distance}
            </p>
            <p aria-hidden>m</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopData;
