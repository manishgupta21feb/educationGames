import React from "react";
import Arrow from "../common/Arrow";

export default (props) => {
  const { topText, bottomText, arrowAltText, altText, imageLabel } = props;
  return (
    <div className="image-container">
      <p className="txt top-text">{topText}</p>
      <Arrow altText={arrowAltText} classes={"top part2"}></Arrow>
      <div className="image-two">
        <p>{imageLabel}</p>
        <img className="sr-only sr-image" alt={altText}></img>
      </div>
      <Arrow altText={arrowAltText} classes={"bottom part2"}></Arrow>
      <p className="txt bottom-text">{bottomText}</p>
    </div>
  );
};
