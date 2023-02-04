import React, { useEffect, useRef, useState } from "react";
import Label from "../../../app/components/Label";
import Button from "../../../app/components/Button";
import { getSimLanguage } from "../../../app/helpers";
import "./style.scss";

const hotspotArea = (props) => {
  const ref = useRef(null);
  const selectedHotspotRef = useRef("");
  const currentPopupRef = useRef(props.currentPopup);
  const [earthAnimationState, setEarthAnimationState] = useState(false);
  const {
    onClick,
    playSfx,
    landforms,
    scaleChange,
    buttonLabels,
    currentPopup,
    isPopupActive,
    selectedOption,
    selectedHotspot,
    selectedLandform,
    earthAnimationAlt,
  } = props;

  const onPlayPause = (e) => {
    playSfx(!earthAnimationState);
    setEarthAnimationState((st) => !st);
  };

  useEffect(() => {
    if (ref.current) {
      const earth = ref.current.querySelector(".earth-animation");
      if (earth) {
        if (earth.classList.value.includes("animate")) {
          earth.classList.remove("animate");
          setTimeout(() => {
            earth.classList.add("animate");
          }, 50);
        }
      }
    }
  }, [scaleChange]);

  useEffect(() => {
    if (selectedHotspotRef.current && selectedHotspot == "") {
      if (ref && ref.current) {
        const button = ref.current.querySelector(
          `button#${selectedHotspotRef.current}`
        );
        if (button) {
          button.focus();
        }
      }
    }
    selectedHotspotRef.current = selectedHotspot;
  }, [selectedHotspot]);

  useEffect(() => {
    if (
      currentPopupRef.current.indexOf(1) >= 0 &&
      currentPopupRef.current.indexOf(3) == -1 &&
      currentPopup.indexOf(1) == -1
    ) {
      setEarthAnimationState(true);
    } else if (
      currentPopupRef.current.indexOf(1) == -1 &&
      currentPopupRef.current.indexOf(3) >= 0 &&
      currentPopup.indexOf(1) == 0
    ) {
    }
    currentPopupRef.current = currentPopup;
  }, [currentPopup]);

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        const button = ref.current.querySelector(
          `.landform-${selectedLandform}.show button.glowing-hotspot`
        );
        if (button) {
          button.focus();
        }
      }
    }, 100);
  }, [selectedLandform]);

  return (
    <div className="hotspot-area" ref={ref}>
      <div
        className="earth"
        style={{
          display: selectedLandform == "earth" ? "block" : "none",
        }}
      >
        <div className="play-pause-button">
          <Button
            onClick={onPlayPause}
            label={
              earthAnimationState
                ? buttonLabels.pauseAnimation
                : buttonLabels.playAnimation
            }
            isPopupActive={isPopupActive}
            classes={`icon-only ${
              earthAnimationState ? "stop-state" : "play-state"
            }`}
          ></Button>
        </div>
        <div
          className={`earth-animation ${
            !isPopupActive && earthAnimationState
              ? "animate"
              : "pause-animation"
          }`}
        >
          <img alt={earthAnimationAlt} className="sr-only sr-image" />
        </div>
      </div>
      {landforms.map((landform) => {
        const classes = `landform landform-${landform.id} ${
          landform.id == selectedLandform ? "show" : ""
        }`.trim();
        return (
          <div
            key={landform.id}
            className={classes}
            aria-hidden={landform.id !== selectedLandform}
          >
            {landform.id == selectedLandform ? (
              <img alt={landform.alt} className="sr-only sr-image" />
            ) : null}
            {landform.hotspots.map((hotspot) => {
              const selected = selectedHotspot == hotspot.id;
              const classes = `icon icon-only glowing-hotspot ${hotspot.id} ${
                selected ? "selected" : ""
              }`;
              return (
                <div
                  key={hotspot.id}
                  className={`hotspot-btn-wrapper ${hotspot.id}`}
                >
                  <div className="glowing-wrapper">
                    <Button
                      id={hotspot.id}
                      classes={classes}
                      label={hotspot.label}
                      ariaPressed={selected}
                      onClick={() => onClick(hotspot.id)}
                      ariaHidden={landform.id !== selectedLandform}
                      disabled={
                        isPopupActive || landform.id !== selectedLandform
                      }
                    ></Button>
                  </div>
                  <Label
                    ariahide
                    type="brown"
                    text={hotspot.label}
                    classes={`${hotspot.id} ${getSimLanguage()}`}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
      {landforms.map((l) => {
        return l.hotspots.map((h) => {
          let label = h.alt;
          if (selectedOption) {
            const _label =
              h.subsectionImageAlt && h.subsectionImageAlt[selectedOption];
            if (_label) {
              label = _label;
            }
          }
          return (
            <div
              key={`hotspot-location-image${h.id}`}
              aria-hidden={!selectedHotspot || selectedHotspot !== h.id}
              className={`hotspot-location-image ${h.id} ${
                selectedHotspot == h.id ? "show" : ""
              } ${selectedOption?.trim()}`.trim()}
            >
              <img className="sr-only sr-image" alt={label} />
            </div>
          );
        });
      })}
    </div>
  );
};

export default hotspotArea;
