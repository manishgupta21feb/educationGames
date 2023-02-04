import React from "react";
import NextButtonContainer from "../../../containers/NextButtonContainer";
import Button from "../../../../app/components/Button";
import "./style.scss";

export default (props) => {
  const {
    heading,
    btnText,
    btnDisabled,
    isPopupActive,
    hotspots,
    isVideoVisible,
    selectedHotspot,
    continuePressed,
    screenNumber,
  } = props;
  return (
    <>
      <div
        className={`full-view ${
          !isVideoVisible ? "selectedView" : "hiddenView"
        } `}
      >
        <h2
          className="full-view--heading"
          dangerouslySetInnerHTML={{ __html: heading }}
        />
      </div>
      <div
        className={`videoOutputContainer ${
          isVideoVisible ? "selectedView" : "hiddenView"
        }`}
      >
        <div className={`fullViewVideoContainers`}>
          {hotspots.map((m) => {
            const showContainer = m.id == selectedHotspot;
            return (
              <div
                key={`output-${m.id}`}
                className={`videoSection ${m.id} ${
                  showContainer ? "show" : "hide"
                }`}
              >
                <p
                  className="video-description"
                  dangerouslySetInnerHTML={{
                    __html: m.details.hotspotText,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      {!screenNumber ? null : (
        <Button
          text={btnText}
          disabled={btnDisabled}
          classes="toast-secondary-button positive right-arrow continue-btn"
          isPopupActive={isPopupActive}
          onClick={continuePressed}
        />
      )}
      <div className="nextbutton">
        <NextButtonContainer />
      </div>
      {/* </div> */}
    </>
  );
};
