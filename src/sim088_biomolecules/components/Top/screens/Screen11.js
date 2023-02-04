import React, { useEffect, useState } from "react";
import "./style.scss";

const Screen11 = (props) => {
  const { screenNo, screenData, currentScreen } = props;

  return (
    <div className={`screen${screenNo}-top`}>
      {screenData.compoundData[currentScreen - 1].img?.map((val, index) => {
        return (
          <img
            src={val.src}
            key={index}
            alt={val.alt}
            className={val.classes}
          />
        );
      })}

      {screenData.compoundData[currentScreen - 1].imgLabel?.map(
        (val, index) => {
          return (
            <span
              key={index}
              className={val.classes}
              dangerouslySetInnerHTML={{ __html: val.value }}
            ></span>
          );
        }
      )}

      <div className="all-labels">
        {screenData.compoundData[currentScreen - 1].label?.map((val, index) => {
          return (
            <span key={index} className={val.classes}>
              {val.value}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Screen11;
