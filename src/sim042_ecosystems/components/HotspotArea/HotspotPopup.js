import React, { useEffect, useRef } from "react";
import Button from "../../../app/components/Button";

const HotspotPopup = (props) => {
  const ref = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (ref.current) {
        const button = ref.current.querySelector("button");
        if (button) {
          button.focus();
        }
        document.addEventListener("click", onDocumentClick, true);
      }
    }, 50);

    return () => {
      clearTimeout(timeoutRef.current);
      document.removeEventListener("click", onDocumentClick, true);
    };
  }, []);

  const onDocumentClick = (e) => {
    // e.stopPropagation();
    if (selectedHotspot && !e.target.closest(".hotspot-popup")) {
      props.selectHotspot("");
    }
  };

  const { hotspot, onClick, hotspotOptions, selectedHotspot } = props;
  return (
    <div
      ref={ref}
      role="alertdialog"
      aria-labelledby="hotspot-popup-heading"
      className={`hotspot-popup ${selectedHotspot.id}`}
    >
      <p id="hotspot-popup-heading">{hotspot.text}</p>
      <div className="hotspot-popup-options">
        {hotspotOptions.map((o) => {
          const selected = hotspot.answer && o.id == hotspot.answer;
          return (
            <Button
              id={o.id}
              key={o.id}
              text={o.text}
              ariaPressed={selected || null}
              onClick={() => onClick(o)}
              onBlur={(e) => e.stopPropagation()}
              classes={`btn-chip ${selected ? "selected" : ""}`}
            ></Button>
          );
        })}
      </div>
    </div>
  );
};

export default HotspotPopup;
