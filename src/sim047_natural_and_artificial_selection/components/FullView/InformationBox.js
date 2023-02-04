import React, { useEffect, useRef } from "react";
import Slider from "../../containers/SliderContainer";
import DescriptionBox from "../../containers/DescriptionBoxContainer";
import "./style.scss";

const Info = ({ selectedTimeline, data, selectedTab, focusOn, isToggle }) => {
  const sliderRef = useRef([]);

  useEffect(() => {
    if (sliderRef && sliderRef.current) {
      sliderRef.current.querySelector("input").focus();
    }
  }, [focusOn]);

  return (
    <div>
      {selectedTab == 0 && selectedTimeline >= 0 && (
        <div>
          <h2 id="image-description" className="headings">
            {data.defaultData[selectedTab].Ost_0}
          </h2>
          {selectedTimeline >= 0 && (
            <div className="background-container">
              {data.slider0.listitems.map((n) => {
                const showImg = n.value == selectedTimeline ? "show" : "";
                return (
                  <div
                    key={n.id}
                    role="img"
                    aria-label={n.altImg}
                    aria-hidden={showImg ? false : true}
                    className={`slider-img slider${n.id} ${showImg}`}
                  ></div>
                );
              })}
            </div>
          )}
        </div>
      )}
      {selectedTab == 1 && selectedTimeline >= 0 && (
        <div>
          <h2 id="image-description" className="headings">
            {data.defaultData[selectedTab].Ost_0}
          </h2>
          {selectedTimeline >= 0 && (
            <div className="background-container">
              {data.slider1.listitems.map((n) => {
                const showImg = n.value == selectedTimeline ? "show" : "";
                return (
                  <div
                    key={n.id}
                    role="img"
                    aria-label={n.altImg}
                    aria-hidden={showImg ? false : true}
                    className={`slider-img slider${n.id} ${showImg}`}
                  ></div>
                );
              })}
            </div>
          )}
          <div className="scaleUnit" aria-hidden={true}>
            {data.cropImgScale.map((item, index) => (
              <span key={index} className="nos">
                {item}
              </span>
            ))}
          </div>
          <div className="unitName" aria-hidden={true}>
            {data.scaleUnit}
          </div>
        </div>
      )}

      <div ref={sliderRef}>
        <Slider />
      </div>
      <DescriptionBox />
    </div>
  );
};

export default Info;
