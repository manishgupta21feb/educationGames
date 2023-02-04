import React, { useRef, useEffect } from "react";
import Button from "../../../app/components/Button";

function hotspotPopup(props) {
  const ref = useRef(null);
  const buttonRef = useRef(null);

  const { hotspotDetails, closePopUp, selectedHotspot, isPopupActive } = props;

  useEffect(() => {
    if (ref.current) {
      setTimeout(() => {
        const scrollableArea = document.querySelector(".scroll-bar");
        if (scrollableArea.clientHeight < scrollableArea.scrollHeight) {
          scrollableArea.tabIndex = "0";
        }
      }, 20);
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      setTimeout(() => {
        const scrollableArea = document.querySelector(".scroll-bar");
        if (scrollableArea.clientHeight < scrollableArea.scrollHeight) {
          if (isPopupActive) {
            scrollableArea.tabIndex = "-1";
          } else {
            scrollableArea.tabIndex = "0";
          }
        }
      }, 20);
    }
  }, [isPopupActive]);

  useEffect(() => {
    if (selectedHotspot) {
      setTimeout(() => {
        if (buttonRef && buttonRef.current) {
          buttonRef.current.focus();
        }
      }, 0);
    }
  }, [selectedHotspot]);

  return (
    <>
      <div
        ref={ref}
        role="alertdialog"
        aria-labelledby="hotspot-image"
        aria-label={hotspotDetails.title}
        className={`item-info item-info-${selectedHotspot}`}
      >
        <div className={`item-image-section ${selectedHotspot}-image`}>
          <img
            id="hotspot-image"
            src={hotspotDetails.img}
            alt={hotspotDetails.imageAlt}
            className={`item-image ${selectedHotspot}-image`}
          />
          <h3>{hotspotDetails.title}</h3>
        </div>
        <div className="scroll-bar" tabIndex={isPopupActive ? "-1" : null}>
          <p
            className="content-para"
            dangerouslySetInnerHTML={{ __html: hotspotDetails.heading }}
          ></p>
        </div>
        <Button
          text={"Close"}
          ref={buttonRef}
          onClick={closePopUp}
          ariaExpanded={null}
          classes={"hotspot-btn close"}
          disabled={isPopupActive}
        />
      </div>
      <div
        className={`connecting-lines-outside connecting-lines-outside-${selectedHotspot}`}
      >
        <div className="connecting-lines-inside"></div>
      </div>
      <span className={`dot dot-${selectedHotspot}`}></span>
    </>
  );
}

export default hotspotPopup;
