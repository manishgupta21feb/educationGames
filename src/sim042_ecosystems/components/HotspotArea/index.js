import React, { useEffect, useRef } from "react";
import Button from "../../../app/components/Button";
import HotspotPopup from "../../containers/HotspotPopup";
import "./style.scss";

const hotspotArea = (props) => {
  const ref = useRef(null);
  const selectedHotspotRef = useRef("");
  const {
    onClick,
    hotspots,
    isPopupActive,
    selectedHotspot,
    fossilsBGAltText,
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
    selectedHotspotRef.current = selectedHotspot.id;
  }, [selectedHotspot]);

  const onFocus = (e) => {
    if (selectedHotspot) {
      props.selectHotspot("");
    }
  };
  return (
    <div className="hotspot-area" ref={ref}>
      <h1 className="sr-only">{props.helpPopupText}</h1>
      <img className="sr-only sr-image" alt={fossilsBGAltText} />
      {hotspots.map((m) => {
        const disabled = isPopupActive || m.matched == "correct";
        const selected = selectedHotspot.id == m.id;
        const hotspotGlowClasses = `icon icon-only glowing-hotspot ${m.id} ${
          selected ? "selected" : ""
        }`;
        let hotspotBtnClasses = `hotspot-btn label visited ${m.id}`;
        if (selected) {
          hotspotBtnClasses = hotspotGlowClasses;
        }
        return (
          <React.Fragment key={`${m.id}-${selected ? "sel" : "unsel"}`}>
            <div className={`hotspot-btn-wrapper ${m.id}`}>
              <Button
                id={m.id}
                text={m.text}
                disabled={disabled}
                onFocus={onFocus}
                onClick={() => onClick(m)}
                ariaPressed={!!m.answer || selected || null}
                classes={m.answer ? hotspotBtnClasses : hotspotGlowClasses}
              ></Button>
            </div>
            {selectedHotspot && selectedHotspot.id == m.id ? (
              <HotspotPopup />
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default hotspotArea;
