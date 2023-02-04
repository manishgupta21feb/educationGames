import React, { useEffect, useState } from "react";
import "./style.scss";
import Button from "../../../../../app/components/Button";
import VideoContainer from "../../../../containers/VideoContainer";
const Top = (props) => {
  const {
    hotspots,
    isPopupActive,
    activeHotspot,
    selectHotspot,
    isActivitystart,
    isScreenToggle,
    showFullCircuit,
    activityHeading,
    bgAltText,
    hotspotCount,
    showLabels,
    setShowLabels,
    isVideoEnded,
  } = props;
  useEffect(() => {
    if (hotspotCount == 2) {
      setTimeout(() => {
          setShowLabels(true);
        }, 2999);
    
    }
  }, [hotspotCount]);
  return (
    <div className="top-container">
      <h1 className="sr-only">{activityHeading}</h1>
      {!isScreenToggle && (
        <div className="hotspot-area">
          <img className="sr-only sr-image" alt={bgAltText} />
          {isActivitystart &&
            hotspots.map((h, index) => {
              const disabledBtn = activeHotspot.id == h.id ? "" : "visited";
              return (
                <React.Fragment key={h.id}>
                  <Button
                    id={h.id}
                    classes={`btn hotspot-btn label ${disabledBtn} ${h.id}`}
                    text={h.text}
                    disabled={activeHotspot.id != h.id}
                    isPopupActive={isPopupActive}
                    onClick={selectHotspot}
                  />
                  <div className={`dotted-lines ${h.id}`}></div>
                  <div className={`dot-circle ${h.id}`}></div>
                </React.Fragment>
              );
            })}
        </div>
      )}
      {isScreenToggle && (
        <>
          <VideoContainer />
          {!showFullCircuit && (
            <>
              {hotspotCount == 2 && showLabels
                ? activeHotspot.assets.videoEndLabels.map((label, index) => {
                    return (
                      <p
                        key={`labels_${index}`}
                        className={`VideoLabel EndlabelFor_${activeHotspot.id} label_${index}`}
                      >
                        {label}
                      </p>
                    );
                  })
                : null}
              {activeHotspot.assets.videoLabels.map((l, index) => {
                return (
                  <p
                    key={`label_${index}`}
                    className={`VideoLabel labelFor_${activeHotspot.id} label_${index}`}
                  >
                    {l}
                  </p>
                );
              })}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Top;
