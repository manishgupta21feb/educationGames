import React from "react";
import Video from "./Video";
import ArrowBox from "./ArrowBox";
import { isAndroid } from "react-device-detect";
import "./style.scss";

export default (props) => {
  const { arrows, runState, onVideoEnded, selectedValue } = props;

  const videoEnded = () => {
    onVideoEnded();
  };

  return (
    <div
      className={`left-container ${isAndroid ? "increase-width" : ""}`.trim()}
    >
      <Video videoEnded={videoEnded} />
      <div aria-hidden className="images">
        <div
          className={`one ${!runState && selectedValue == 1 ? "show" : ""}`}
        ></div>
        <div
          className={`two ${!runState && selectedValue == 2 ? "show" : ""}`}
        ></div>
        <div
          className={`three ${!runState && selectedValue == 3 ? "show" : ""}`}
        ></div>
      </div>
      <ArrowBox arrows={arrows}></ArrowBox>
    </div>
  );
};
