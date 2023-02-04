import React, { useRef, useEffect } from "react";
import Button from "../../../../app/components/Button";
import "./styles.scss";

export default (props) => {
  const popupRef = useRef(props.currentPopup);
  const { data, setQuestion, isPopupActive, toggleQuestion, showIntroScreen } =
    props;

  const goToQuestion = (serialNo) => {
    toggleQuestion(!showIntroScreen);
    setQuestion(serialNo);
  };

  const classes = `thumbnails-container ${showIntroScreen ? "selected" : ""}`;

  return (
    <div className={classes} aria-hidden={isPopupActive || null}>
      <h1 className="thumbnails-heading" id="heading-thumbs">
        {data.videosHeading}
      </h1>
      <div className="thumbnails">
        {data.thumbnails.map((thumb) => {
          return (
            <div
              key={thumb.srNo}
              className={`thumbnail`}
              onContextMenu={(e) => e.preventDefault()}
            >
              <Button
                title={thumb.label}
                ariaLable={thumb.label}
                describedby="heading-thumbs"
                isPopupActive={isPopupActive}
                onClick={() => goToQuestion(thumb.srNo)}
                classes={`icon-only ${thumb.questionId}`}
              ></Button>
              <div className="play-icon">
                <span></span>
              </div>
              <p className="label" aria-hidden="true">
                {thumb.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
