import React, { useEffect, useRef, useState } from "react";
import Slider from "../../containers/Slider";
import "./style.scss";

const FullView = (props) => {
  const ref = useRef(null);
  const timeoutRef = useRef(null);
  const [ballSprite, setBallSprite] = useState("");
  const [animationType, setAnimationType] = useState("");
  const {
    force,
    altTexts,
    instruction,
    forceApplied,
    currentPopup,
    animationEnd,
    directionText,
  } = props;

  useEffect(() => {
    if (forceApplied == "") {
      setBallSprite("");
      setAnimationType("");
    } else {
      setAnimationType(`animate-${forceApplied}`);
    }
  }, [forceApplied]);

  useEffect(() => {
    if (currentPopup.indexOf(4) >= 0) {
      clearTimeout(timeoutRef.current);
    }
  }, [currentPopup]);

  const onAnimationEnd = (e) => {
    const name = e.animationName;
    if (name == "move-container-pull" || name == "move-container-push") {
      setBallSprite("hide");
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        animationEnd();
      }, 300);
    }
  };

  return (
    <div className="ball-wrapper">
      <div className="top">
        <div className="instructions">
          <h1>{instruction}</h1>
          <p>{directionText}</p>
        </div>
      </div>
      <div className="bottom">
        <div
          role="img"
          aria-label={altTexts.grass}
          style={{ width: "100%", height: "100%" }}
        ></div>
        <div className={`slider ${force == 2 ? "" : "disabled"}`}>
          <div aria-hidden className="bg-color"></div>
          <Slider />
        </div>
        <div
          role="img"
          className="hole hole-top"
          aria-label={altTexts.holeAbove}
        ></div>
        <div className="beachball-container">
          <div
            ref={ref}
            onAnimationEnd={onAnimationEnd}
            className={`sprite-container animate-${forceApplied}`}
          >
            <div
              role="img"
              aria-label={altTexts.golfBall}
              className={`ball-sprite ${ballSprite}`}
            ></div>
          </div>
          <div className={`ball-final ${forceApplied} ${ballSprite}`}></div>
        </div>
        <div
          role="img"
          className="hole hole-bottom"
          aria-label={altTexts.holeBelow}
        ></div>
      </div>
    </div>
  );
};

export default FullView;
