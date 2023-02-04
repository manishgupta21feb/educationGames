import React, { useEffect, useState } from "react";
import Video from "../../../../app/components/Video";
import "./style.scss";

const ImageContainer = (props) => {
  const {
    scenerioImage,
    imageId,
    buttonLabels,
    a11yVideoButtonLabel,
    currentPopup,
    observationsData,
    enableContinueBtn,
    onClick,
    scenarioTwoAlt,
    getNextClick,
    mcqView,
  } = props;

  const [playButton, setPlayButton] = useState(false);
  const [newPlayVideo, setNewPlayVideo] = useState(true);
  useEffect(() => {
    if (playButton) {
      setPlayButton(false);
    }
  }, [currentPopup.length]);

  const onVideoEndedHandler = () => {
    enableContinueBtn(false);

    setPlayButton(true);
  };

  const question = observationsData[imageId.replace(/\D/g, "") - 1];
  const playStateToggledHandler = () => {
    onClick(a11yVideoButtonLabel);
  };

  const [currentVideo, setCurrentVideo] = useState([]);
  useEffect(() => {
    let result = [];
    scenerioImage.map((val) => {
      if (val.id == imageId) {
        result.push(val);
      }
    });
    setCurrentVideo(result);
  }, [imageId]);

  return (
    <div className="top-view">
      {getNextClick == 1 || getNextClick == -1
        ? currentVideo.map((items) => {
            const showImage = items.id == imageId;
            return (
              <div key={items.id} className="top-area">
                <div
                  key={items.id}
                  aria-hidden={
                    items.id == "scenerio2" || items.id == "scenerio4"
                      ? false
                      : true
                  }
                  className={`top-img ${items.id} ${showImage ? "" : "Hide"}`}
                >
                  {items?.labels.map((val) => {
                    const imageClass =
                      items.id == "scenerio2" && val.id == "label13";
                    return (
                      <div key={` ${val.id}`} className={` ${items.id}`}>
                        {imageClass ? (
                          <div
                            role="img"
                            className="imageShow"
                            aria-label={scenarioTwoAlt}
                          />
                        ) : null}
                        <p
                          className={` ${val.id}`}
                          dangerouslySetInnerHTML={{ __html: val.label }}
                        ></p>
                      </div>
                    );
                  })}
                </div>
                {newPlayVideo ? (
                  question.id != "screen2" ? (
                    <Video
                      autoPlay={!mcqView ? true : false}
                      question={question}
                      buttonLabels={buttonLabels}
                      currentPopup={currentPopup}
                      disablePlayPauseButton={false}
                      ariaLable={a11yVideoButtonLabel}
                      onVideoEnded={() => onVideoEndedHandler()}
                      playStateToggled={(playState) =>
                        playStateToggledHandler(playState)
                      }
                    />
                  ) : null
                ) : null}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default ImageContainer;
