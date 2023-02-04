import React, { useEffect, useRef, useState } from "react";
import Video from "../../../../app/components/Video";
import AccessibleList from "../../../containers/AccessibleList";

const Left = (props) => {
  const ref = useRef(null);
  const {
    onDrop,
    draggables,
    droppedItem,
    buttonLabels,
    currentPopup,
    setDroppedItem,
    nextScreenButton,
    showNextScreenButton,
    buttonValue,
    screenonemainlabel,
    screen1leftalt,
  } = props;
  const btnRef = useRef(null);
  const [videoState, setVideoState] = useState(false);

  useEffect(() => {
    if (!droppedItem) {
      if (ref.current) {
        const dropzone = ref.current.querySelector(".dropzone");
        if (dropzone) {
          $(dropzone).droppable({
            drop: (event) => {
              const {
                dataset: { target },
              } = event.target;
              onDrop(target);
            },
          });
        }
      }
    }
  }, []);
  useEffect(() => {
    if (buttonValue) {
      setVideoState(false);
    }
  }, [buttonValue]);

  const onVideoEnded = () => {
    showNextScreenButton();
    setVideoState(true);
  };

  useEffect(() => {
    if (!nextScreenButton && btnRef.current) {
      setDroppedItem(null);
    }
    btnRef.current = nextScreenButton;
  }, [nextScreenButton]);

  return (
    <div ref={ref} className="left-wrapper">
      <AccessibleList />
      <div
     role="img"
     aria-label={screen1leftalt}
        aria-hidden="true"
        className={`stellar-nebula ${droppedItem ? "hide" : ""}`}
      >
        <div className="dropzone" data-target="dropzone"></div>
      </div>
      {draggables.map((v) => {
        const question = {
          alt: v.videoAlt,
          id: `video-${v.id}`,
          videoSrc: v.videoSrc,
        };

        const check = droppedItem == v.id;

        return (
          <div key = {v.id}>
            <p  aria-hidden="true" className="screen1mainlabel opensans-label">
              {screenonemainlabel}
            </p>
            {videoState && check
              ? v.labels.map((items,index) => {
                  return (
                    <div
                     key={index}
                      aria-hidden="true"
                      className={`screenonelabels opensans-label ${items.id}`}
                    >
                      <p >{items.label}</p>
                    </div>
                  );
                })
              : null}
            <div
              key={`video-div-wrapper-${v.id}`}
              aria-hidden={!droppedItem || !check}
              className={`video ${check ? "show" : ""}`.trim()}
            >
              <Video
                question={question}
                buttonLabels={buttonLabels}
                currentPopup={currentPopup}
                onVideoEnded={onVideoEnded}
                togglePlayState={check ? "play" : "stop"}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Left;
