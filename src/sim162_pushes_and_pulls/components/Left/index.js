import React from "react";
import Video from "./Video";
import { isAndroid } from "react-device-detect";
import "./style.scss";

export default (props) => {
  const { runState, onVideoEnded, screen } = props;

  const videoEnded = () => {
    onVideoEnded();
  };

  return (
    <div
      className={`left-container ${isAndroid ? "increase-width" : ""}`.trim()}
    >
      <Video videoEnded={videoEnded} {...props} />
      <div aria-hidden className="images">
        <div className={`one ${!runState && screen == 0 ? "show" : ""}`}></div>
        <div className={`two ${!runState && screen == 1 ? "show" : ""}`}></div>
        <div
          className={`three ${!runState && screen == 2 ? "show" : ""}`}
        ></div>
      </div>
    </div>
  );
};
