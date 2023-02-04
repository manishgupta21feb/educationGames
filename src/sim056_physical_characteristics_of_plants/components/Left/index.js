import "./style.scss";
import React, { useEffect, useRef, useState } from "react";

const LeftArea = (props) => {
  let { selectedOptions, flowerParts, completedImgAlt, getLabels } = props;

  return (
    <div className="left-area">
      <img
        className="sr-only sr-image"
        alt={getLabels.aria == "" ? completedImgAlt : getLabels.aria}
      />
      <div className="all-part">
        {flowerParts.map((val, index) => {
          return selectedOptions.find(
            (element) => element.toLowerCase() == val.aria.toLowerCase()
          ) ? (
            <img
              src={val.path}
              key={index}
              className={val.classes}
              alt={val.alt}
              aria-hidden
            />
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
};

export default LeftArea;
