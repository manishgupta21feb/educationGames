import React, { useState, useEffect, useRef } from "react";
import Button from "../../../app/components/Button";
import NextButton from "../../containers/NextButton";
import "./style.scss";

const rightSection = (props) => {
  const buttonRef = useRef(null);
  const [hotspot, setHotspot] = useState({});

  const {
    onClick,
    hotspots,
    isPopUpOpen,
    selectedHotspot,
    activityInstructions,
    visitedNodes,
    Close
  } = props;

  useEffect(() => {
    if (selectedHotspot) {
      const _hotspot = hotspots.filter((h) => h.id == selectedHotspot)[0];
      setHotspot({ ..._hotspot });
      setTimeout(() => {
        if (buttonRef && buttonRef.current) {
          buttonRef.current.focus();
        }
      }, 50);
    } else {
      setHotspot({});
    }
  }, [selectedHotspot]);

  return (
    <div className="right-section">
      <div>
        <h1>{activityInstructions}</h1>
      </div>
      {hotspot.id ? (
        <div
          role="alertdialog"
          aria-labelledby="hotspot-image hotspot-para"
          className={`fossil-info ${selectedHotspot}`}
        >
          <div>
            <div>
              <div>
                <div className={`fossil-image ${selectedHotspot}-image`}>
                  <img
                    id="hotspot-image"
                    alt={hotspot.imageAlt}
                    className="sr-only sr-image"
                  />
                </div>
                <p
                  id="hotspot-para"
                  className="content-para"
                  dangerouslySetInnerHTML={{ __html: hotspot.heading }}
                ></p>
              </div>

              <Button
                text={Close}
                ref={buttonRef}
                onClick={onClick}
                ariaExpanded={null}
                classes={"hotspot-btn close"}
                isPopUpOpen={isPopUpOpen || !selectedHotspot}
              />
            </div>
          </div>
        </div>
      ) : null}
      {visitedNodes && visitedNodes.length == 4 ? <NextButton /> : null}
    </div>
  );
};

export default rightSection;
