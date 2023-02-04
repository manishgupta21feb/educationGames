import React, { useEffect, useState } from "react";
import "./style.scss";

import UnsaturatedFattyAcid from "../../InnerComponents/UnsaturatedFattyAcid";
import SaturatedFattyAcid from "../../InnerComponents/SaturatedFattyAcid";

const Screen1 = (props) => {
  const { screenNo, screenData, currentScreen } = props;

  const getFattyAcidAtoms = (type) => {
    if (type == 1) {
      return <SaturatedFattyAcid />;
    } else if (type == 2) {
      return <UnsaturatedFattyAcid />;
    } else {
      return (
        <>
          <SaturatedFattyAcid />
          <UnsaturatedFattyAcid />
        </>
      );
    }
  };

  return (
    <div className={`screen${screenNo}-top`}>
      <div className={`img-area${currentScreen - 1}`}>
        {screenData.compoundData[currentScreen - 1].type ? (
          <>
            {getFattyAcidAtoms(
              screenData.compoundData[currentScreen - 1].type[0].id
            )}
            {screenData.compoundData[currentScreen - 1].type[0].name
              .split(":")
              .map((val, i) => {
                return (
                  <span key={`img-name` + i} className={`imgTxt${i}`}>
                    {val}
                  </span>
                );
              })}
          </>
        ) : (
          screenData.compoundData[currentScreen - 1].img?.map((val, index) => {
            return (
              <div key={`img-area-${index}`}>
                <img src={val.img} className={val.classes} alt={val.alt} />
                <span className="imgTxt">{val.label}</span>
              </div>
            );
          })
        )}
        {screenData.compoundData[currentScreen - 1].labels?.map(
          (val, index) => {
            return (
              <p
                aria-hidden={true}
                key={`labels-${index}`}
                className={val.classes}
              >
                {val.name}
              </p>
            );
          }
        )}
        <div className="img-label">
          {screenData.compoundData[currentScreen - 1].atomsNames?.map(
            (val, i) => {
              return (
                <div
                  aria-hidden={true}
                  key={`atoms-names${i}`}
                  className={val.classes}
                  dangerouslySetInnerHTML={{ __html: val.value }}
                ></div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Screen1;
