import React from "react";
import DroppableContainer from "../../../containers/DoppableContainer";
import "./style.scss";
const LeftArea = (props) => {
  const { secondScreen, isPopupActive, imageAltText } = props;
  return (
    <div className="left-area" aria-hidden={isPopupActive}>
      <img className="sr-only sr-image" alt={imageAltText} />
      <div
        className={`left-container ${secondScreen ? "image2" : "image1"}`}
        aria-hidden={isPopupActive}
      >
        <DroppableContainer />
      </div>
    </div>
  );
};

export default LeftArea;
