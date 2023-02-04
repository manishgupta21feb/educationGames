import React, { useEffect, useState, useRef } from "react";
import Button from "../../../app/components/Button";
import Video from "../../containers/Video";
import TextData from "../../config/index";

const LeftComponent = (props) => {
  const {
    scale,
    labels,
    dropZone,
    setSubmit,
    dropAccept,
    canvasData,
    dragElement,
    visibleData,
    videoScreen,
    rotateFocus,
    dropPlateAY,
    selectedYear,
    submitPlates,
    mapCompleted,
    setDragPlate,
    currentPopup,
    onRotateClick,
    focusDropZone,
    updateLiveText,
    setFocusDropZone,
    setVideoLiveText,
    videoPlayPauseLiveText,
    completionVideoLiveText,
  } = props;

  const ref = useRef(null);
  const timeoutRef = useRef(null);
  const [canvasText, setCanvasText] = useState("");
  const [togglePlay, setTogglePlay] = useState(null);
  let canvasDragPlate = canvasData && canvasData[selectedYear];
  const isRotation0 =
    canvasDragPlate &&
    (canvasDragPlate.angle == 0 || canvasDragPlate.angle == 180);
  const dimensions = canvasDragPlate && canvasDragPlate.dimensions;
  const dimension = dimensions
    ? isRotation0
      ? dimensions.degree0
      : dimensions.degree90
    : null;
  const exceptionPlate =
    selectedYear == 100 &&
    dropPlateAY == "australia" &&
    dropAccept == "australia" &&
    canvasDragPlate &&
    canvasDragPlate.angle;
  let exceptionCaseH = exceptionPlate == 90 || exceptionPlate == 270;

  const rotate = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onRotateClick();
    EventManager.broadcast("SECONDARY_CLICK");
    updateLiveText(TextData.rotateAlt);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      adjustPositionOnRotation();
    }, 200);
    setTimeout(() => {
      updateLiveText(" ");
    }, 1000);
  };

  const submitPlatesLocal = (itemDropped) => {
    EventManager.broadcast("PRIMARY_CLICK");
    submitPlates(itemDropped.class, dropAccept, itemDropped);
    let newText = itemDropped.description;
    setCanvasText(`${canvasText}, ${newText}`);
    setSubmit(true);
    // focusYears && focusYears.current.focus();
    setFocusDropZone(null);
    setDragPlate("");
  };
  const plateOnCanvas = visibleData.canvasPlate;
  useEffect(() => {
    setCanvasText(
      visibleData[selectedYear][plateOnCanvas] &&
        visibleData[selectedYear][plateOnCanvas].description
    );
    if (plateOnCanvas) {
      let disableDrop = document.getElementsByClassName(
        `${plateOnCanvas}-${selectedYear}`
      )[0];
      disableDrop.classList.add("drop-disable");
      disableDrop.classList.remove("ui-droppable");
    }
  }, [plateOnCanvas]);

  const adjustPositionOnRotation = () => {
    if (ref.current) {
      const element = ref.current.querySelector(".draggable-wrapper");
      const { right, bottom } = ref.current.getBoundingClientRect();
      const { right: right2, bottom: bottom2 } =
        element.getBoundingClientRect();
      if (right2 > right) {
        const diff = right2 - right;
        const elementLeft = element.style.left.split("px")[0];
        const _diff = scale <= 1 ? diff / scale + 2 : diff;
        const value = +elementLeft - _diff;
        element.style.left = `${value}px`;
      }
      if (bottom2 > bottom) {
        const diff = bottom2 - bottom;
        const elementTop = element.style.top.split("px")[0];
        const _diff = scale <= 1 ? diff / scale + 2 : diff;
        const value = +elementTop - _diff;
        element.style.top = `${value}px`;
      }
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    let state = null;
    if (videoScreen) {
      state = "play";
    }
    if (currentPopup.indexOf(6) >= 0) {
      state = "stop";
    }
    setTogglePlay(state);
  }, [videoScreen, currentPopup]);

  const onFocusHandler = (e) => {
    adjustPositionOnRotation();
  };

  useEffect(() => {
    if (videoScreen) {
      setVideoLiveText(completionVideoLiveText);
    }
  }, [videoScreen]);

  const playStateToggled = (playing) => {
    const state = playing ? "play" : "stop";
    const liveText = videoPlayPauseLiveText[state];
    updateLiveText(liveText);
    if (playing) {
      setTimeout(() => {
        setVideoLiveText(completionVideoLiveText);
      }, 100);
    }
  };

  return (
    <div ref={ref} className="left-container">
      <div
        aria-hidden={!videoScreen}
        className={`video-player ${videoScreen ? "" : "hidden"}`.trim()}
      >
        <Video
          togglePlayState={togglePlay}
          playStateToggled={playStateToggled}
          disablePlayPauseButton={!videoScreen}
        />
      </div>
      <div
        aria-hidden={videoScreen}
        className={`gridWapper ${videoScreen ? "hidden" : ""}`.trim()}
      >
        <img
          className="sr-only sr-image"
          alt={`${TextData.canvas} ${canvasText}`}
        />
        {visibleData.canvas.map((list, i) => {
          const plate = TextData[selectedYear][list];

          let itemDropped = visibleData[selectedYear][list];
          return (
            <div
              key={i}
              className={`grid-block ${plate.className}-${selectedYear} 
                         ${plateOnCanvas == list ? plate.className : ""}
                         ${focusDropZone == list ? "drop-hover" : " "}
              `}
              ref={(value1) => {
                dropZone.current.set(i, value1);
              }}
              data-accept={plate.className}
              aria-hidden="true"
            >
              <div
                className={`quesCont ${
                  plateOnCanvas == list || itemDropped.showCorrectAnswer
                    ? plate.className
                    : ""
                }`}
                style={{
                  backgroundImage: `url(${plate.svgData})`,
                }}
                aria-hidden="true"
              ></div>
              <div
                className={`label-wrap ${
                  labels && mapCompleted[selectedYear] ? "shown" : "hidden"
                }`}
                aria-hidden="true"
              >
                <div className={`dot ${plate.className}-${selectedYear}`}></div>
                <div
                  className={`line ${plate.className}-${selectedYear}`}
                ></div>
                <span className={`label ${plate.className}-${selectedYear}`}>
                  {plate.label}
                </span>
              </div>
            </div>
          );
        })}
        {canvasDragPlate ? (
          <div
            className={`draggable-wrapper dropped-${selectedYear}-${
              canvasDragPlate.class
            } 
            ${canvasDragPlate.dropped ? "hidden" : ""}`}
            ref={(value) => {
              dragElement.current.set(canvasDragPlate.serialNo, value);
            }}
            aria-hidden={canvasDragPlate ? "false" : "true"}
            style={{
              top: canvasDragPlate.top,
              left:
                (exceptionCaseH && canvasDragPlate.left - 33) ||
                canvasDragPlate.left,
              pointerEvents: canvasDragPlate ? "auto" : "none",
              width: dimension.width + 30,
              height: dimension.height,
              visibility: canvasDragPlate.visibility,
            }}
          >
            <div
              className={`plate-st ${
                canvasDragPlate.angle == 90 || canvasDragPlate.angle == 270
                  ? `${canvasDragPlate.class}-${selectedYear}-hori`
                  : ""
              }`}
              aria-label={canvasDragPlate.description}
              style={{
                backgroundImage: `url(${
                  TextData[selectedYear][canvasDragPlate.class].svgData
                })`,
                transform: `rotate(${canvasDragPlate.angle}deg)`,
                width: canvasDragPlate.width,
                height: canvasDragPlate.height,
                cursor: canvasDragPlate.dropped ? "auto" : "pointer",
              }}
            ></div>
            <div
              className={`btn-wrap 
            ${
              canvasDragPlate.angle == 90 || canvasDragPlate.angle == 270
                ? `${canvasDragPlate.class}-${selectedYear}-hori`
                : ""
            }`}
              aria-hidden={canvasDragPlate.dropped}
            >
              <Button
                ref={rotateFocus}
                label={TextData.rotate}
                onFocus={onFocusHandler}
                onClick={(e) => rotate(e)}
                classes="rotate-btn icon-only"
                disabled={!canvasDragPlate || videoScreen}
                isPopUpOpen={!canvasDragPlate || canvasDragPlate.dropped}
              ></Button>
              <Button
                label={TextData.submit}
                classes={`submit icon-only`}
                disabled={!canvasDragPlate || videoScreen}
                onClick={() => submitPlatesLocal(canvasDragPlate)}
                isPopUpOpen={!canvasDragPlate || canvasDragPlate.dropped}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default LeftComponent;
