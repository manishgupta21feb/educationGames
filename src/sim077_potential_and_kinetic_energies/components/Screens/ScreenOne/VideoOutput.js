import React from "react";
import "./style.scss";
import Button from "../../../../app/components/Button";
import Video from "../../../../app/components/Video";


const Output = (props) => {
  const {
    currentPopup,
    isVideoEnded,
    btnText,
    btnDisabled,
    isPopupActive,
    onVideoEnded,
    playStateToggled,
    buttonLabels,
    continuePressed,
    isVideoVisible,
    hotspots,
    selectedHotspot,
    canPlayThrough,
  } = props;
  return (
    <div
          className={`videoOutputContainer ${
            isVideoVisible ? "selectedView" : "hiddenView"
          }`}
        >
          <div className={`fullViewVideoContainers`}>
            {hotspots.map((m) => {
              const showContainer= m.id== selectedHotspot 
              return (
                <div
                  key={`output-${m.id}`}
                  className={`videoSection ${m.id} ${showContainer ?"show":"hide"}`}
                >
                  <p
                    className="video-description"
                    dangerouslySetInnerHTML={{
                      __html: m.details.hotspotText,
                    }}
                  />
                  <div className={`videoGraph_${m.id}`} aria-hidden={true}>
                    <div className={`label_0`}>{m.details.labelling_0}</div>
                    <div className={`label_1`}>{m.details.labelling_1}</div>
                    <p className={`graphLabel graphLabel_0`}>
                      {m.details.label_0}
                    </p>
                    <p className={`graphLabel graphLabel_1`}>
                      {m.details.label_1}
                    </p>
                  </div>
                 {showContainer && <Video
                    autoPlay={true}
                    question={{
                      id: m.details.id,
                      videoSrc: m.details.videoSrc,
                      alt: m.details.alt
                    }}
                    loop={false}
                    buttonLabels={buttonLabels}
                    currentPopup={currentPopup}
                    onVideoEnded={onVideoEnded}
                    canPlayThrough={canPlayThrough}
                    playStateToggled={playStateToggled}
                  />}
                  
                  <Button
                    text={btnText}
                    disabled={btnDisabled}
                    classes="toast-secondary-button positive right-arrow"
                    isPopupActive={isPopupActive}
                    onClick={continuePressed}
                  />
                </div>
              );
            })}
          </div>
        </div>
  );
};

export default Output;
