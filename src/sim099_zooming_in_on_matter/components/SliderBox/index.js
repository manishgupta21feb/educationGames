import React from "react";
import Slider from "../../containers/Slider";
import "./slider.scss";
import ButtonNext from "../../containers/ButtonNext";
import NextButton from "./NextButton";

const schoolView = (props) => {
  const {
    sliderTitle,
    nextBtnText,
    resetActivity,
    updateSliderValue,
    buttonClicked,
    buttonShow,
    frames,
    title,
    legendData,
    sliderVisitedValue,
    value,
    legendsData,
  } = props;

  const head = frames.find((x) => x.id == buttonClicked);
  const heading = head && head.heading[updateSliderValue];

  const headText = frames.find((x) => x.id == buttonClicked);
  const headingText = headText && headText.headingText[updateSliderValue];

  const text = frames.find((x) => x.id == buttonClicked);
  const texting = text && text.texting[updateSliderValue];

  const alt = frames.find((x) => x.id == buttonClicked);
  const altText = alt && alt.altText[updateSliderValue];
  console.log("legendsData", legendsData);
  return (
    <div className="school">
      <p
        key={"school" + updateSliderValue}
        id="schoolViewHeading"
        className="paragraph"
        dangerouslySetInnerHTML={{ __html: heading }}
      ></p>
      <div className={`cloud ${buttonClicked}`}>
        <div className={`bgImg slider${updateSliderValue}`}>
          <img className="sr-only imageTop" alt={altText} />
        </div>
        <p className="text" aria-hidden="true">
          {texting}
        </p>
        {legendsData.legend.map((value) => {
          return (
            <div
              key={value.id}
              className={`${buttonClicked} slider${updateSliderValue} ${value.text}`}
            >
              <p aria-hidden="true">{value.text}</p>
              <p className="sr-only sr-image">{value.altText}</p>
            </div>
          );
        })}
      </div>
      <div className="sliderArea">
        <div className="rectangle"></div>
        <Slider altValueText={`${value} ${updateSliderValue} ${headingText}`} />
        <div className="rectanglePlus"></div>
        <div className="rectanglePlusTwo"></div>
      </div>

      <div className="nextButton" key={"nailNext"}>
        <ButtonNext />
      </div>
    </div>
  );
};

export default schoolView;
