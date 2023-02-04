import React, { useEffect, useRef } from "react";
import Button from "../../../../app/components/Button";
const DescriptionBox = (props) => {
  const { descriptionBoxContent, closePopUp, buttonValue, isPopupActive } =
    props;
  const buttonRef = useRef(null);
  const descriptionRef = useRef(null);
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);
  useEffect(() => {
    if (descriptionRef.current) {
      setTimeout(() => {
        const scrollableArea = document.querySelector(".scroll-bar");
        if (scrollableArea.clientHeight < scrollableArea.scrollHeight) {
          scrollableArea.tabIndex = "0";
        }
      }, 20);
    }
  }, []);

  useEffect(() => {
    if (descriptionRef.current) {
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

  return (
    <div className="instruction-text-wrapper">
      <div
        role="alertdialog"
        aria-labelledby="hotspot-text"
        aria-hidden={isPopupActive}
        ref={descriptionRef}
      >
        <div className="scroll-bar" tabIndex={isPopupActive ? "-1" : null}>
          <p
            aria-hidden={isPopupActive}
            id="hotspot-text"
            className="info-text"
            dangerouslySetInnerHTML={{ __html: descriptionBoxContent }}
          ></p>
        </div>
        <div className="close-button">
          <Button
            text={buttonValue}
            ref={buttonRef}
            onClick={closePopUp}
            ariaExpanded={null}
            classes={`hotspot-btn close `}
            disabled={isPopupActive}
          />
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;