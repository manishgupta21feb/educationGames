import React, { useRef, useEffect } from "react";
import CloseButton from "../../../containers/CloseButtonContainer";
import "./style.scss";

const staticSide = (props) => {
  const {
    data,
    isPopupActive,
    currentHotSpot,
    visitedHotspotBtn,
    selectedQuestion,
    rightOst,
    onClick,
    showAlert,
    selectedSubQuestion,
    dialogText,
  } = props;

  return (
    <div className="right-container">
      <p dangerouslySetInnerHTML={{ __html: rightOst.ost }}></p>

      {currentHotSpot.length && showAlert ? (
        <div className={`hotspot-img`}>
          <div className={`img-hot--${currentHotSpot}`}>
            <img className="sr-only" alt={dialogText} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default staticSide;
