import React, { useRef, useEffect } from "react";
import Button from "../../../../app/components/Button";
import "./styles.scss";

export default (props) => {
  const popupRef = useRef(props.currentPopup);
  const {
    data,
    thumbHeading,
    isPopupActive,
    visitedHotspot,

    onClickButton,
  } = props;
  const selectedButton = (e) => {
    onClickButton(e.target.id);
  };

  return (
    <div className="thumbnails-container" aria-hidden={isPopupActive || null}>
      <h2 className="thumbnails-heading" id="heading-thumbs">
        {thumbHeading}
      </h2>
      <div className="thumbnails">
        {data.thumbnails.map((thumb) => {
          
          return (
            <div key={thumb.srNo} className={`thumbnail`}>
              <div
                role="img"
                aria-label={thumb.imglabel}
                className={`icon-only ${thumb.questionId}`}
              ></div>
              <Button
                id={thumb.id}
                key={thumb.serNo}
                aria-Hidden={thumb.text}
                text={thumb.text}
                label={thumb.label}
                disabled={isPopupActive || visitedHotspot.includes(thumb.id)}
                classes={`hotspot-btn label`}
                onClick={selectedButton}
                ariaHidden={isPopupActive || null}
              ></Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
