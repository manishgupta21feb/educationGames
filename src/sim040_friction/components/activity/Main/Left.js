import React, { useRef, useEffect } from "react";
import ReadingMeters from "./Meters";
import "./style.scss";

const left = (props) => {
  const girlRef = useRef(null);
  const timeoutRef = useRef(null);
  const woodenBoxRef = useRef(null);
  const selectedMaterialRef = useRef(null);
  const currentPopupRef = useRef(currentPopup);

  const {
    imageAlt,
    animationState,
    currentPopup,
    materials,
    readingMeters,
    selectedMaterial,
    setAnimationState,
  } = props;

  useEffect(() => {
    if (animationState && selectedMaterial && selectedMaterial !== "none") {
      if (girlRef.current) {
        girlRef.current.classList.remove("animate");
        girlRef.current.classList.remove("box-pushed");
        setTimeout(() => {
          girlRef.current.classList.add("animate");
        }, 50);

        if (woodenBoxRef.current.classList.contains(`slide`)) {
          woodenBoxRef.current.classList.remove("slide");
          woodenBoxRef.current.classList.remove("box-pushed");
        }
        timeoutRef.current = setTimeout(() => {
          woodenBoxRef.current.classList.add("slide");
        }, 500);
      }
    }
  }, [animationState]);

  useEffect(() => {
    if (selectedMaterialRef.current && selectedMaterialRef.current !== "none") {
      woodenBoxRef.current.classList.remove("slide");
      woodenBoxRef.current.classList.remove("box-pushed");
    }
    if (girlRef.current) {
      girlRef.current.classList.remove("animate");
      girlRef.current.classList.remove("box-pushed");
    }
    selectedMaterialRef.current = selectedMaterial;
  }, [selectedMaterial]);

  useEffect(() => {
    if (
      currentPopup.indexOf(1) >= 0 &&
      currentPopupRef.current.indexOf(1) == -1 &&
      currentPopupRef.current.indexOf(2) >= 0
    ) {
      if (
        selectedMaterialRef.current &&
        selectedMaterialRef.current !== "none"
      ) {
        woodenBoxRef.current.classList.remove("slide");
        woodenBoxRef.current.classList.remove("box-pushed");
      }
      if (girlRef.current) {
        girlRef.current.classList.remove("animate");
        girlRef.current.classList.remove("box-pushed");
      }
    }
    currentPopupRef.current = currentPopup;
  }, [currentPopup]);

  const onAnimationEnd = (e) => {
    if (e.animationName && e.animationName == "slide") {
      setAnimationState(false);
      if (woodenBoxRef.current) {
        woodenBoxRef.current.classList.add("box-pushed");
      }
    } else if (e.animationName && e.animationName == "girlPushSprite") {
      if (girlRef.current) {
        girlRef.current.classList.add("box-pushed");
      }
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="left-view">
      {materials.map((m) => {
        const check = m.id == selectedMaterial;
        const classes = `bg-image ${m.id} ${check ? "show" : ""}`;
        return <div className={classes} key={`bg-image${m.id}`} />;
      })}
      <img className="sr-only sr-image" alt={imageAlt} />
      <ReadingMeters
        currentPopup={currentPopup}
        readingMeters={readingMeters}
        animationState={animationState}
        selectedMaterial={selectedMaterial}
      />
      <div
        ref={girlRef}
        onAnimationEnd={onAnimationEnd}
        className={`girl-sprite`}
      ></div>
      <div
        ref={woodenBoxRef}
        className="wooden-box"
        onAnimationEnd={onAnimationEnd}
      ></div>
    </div>
  );
};

export default left;
