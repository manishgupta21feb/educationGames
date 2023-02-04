import React, { useEffect, useRef } from "react";
import Button from "../../../app/components/Button";
import HotspotPopup from "../../containers/HotspotPopUpContainer";
import NextButtonContainer from "../../containers/NextButtonContainer";
import "./style.scss";

export const Hotspot = (props) => {
  const ref = useRef(null);
  const selectedHotspotRef = useRef("");
  const {
    onClick,
    hotspots,
    selectedHotspot,
    isPopupActive,
    heading,
    about,
    altVisited,
  } = props;

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

  const onFocus = (e) => {
    if (selectedHotspot) {
      props.selectHotspot("");
    }
  };

  return (
    <div className="full-view">
      <img className="sr-only sr-image" alt={about} />
      <h2 className="full-view--heading">{heading}</h2>
      <div className="full-view--hotspot" ref={ref}>
        {hotspots.map((m) => {
          const selected = selectedHotspot == m.id;
          const hotspotGlowClasses = `icon icon-only glowing-hotspot ${m.id} ${
            selected ? "selected" : ""
          }`;
          const vistedHotSpot = `icon icon-only glowing-hotspot ${m.id} ${
            selected ? "selected" : ""
          } vistedHotSpot`;
          return (
            <React.Fragment key={`${m.id}`}>
              <div
                className={`hotspot-btn-wrapper ${m.id} ${
                  selectedHotspot &&
                  selectedHotspot == m.id &&
                  `${m.id}-connecting-lines`
                }`}
              >
                <Button
                  ariaPressed={selected}
                  isPopupActive={isPopupActive}
                  id={m.id}
                  text={`${m.text} ${m.visited && !selected ? altVisited : ""}`}
                  onFocus={onFocus}
                  onClick={() => onClick(m.id)}
                  classes={
                    m.visited && !selected ? vistedHotSpot : hotspotGlowClasses
                  }
                >
                  <span className="temp-span"></span>
                </Button>
              </div>
              {selectedHotspot && selectedHotspot == m.id ? (
                <HotspotPopup />
              ) : null}
            </React.Fragment>
          );
        })}
      </div>
      <NextButtonContainer onFocus={onFocus} />
    </div>
  );
};

export default Hotspot;
