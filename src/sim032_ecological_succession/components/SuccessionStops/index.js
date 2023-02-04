import React, { useEffect, useRef, useState } from "react";
import Button from "../../../app/components/Button";
import EventManager from "../../../app/events/manager";
import InformationBox from "../InformationBox";
import InstructionTextBox from "../InstructionTextBox";
import { getSimLanguage } from "../../../app/helpers";
import "./style.scss";

const lang = getSimLanguage();

export default (props) => {
  const {
    infoText,
    stopData,
    onContinue,
    screenName,
    patterns,
    isPopupActive,
    infoBoxTitle,
    continueText,
    closeLabel,
  } = props;
  const [selectedStage, setSelectedStage] = useState("");
  const [infoBoxVisible, setInfoBoxVisible] = useState(false);
  const [visitedStops, setVisitedStops] = useState(new Set());
  const [isFirstTime, SetIsFirstTime] = useState(true);
  const [piePatterns, setPiePatterns] = useState([]);

  const btnRef = useRef([]);

  const selectedStopData = selectedStage
    ? stopData.filter((ele, i) => ele.name === selectedStage)
    : [];

  const isAllVisited = visitedStops.size === stopData.length;

  const loadImage = (src, cb) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = document.getElementById(`${screenName}-canvas`);
      if (canvas) {
        const ctx = canvas.getContext("2d");
        const fillPattern = ctx.createPattern(img, "no-repeat");
        if (cb && typeof cb == "function") {
          cb(null, fillPattern);
        }
      } else {
        cb("Error: unable to access canvas element.");
      }
    };
    img.onerror = (error) => {
      if (cb && typeof cb == "function") {
        cb(error);
      }
    };
  };

  const createPatterns = (patterns) => {
    const _patterns = {};
    for (let pattern of patterns) {
      ((_pattern) => {
        loadImage(_pattern.src, (error, response) => {
          if (!error) {
            _patterns[_pattern.class] = { pattern: response };
          } else {
            console.log("error: ", error);
          }
        });
      })(pattern);
    }
    return _patterns;
  };

  useEffect(() => {
    let canvas = null;
    if (!document.getElementById(`${screenName}-canvas`)) {
      canvas = document.createElement("canvas");
      canvas.id = `${screenName}-canvas`;
      canvas.width = 80;
      canvas.height = 80;
      canvas.style.position = "absolute";
      canvas.style.top = 0;
      const root = document.querySelector("#root");
      document.body.insertBefore(canvas, root);
    }
    const p = createPatterns(patterns);
    setPiePatterns(p);
    setTimeout(() => {
      const canvasEl = document.getElementById(`${screenName}-canvas`);
      if (canvasEl) {
        canvasEl.remove();
      }
    }, 500);
  }, []);

  const onStopClick = (stop, selected) => {
    if (!selected) {
      EventManager.broadcast("PRIMARY_CLICK");
      setSelectedStage(stop);
      setInfoBoxVisible(true);
      setVisitedStops(new Set([...visitedStops, stop]));
      if (isFirstTime) {
        SetIsFirstTime(false);
      }
    }
  };

  const onInfoClose = () => {
    EventManager.broadcast("SECONDARY_CLICK");
    setInfoBoxVisible(false);
    if (btnRef && btnRef.current) {
      btnRef.current.children.forEach((e) => {
        if (e.classList.contains(selectedStage)) {
          e.firstElementChild.firstElementChild.focus();
        }
      });
    }
  };

  const onContinueClick = () => {
    if (screenName === "volcanic") {
      onContinue(3);
    } else if (screenName === "wildfire") {
      onContinue(4);
    }
  };

  return (
    <div className={`${screenName}-container`}>
      <InstructionTextBox instructionText={infoText}></InstructionTextBox>
      <div ref={btnRef} className="stop-container">
        {stopData.map((stop, index) => {
          const viewClass = selectedStage === stop.name ? "show" : "";
          return (
            <div key={index} className={`stop-wrapper ${stop.name}`}>
              {" "}
              <div className={`button-wrapper`}>
                <button
                  aria-pressed={viewClass ? true : false}
                  className={`stop-button ${
                    selectedStage === stop.name && "selected"
                  }`}
                  aria-hidden={
                    isPopupActive || (isFirstTime && stop.name !== "stop1")
                  }
                  disabled={
                    isPopupActive || (isFirstTime && stop.name !== "stop1")
                  }
                  onClick={() =>
                    onStopClick(stop.name, selectedStage === stop.name)
                  }
                >
                  <p>{stop.buttonText}</p>
                </button>
              </div>
              <div className={`stop-img ${viewClass}`}>
                <img
                  aria-hidden={selectedStage !== stop.name}
                  className="sr-only sr-image"
                  alt={stop.altText}
                />
              </div>
              {selectedStage === stop.name ? (
                <InformationBox
                  onClose={onInfoClose}
                  closeLabel={closeLabel}
                  patterns={piePatterns}
                  infoBoxTitle={infoBoxTitle}
                  visibility={infoBoxVisible}
                  isPopupActive={isPopupActive}
                  stopData={selectedStopData[0]}
                ></InformationBox>
              ) : null}
            </div>
          );
        })}
      </div>
      {isAllVisited ? (
        <div className={`cont-btn-wrraper ${lang}`}>
          <Button
            text={continueText}
            ariaHidden={isPopupActive}
            onClick={onContinueClick}
            isPopupActive={isPopupActive}
            classes={`next-btn toast-secondary-button positive right-arrow`}
          ></Button>
        </div>
      ) : null}
    </div>
  );
};
