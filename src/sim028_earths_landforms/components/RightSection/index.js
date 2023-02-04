import React, { useState, useEffect, useRef } from "react";
import Button from "../../../app/components/Button";
import { getSimLanguage } from "../../../app/helpers";

import "./style.scss";

const rightSection = (props) => {
  const tempRef = useRef(null);
  const buttonRef = useRef(null);
  const scrollRef = useRef(null);
  const scrollableRef = useRef(null);
  const [selectedHSOptions, setHSOptions] = useState([]);
  const keys = [
    " ",
    "Tab",
    "Enter",
    "ArrowUp",
    "ArrowLeft",
    "ArrowDown",
    "ArrowRight",
  ];

  const {
    playSfx,
    landforms,
    isPopupOpen,
    hotspotOptions,
    selectedOption,
    onLandformClick,
    selectedHotspot,
    selectedLandform,
    onSubsectionClick,
    activityInstructions,
    weatheringOrErosionText,
    erosionInfoText,
    weatheringInfoText,
  } = props;

  useEffect(() => {
    if (selectedHotspot) {
      const options = landforms
        .filter((l) => l.id == selectedLandform)[0]
        .hotspots.filter((h) => h.id == selectedHotspot)[0].options;
      setHSOptions(options.map((o) => ({ ...o })));
      setTimeout(() => {
        if (scrollableRef.current) {
          const spanButton = scrollableRef.current.querySelector(
            "button.speaker-icon"
          );
          if (spanButton) {
            tempRef.current = spanButton;
            spanButton.setAttribute("aria-describedby", "fossil-info-section");
            spanButton.focus();
          } else {
            const button = scrollableRef.current.querySelector(
              "button:not([disabled])"
            );
            if (button) {
              tempRef.current = button;
              button.setAttribute("aria-describedby", "fossil-info-section");
              button.focus();
            }
          }
        }
      }, 200);
    } else {
      setHSOptions([]);
    }
  }, [selectedHotspot]);

  useEffect(() => {
    if (selectedOption) {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView();
      }
    }
  }, [selectedOption]);

  const speakerIconInteraction = (e) => {
    e.stopPropagation();
    if (
      e.target &&
      e.target.nodeName.toLowerCase() == "button" &&
      e.target.dataset &&
      e.target.dataset.sfxId
    ) {
      playSfx(e.target.dataset.sfxId);
    }
  };

  const onClickTop = (e) => {
    e.stopPropagation();
    speakerIconInteraction(e);
  };

  const onKeyDown = (e) => {
    if (e.key) {
      if (e.key == " " || e.key == "Enter") {
        speakerIconInteraction(e);
      }
      if (keys.indexOf(e.key) >= 0) {
        if (tempRef.current) {
          if (tempRef.current.getAttribute("aria-describedby") !== null) {
            tempRef.current.removeAttribute("aria-describedby");
          }
          tempRef.current = null;
        }
      }
    }
  };

  useEffect(() => {
    if (
      isPopupOpen !== undefined &&
      isPopupOpen !== null &&
      scrollableRef.current
    ) {
      const spanButton =
        scrollableRef.current.querySelectorAll("span.speaker-icon");
      if (spanButton && spanButton.length) {
        for (let btn of spanButton) {
          btn.tabIndex = isPopupOpen ? -1 : 0;
        }
      }
    }
  }, [isPopupOpen]);

  return (
    <div className="right-section">
      <div>
        <h2>{activityInstructions}</h2>
      </div>
      <div className="topbuttons">
        {props.actionButtons.map((item) => {
          const classes = `btn-chip ${
            item.id == selectedLandform ? "selected" : ""
          }`;
          return (
            <Button
              key={item.id}
              text={item.text}
              ref={buttonRef}
              classes={classes}
              isPopupActive={isPopupOpen}
              onClick={() => onLandformClick(item.id)}
              ariaPressed={item.id == selectedLandform}
            />
          );
        })}
      </div>
      {selectedLandform && selectedHotspot ? (
        <div
          // role="alertdialog"
          // aria-hidden={false}
          // aria-describedby="fossil-info-section"
          className={`fossil-info ${selectedHotspot}`}
        >
          <div>
            <div
              onClick={onClickTop}
              onKeyDown={onKeyDown}
              id="fossil-info-section"
            >
              {landforms
                .filter((landform) => selectedLandform == landform.id)
                .map((landform) => {
                  return landform.hotspots
                    .filter((hotspot) => hotspot.id == selectedHotspot)
                    .map((hotspot) => {
                      const hasErosionButton =
                        hotspot.options.findIndex((o) => o.id == "erosion") >=
                        0;
                      const hasWeatherButton =
                        hotspot.options.findIndex(
                          (o) => o.id == "weathering"
                        ) >= 0;
                      return (
                        <div key={`hotspot-text-info${hotspot.id}`}>
                          <h3 className="heading">{hotspot.text}</h3>
                          <div
                            ref={scrollableRef}
                            className="hotspot-scrollable-section"
                          >
                            <div
                              dangerouslySetInnerHTML={{
                                __html: hotspot.description,
                              }}
                            ></div>
                            <p
                              id="fossil-image-id"
                              className="weathering-erosion-text"
                            >
                              {`${hasWeatherButton ? weatheringInfoText : ""} ${
                                hasErosionButton ? erosionInfoText : ""
                              }`.trim()}
                            </p>
                            <div
                              className={`hotspot-options-buttons ${getSimLanguage()}`}
                            >
                              {hotspotOptions.map((element) => {
                                const classes = `btn-chip ${
                                  element.id == selectedOption ? "selected" : ""
                                }`;
                                const disabled =
                                  selectedHSOptions.findIndex(
                                    (s) => s.id == element.id
                                  ) == -1;
                                return (
                                  <Button
                                    key={element.id}
                                    classes={classes}
                                    text={element.text}
                                    ariaExpanded={null}
                                    onClick={() =>
                                      onSubsectionClick(element.id)
                                    }
                                    labelledby={
                                      selectedOption && !disabled
                                        ? `suboption-${element.id}`
                                        : null
                                    }
                                    disabled={disabled}
                                    isPopupActive={
                                      isPopupOpen || !selectedHotspot
                                    }
                                    ariaPressed={element.id == selectedOption}
                                  />
                                );
                              })}
                            </div>
                            {selectedOption
                              ? selectedHSOptions
                                  .filter((s) => s.id == selectedOption)
                                  .map((s) => (
                                    <div
                                      className="selected-option-text"
                                      id={`suboption-${selectedOption}`}
                                      key={`selected-option-image${s.id}`}
                                      dangerouslySetInnerHTML={{
                                        __html: s.text,
                                      }}
                                    ></div>
                                  ))
                              : null}
                            <span
                              ref={scrollRef}
                              className="scroll-hold-span"
                              style={{ position: "relative" }}
                            ></span>
                          </div>
                        </div>
                      );
                    });
                })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default rightSection;
