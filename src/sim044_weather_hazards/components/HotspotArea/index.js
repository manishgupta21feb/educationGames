import React, { useEffect, useRef } from "react";
import Button from "../../../app/components/Button";
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
        ((element) => {
          setTimeout(() => {
            if (element) {
              const button = ref.current.querySelector(`button#${element}`);
              if (button) {
                button.focus();
              }
            }
          });
        })(selectedHotspotRef.current);
      }
    }
    selectedHotspotRef.current = selectedHotspot;
  }, [selectedHotspot]);

  return (
    <div className="hotspot-area" ref={ref}>
      <div
        role="img"
        className="sr-only sr-image"
        aria-label={fossilsBGAltText}
      ></div>
      {hotspots.map((m) => {
        const selected = selectedHotspot == m.id;
        const classes = `icon icon-only glowing-hotspot ${m.id} ${
          selected ? "selected" : ""
        }`;
        return (
          <div className={`hotspot-btn-wrapper ${m.id}`} key={m.id}>
            <Button
              id={m.id}
              text={m.title}
              classes={classes}
              ariaPressed={selected}
              disabled={isPopupActive}
              onClick={() => onClick(m.id)}
            ></Button>
          </div>
        );
      })}
    </div>
  );
};

export default hotspotArea;
