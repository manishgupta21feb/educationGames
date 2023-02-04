import React, { useEffect, useState } from "react";
import Draggable from "../../containers/DraggableContainer";
import Droppable from "../../containers/DroppableContainer";
import VideoComponent from "../../containers/VideoContainer";
import Label from "../../components/Labels";
import Button from "../../../app/components/Button";
import "./main.scss";

const TugOfWar = ({
  activityImages,
  totalStrength,
  viewData,
  startWar,
  setWarVideo,
  labelData,
  continueButtonLabel,
  nextButtonLabel,
  isPopupActive,
  exitActivityHandler,
  resetTugOfWar,
  onVideoEnded,
}) => {
  useEffect(() => {
    if (!startWar) return;
    setExit(true);
  }, [startWar]);
  const [exitActivity, setExit] = useState(false);
  const valueMatcher = (arr1, arr2, source) => {
    arr1.sort();
    arr2.sort();
    if (arr1.length == arr2.length) {
      if (arr1.toString() == arr2.toString()) {
        setWarVideo(source);
        return true;
      }
    } else {
      return false;
    }
  };
  const updateImages = () => {
    return activityImages.map((element, index) => {
      return (
        <React.Fragment key={`base${index}`}>
          {valueMatcher(element.value, totalStrength, element.videoSource) ||
          (index == 0 && !totalStrength.length) ? (
            <span
              className="sr-only"
              role="img"
              aria-label={element.altText}
            ></span>
          ) : null}
          <img
            key={`tugImages${index}`}
            src={element.src}
            alt=""
            className={
              valueMatcher(element.value, totalStrength, element.videoSource) ||
              (index == 0 && !totalStrength.length)
                ? ""
                : "hide"
            }
          />
        </React.Fragment>
      );
    });
  };
  return (
    <div className="tugOfWarContainer">
      <div className="headerContainer">
        <h2 className="topic">{viewData.header}</h2>
        <p
          className="topic_container"
          dangerouslySetInnerHTML={{ __html: viewData.content }}
        />
      </div>

      {!startWar && <Draggable />}
      <Label
        labels={labelData[0].teamName}
        classes={"teamA teamA--aPos genericCl"}
        isHidden={isPopupActive || startWar}
        headingLevel="3"
      />
      {!startWar && <Droppable />}
      <Label
        labels={labelData[1].teamName}
        classes={"teamB teamA--bPos genericCl"}
        isHidden={isPopupActive || startWar}
        headingLevel="3"
      />
      <div className="imagesContainer" aria-hidden={startWar}>
        {updateImages()}
      </div>
      {!startWar && exitActivity && (
        <Button
          text={nextButtonLabel}
          ariaLable={nextButtonLabel}
          ariaHidden={isPopupActive}
          hideTooltip={false}
          classes={`toast-secondary-button positive right-arrow`}
          onClick={() => {
            exitActivityHandler();
          }}
          isPopupActive={isPopupActive}
          disabled={isPopupActive}
        />
      )}

      <div className={`${!startWar ? "hideVideo" : ""}`}>
        <VideoComponent onVideoEnded={onVideoEnded} />
      </div>
    </div>
  );
};

export default TugOfWar;
