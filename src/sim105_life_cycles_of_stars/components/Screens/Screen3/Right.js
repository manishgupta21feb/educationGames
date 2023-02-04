import React, { useEffect, useRef } from "react";
import Button from "../../../../app/components/Button";
import NextScreenButton from "../../../containers/NextScreenButton";

const Right = (props) => {
  const {
    hotspots,
    selectHotspot,
    ostInstruction,
    selectedHotspot,
    showContinueButton,
  } = props;
  let hotspot = hotspots.filter((h) => h.id == selectedHotspot);
  if (hotspot && Array.isArray(hotspot)) {
    hotspot = { ...hotspot[0] };
  }
  const ref = useRef(null);
  const selectedHotspotRef = useRef(selectedHotspot);

  useEffect(() => {
    if (!selectedHotspotRef.current !== selectedHotspot && selectedHotspot) {
      const button = ref.current.querySelector(".hotspot-btn.close");
      if (button) {
        button.focus();
      }
    }
    selectedHotspotRef.current = selectedHotspot;
  }, [selectedHotspot]);

  return (
    <div ref={ref} className="right-wrapper">
      <p role="heading" aria-level="2"  className="ost-heading">{ostInstruction}</p>
      {hotspot && hotspot.id ? (
        <div
          role="alertdialog"
          className="popup-content"
          aria-labelledby="hotspot-para"
        >
          <div>
            <p
              id="hotspot-para"
              dangerouslySetInnerHTML={{ __html: hotspot.popupText }}
            ></p>
            <Button
              text="Close"
              classes="hotspot-btn close"
              onClick={() => selectHotspot("")}
            />
          </div>
        </div>
      ) : null}
      {showContinueButton ? <NextScreenButton /> : null}
    </div>
  );
};

export default Right;
