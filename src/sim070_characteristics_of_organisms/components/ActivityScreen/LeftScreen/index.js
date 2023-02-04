import React, { useEffect, useRef } from "react";
import Button from "../../../../app/components/Button";

import "./style.scss";
import { getSimLanguage } from "../../../../app/helpers";
const lang = getSimLanguage();
const LeftScreen = (props) => {
  const viewMicroscope = useRef(null);
  const {
    buttonLabel,
    onClickValue,
    specimenClicked,
    specimenValue,
    microscopicView,
    microscopicClick,
    buttonVisited,
    isClicked,
    secondScreen,
    isPopupActive,
    imageAltText,
  } = props;

  const clickedVal = (e) => {
    onClickValue(e.target.id);
  };
  const microscopicButtonView = () => {
    microscopicClick(true);
  };
  useEffect(() => {
    if (specimenClicked) {
      setTimeout(() => {
        if (viewMicroscope.current) {
          viewMicroscope.current.focus();
        }
      });
    }
  }, [specimenClicked]);

  return (
    <div className="left-screen">
      <img className="sr-only sr-image" alt={imageAltText} />
      {buttonLabel.map((items, index) => {
        const show = items.id == specimenValue && specimenClicked;
        return (
          <div key={index}>
            <div
              className={`microscope-image ${!specimenClicked ? "showed" : ""}`}
            />
            <div
              className={`microscopic-image ${items.id} ${show ? "show" : ""}`}
            />
            <div
              className={`circle-image triangle-image ${items.id} ${
                show && isClicked ? "show-circle" : ""
              }`}
            >
              <div className="triangle-image" />
            </div>
          </div>
        );
      })}
      <div
        className={`buttonset ${
          specimenClicked && !isClicked ? "show-image" : ""
        }`}
      >
        <div className="bullets" />
        <div className="dotted-lines" />

        <Button
          ref={viewMicroscope}
          text={microscopicView}
          classes={`hotspot-btn label `}
          onClick={microscopicButtonView}
          disabled={!(specimenClicked && !isClicked)}
          ariaHidden={
            isPopupActive ||
            (specimenClicked ? (isClicked ? "true" : "false") : "true")
          }
          isPopupActive={secondScreen || isPopupActive}
        />
      </div>
      {buttonLabel.map((items, index) => {
        return (
          <div key={index}>
            <Button
              label={items.value}
              classes={`highlighter specimen-${index} icon-only ${items.id}`}
              disabled={specimenClicked || buttonVisited.includes(items.id)}
              id={items.id}
              onClick={clickedVal}
              isPopupActive={secondScreen || isPopupActive}
            />
            <p aria-hidden="true" className={`buttonlabel ${items.id} ${lang}`}>
              {items.value}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default LeftScreen;
