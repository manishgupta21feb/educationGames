import React, { useEffect, useRef } from "react";
import Button from "../../../app/components/Button";
import ButtonContinue from "../../containers/ButtonContinue";
import DescriptionBox from "../../containers/DescriptionBox";
import SliderContainer from "../../containers/SliderContainer";

import "./style.scss";

const FullView = (props) => {
  const sliderRef = useRef(null);
  const {
    mainHeading,
    chartData,
    popupOpenValue,
    isPopupActive,
    currentPopup,
    buttonShow,
    descriptionShow,
    sliderValue,
    sliderDisabled,
    zoomButton,
  } = props;
  const currentPopupRef = useRef(currentPopup);
  const zoomButtonRef = useRef(null);
  useEffect(() => {
    if (
      currentPopup.indexOf(4) == -1 &&
      currentPopupRef.current.indexOf(4) >= 0
    ) {
      const zoomButton = sliderRef.current.querySelector(
        `button#${zoomButtonRef.current}`
      );
      if (zoomButton) {
        zoomButton.focus();
      }
      zoomButtonRef.current = null;
    }
    currentPopupRef.current = currentPopup;
  }, [currentPopup]);
  const popupOpen = (e) => {
    zoomButtonRef.current = e.target.id;
    popupOpenValue(e.target.id);
  };
  useEffect(() => {
    if (!descriptionShow) {
      const slider = sliderRef.current.querySelector('input[type="range"]');
      if (slider) {
        slider.focus();
      }
    }
  }, [descriptionShow]);
  return (
    <div ref={sliderRef} className={`${isPopupActive ? "show" : ""}`}>
      <h2 id="mainheading" className="main-heading">
        {mainHeading}
      </h2>
      <SliderContainer />
      {descriptionShow ? <DescriptionBox /> : null}
      <div
        className="chart-area"
        aria-hidden={descriptionShow || isPopupActive}
      >
        {chartData.map((items) => {
          return (
            <div key={items.id}>
              <div className={`chart-image ${items.id}`}>
                <p
                  className="heading"
                  dangerouslySetInnerHTML={{ __html: items.graphTitle }}
                ></p>
                <p
                  className="yaxis"
                  dangerouslySetInnerHTML={{ __html: items.yaxis }}
                ></p>

                {!sliderDisabled ? (
                  <div aria-hidden="true">
                    <div className={`hidden-part1 slider${sliderValue}`} />
                    <div className={`hidden-part2 slider${sliderValue}`} />
                  </div>
                ) : null}
                <div
                  role="img"
                  className="imageAlt"
                  aria-label={`${items.id}`}
                />
                <button
                  className={`zoom-button`}
                  id={items.id}
                  disabled={isPopupActive || descriptionShow}
                  title={zoomButton}
                  onClick={popupOpen}
                  aria-label={items.label}
                  tabIndex={isPopupActive || descriptionShow ? "-1" : "0"}
                >
                  <span aria-hidden="true"></span>
                </button>
                {items.reading.map((read, index) => {
                  return (
                    <p
                      key={`${items.id}${index}`}
                      aria-hidden="true"
                      className={`read ${items.id}${index}`}
                    >
                      {read}
                    </p>
                  );
                })}

                <p className="xaxis" aria-hidden="true">
                  {items.xaxis}
                </p>
                {items.years.map((year) => {
                  return (
                    <p
                      key={`${items.id}${year}`}
                      className={`year ${items.id}${year}`}
                      aria-hidden="true"
                    >
                      {year}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {buttonShow ? <ButtonContinue /> : null}
    </div>
  );
};
export default FullView;
