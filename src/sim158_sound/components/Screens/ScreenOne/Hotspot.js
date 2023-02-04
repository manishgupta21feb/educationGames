import React, { useState } from "react";
import "./style.scss";
import data from "../../../data";
import Button from "../../../../app/components/Button";
import OutputVideo from "../../../containers/OutputContainer";

const Hotspot = (props) => {
  const {
    bgAlt,
    heading,
    hotspots,
    isPopupActive,
    selectedHotspot,
    onClick,
    hotspotVisitAlt,
    isVideoVisible,
    activeIndex,
  } = props;
  const hotspotText = data.hotspots[activeIndex].hotspotText;
  return (
    <div className="layout_1">
      {isVideoVisible ? (
        <OutputVideo />
      ) : (
        <div className="activity-area full-view">
          <h2
            className="full-view--heading"
            dangerouslySetInnerHTML={{ __html: hotspotText }}
          />
          <img className="sr-only sr-image" alt={bgAlt} />
          
          {hotspots.map((m) => {
            const selected = selectedHotspot == m.id;
            const hotspotGlowClasses = `icon icon-only glowing-hotspot ${
              m.id
            } ${selected ? "selected" : ""}`;
            const vistedHotSpot = `icon icon-only glowing-hotspot ${m.id} ${
              selected ? "selected" : ""
            } vistedHotSpot`;
            return (
              <div
                key={`hotspot-btn-${m.id}`}
                className={`hotspot-btn-wrapper ${m.id}`}
              >
                <Button
                  ariaPressed={selected}
                  isPopupActive={isPopupActive}
                  id={m.id}
                  onClick={() => onClick(m.id) }
                  classes={
                    m.visited && !selected ? vistedHotSpot : hotspotGlowClasses
                  }
                  label={`${m.label} ${
                    m.visited && !selected ? hotspotVisitAlt : ""
                  }`}
                  disabled={activeIndex != m.serialNo}
                ></Button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Hotspot;
