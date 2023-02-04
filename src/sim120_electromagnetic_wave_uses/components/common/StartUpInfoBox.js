import React from "react";
import "./_startUpInfoBox.scss";

export default (props) => {
  const { startUpInfoText, initialImageLabels, altText, imageLabel } = props;
  return (
    <div className="infobox">
      <p>{startUpInfoText}</p>
      <div className="info-img">
        <img className="sr-only sr-image" alt={altText}></img>
        <span className="image-label">{imageLabel}</span>
        <p className="text top">{initialImageLabels.label1}</p>
        <p className="text bottom">{initialImageLabels.label2}</p>
      </div>
    </div>
  );
};
