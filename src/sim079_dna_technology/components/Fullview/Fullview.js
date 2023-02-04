import React from "react";
import Button from "../../../app/components/Button";
import "./style.scss";
import { getSimLanguage } from "../../../app/helpers";
const lang = getSimLanguage();
const Fullview = (props) => {
  const {
    onClick,
    heading,
    questions,
    isPopupActive,
    selectedHotspot,
    mainimgText,
    firstScreen,
  } = props;

  return (
    <div className="full-view">
      <div className="full-view-wrapper">
        <div>
          <div
            role="img"
            className="outdoor-screen"
            aria-label={mainimgText}
            style={{
              visibility: selectedHotspot ? "hidden" : "visible",
            }}
            aria-hidden={!!selectedHotspot || isPopupActive || null}
          />
          <h2
            className="main-heading"
            aria-hidden={!!selectedHotspot || isPopupActive || null}
          >
            {heading}
          </h2>
          {questions.map((val) => {
            return (
              <div
                key={val.serNo}
                aria-hidden={!!selectedHotspot || isPopupActive || null}
              >
                {/* <span
                  aria-hidden="true"
                  className={`car-distance-value ${lang}`}
                >
                 
                </span> */}
                <Button
                  id={val.id}
                  key={val.serNo}
                  text={val.text}
                  label={val.altText}
                  disabled={isPopupActive || selectedHotspot}
                  classes={`hotspot-btn label ${lang}`}
                  onClick={() => onClick(val.id)}
                  ariaHidden={isPopupActive || null}
                  isPopupActive={firstScreen || isPopupActive}
                ></Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Fullview;
