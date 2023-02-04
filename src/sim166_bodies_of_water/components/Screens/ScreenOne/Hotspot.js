import React, { useState } from "react";
import "./style.scss";
import Button from "../../../../app/components/Button";
import OutputVideo from "../../../containers/OutputContainer";
import Video from "../../../../app/components/Video";
import OutputContainer from "../../../containers/OutputContainer";
const Hotspot = (props) => {
  const {
    bgAlt,
    heading,
    subHeading,
    hotspots,
    isPopupActive,
    selectedHotspot,
    onClick,
    hotspotVisitAlt,
    isVideoVisible,
  } = props;

  return (
    <div className="layout_1">
      <>
        <div
          className={`full-view ${
            !isVideoVisible ? "selectedView" : "hiddenView"
          } `}
        >
          <img className="sr-only sr-image" alt={bgAlt} />
          <p
            className="sub--heading"
            dangerouslySetInnerHTML={{ __html: subHeading }}
          />
          {hotspots.map((m) => {
            const selected = selectedHotspot == m.id;
            const hotspotGlowClasses = `icon icon-only glowing-hotspot ${
              m.id
            } ${selected ? "selected" : ""}`;
            const vistedHotSpot = `icon icon-only glowing-hotspot ${m.id} ${
              selected ? "selected" : ""
            } `;
            return (
              <React.Fragment key={`hotspot-btn-${m.id}`}>
                <div className={`hotspot-btn-wrapper ${m.id}`}>
                  <Button
                    ariaPressed={selected}
                    isPopupActive={isPopupActive}
                    id={m.id}
                    onClick={() => onClick(m.id)}
                    classes={
                      m.visited && !selected
                        ? vistedHotSpot
                        : hotspotGlowClasses
                    }
                    label={`${m.label} ${
                      m.visited && !selected ? hotspotVisitAlt : ""
                    }`}
                  ></Button>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <OutputContainer />
      </>
    </div>
  );
};

export default Hotspot;
