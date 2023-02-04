import React from "react";
import "./style.scss";
import ContinueButton from "../../../../containers/ContinueContainer";
import Button from "../../../../../app/components/Button";
const Bottom = (props) => {
  const {
    activeHotspot,
    isScreenToggle,
    showFullCircuit,
    isPopupActive,
    btndisabled,
    btnText,
    activateTransition,
  } = props;
  return (
    <div className="bottom-container">
      {!isScreenToggle && (
        <p
          className="active-Hotspot-Heading"
          dangerouslySetInnerHTML={{
            __html: activeHotspot && activeHotspot.hotspotText,
          }}
        />
      )}
      {isScreenToggle && (
        <>
          {showFullCircuit ? (
            <Button
              classes="btn next-btn toast-secondary-button positive right-arrow"
              isPopupActive={isPopupActive}
              disabled={btndisabled}
              text={btnText}
              onClick={activateTransition}
            />
          ) : (
            <>
              {" "}
              <p
                className="active-Hotspot-Heading"
                dangerouslySetInnerHTML={{
                  __html: activeHotspot && activeHotspot.assets.associatedText,
                }}
              ></p>
              <ContinueButton />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Bottom;
