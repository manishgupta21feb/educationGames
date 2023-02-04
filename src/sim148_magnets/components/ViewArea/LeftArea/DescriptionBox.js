import React, { useEffect, useRef } from "react";
import Button from "../../../../app/components/Button";
const DescriptionBox = (props) => {
  const { descriptionBoxContent, closePopUp, buttonValue, isPopupActive } =
    props;
  const buttonRef = useRef(null);
  useEffect(() => {
    for (let items of buttonValue) {
      const element = buttonRef.current.querySelector(`#${items.id}`);
      if (element) {
        element.focus();
      }
      break;
    }
  }, []);
  return (
    <div className="instruction-text-wrapper">
      <div
        role="alertdialog"
        aria-labelledby="hotspot-text"
        aria-hidden={isPopupActive}
      >
        <p
          aria-hidden={isPopupActive}
          id="hotspot-text"
          className="info-text"
          dangerouslySetInnerHTML={{ __html: descriptionBoxContent }}
        ></p>
        <div className="close-button" ref={buttonRef}>
          {buttonValue.map((items) => {
            return (
              <Button
                key={items.id}
                text={items.text}
                id={items.id}
                onClick={closePopUp}
                ariaExpanded={null}
                classes={`hotspot-btn close `}
                disabled={isPopupActive}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
