import React, { useEffect, useRef } from "react";
import Button from "../../../app/components/Button";

const LaunchPage = ({
  isPopupActive,
  launchData,
  updateLocation,
  resetEnabled,
  setFocusReset,
}) => {
  const gravityRef = useRef(null);
  const frictionRef = useRef(null);
  useEffect(() => {
    if (resetEnabled) {
      setFocusReset();
    }
  }, [resetEnabled]);
  return (
    <>
      <div className="launchContainer">
        <h2>{launchData.ostHeading}</h2>
        <div className="blocksContainer">
          <div className="forceBlock">
            <div
              className="imgHolder"
              style={{ backgroundImage: `url(${launchData.gravity.imgSrc})` }}
              aria-label={launchData.gravity.imgAlt}
              role="img"
            />
            <Button
              text={launchData.gravity.content}
              ref={gravityRef}
              onClick={() => {
                updateLocation("gravity");
              }}
              hideTooltip={false}
              disabled={false}
              ariaHidden={isPopupActive}
              isPopUpOpen={isPopupActive}
              classes="hotspot-btn label"
            />
          </div>
          <div className="forceBlock">
            <div
              className="imgHolder"
              style={{ backgroundImage: `url(${launchData.friction.imgSrc})` }}
              aria-label={launchData.friction.imgAlt}
              role="img"
            />
            <Button
              text={launchData.friction.content}
              ref={frictionRef}
              onClick={() => {
                updateLocation("friction");
              }}
              hideTooltip={false}
              disabled={false}
              ariaHidden={isPopupActive}
              isPopUpOpen={isPopupActive}
              classes="hotspot-btn label"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LaunchPage;
