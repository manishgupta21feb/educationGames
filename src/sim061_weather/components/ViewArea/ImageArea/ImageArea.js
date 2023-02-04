import React from "react";
import "./style.scss";
import { getSimLanguage } from "../../../../app/helpers";
const lang = getSimLanguage();
const ImageArea = (props) => {
  const {
    bgs,
    answer,
    textImage,
    readingData,
    buttonClicked,
    buttonPressed,
    measurementTools,
  } = props;

  return (
    <div
      aria-hidden={!buttonPressed}
      className={`left-image-section ${buttonPressed ? "show" : ""}`}
    >
      {bgs.map((bg) => {
        const { type, answer: ans } = bg;
        const show = type == buttonClicked[0] && ans == answer ? "show" : "";
        return (
          <div
            key={bg.id}
            className={`imgtoggle img${type}radio${ans} ${show}`}
          ></div>
        );
      })}
      <img
        className="sr-only sr-image"
        alt={readingData && readingData.imageAltText}
      />
      <div className="imgtoggleS">
        <div aria-hidden="true">
          <div>
            {readingData &&
              readingData.temperature.map((temperature, i) => {
                return (
                  <p
                    key={i}
                    className={`temperature temperature${buttonClicked[0]}${answer}${i}`}
                  >
                    {temperature}
                  </p>
                );
              })}
          </div>
          <div>
            {readingData &&
              readingData.precipitation.map((prec, il) => {
                return (
                  <p
                    key={il}
                    className={`prec prec${buttonClicked[0]}${answer}${il}`}
                  >
                    {prec}
                  </p>
                );
              })}
          </div>
          <p className="direction">{readingData && readingData.direction}</p>
          <p className="wind">
            <span>
              {readingData && readingData.windDirection.split(" ")[0]}
            </span>
            <span>
              {readingData && readingData.windDirection.split(" ")[1]}
            </span>
          </p>
        </div>

        <div className="commontext" aria-hidden={!buttonClicked}>
          {measurementTools &&
            measurementTools.map((item, index) => {
              return (
                <p
                  key={`${buttonClicked}${index}`}
                  className={`tools tools${index} ${lang}`}
                >
                  {item}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default ImageArea;
