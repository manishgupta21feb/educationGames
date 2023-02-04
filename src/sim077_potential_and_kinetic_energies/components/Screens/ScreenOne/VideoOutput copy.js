import React from "react";
import "./style.scss";
import Button from "../../../../app/components/Button";
import VideoContainer from "../../../containers/VideoContainer";

const Output = (props) => {
  const {
    activeHotspot,
    isVideoEnded,
    btnText,
    btnDisabled,
    isPopupActive,
    onClick,
    labelling,
  } = props;
  return (
    <div className="output-container">
        <p
          className="video-description"
          dangerouslySetInnerHTML={{
            __html: activeHotspot.details.hotspotText,
          }}
        />
      <VideoContainer />
      <div className={`videoGraph_${activeHotspot.id}`} aria-hidden={true}>
      {labelling.map((label, index) => {
        return (
          <div key={`label_${index}`} className={`label_${index}`}>
            {label}
          </div>
        );
      })}
       {activeHotspot.details.graphLabel.map((gLabel, index) => {
          return <p  key={`gLabel_${index}`}  className={`graphLabel graphLabel_${index}`}>{gLabel}</p>;
        })}
      </div>
      <Button
        text={btnText}
        disabled={btnDisabled}
        classes="toast-secondary-button positive right-arrow"
        isPopupActive={isPopupActive}
        onClick={onClick}
      />
    </div>
  );
};

export default Output;
