import React, { useEffect, useState } from "react";
import "./style.scss";
import FinishButtonContainer from "../../../containers/FinishButtonContainer";

const Screen3 = (props) => {
  const {
    visitedHotspot,
    screenNo,
    screenData,
    currentScreen,
    nextScreen,
    isPopupActive,
    threenAtomTxt,
  } = props;

  const getThreeAtomShape = (classes) => {
    return (
      <div className={classes}>
        <span class="emptySpace3"> {threenAtomTxt[0]} </span>
        <span class="emptySpace4"> {threenAtomTxt[1]} </span>
        <span class="emptySpace5"> {threenAtomTxt[2]} </span>
      </div>
    );
  };

  return (
    <div className={`screen${screenNo}-center`}>
      <div className={`img-area${currentScreen - 1}`}>
        <p className="sr-only">
          {screenData.compoundData[currentScreen - 1].alt}
        </p>
        {screenData.compoundData[currentScreen - 1].img?.map((val, index) => {
          return (
            <div key={`img` + index}>
              <img src={val.img} className={val.classes} alt={val.alt} />
              <p
                aria-hidden={true}
                key={index}
                className={
                  screenData.compoundData[currentScreen - 1].labels[index]
                    ?.classes
                }
              >
                {screenData.compoundData[currentScreen - 1].labels[index]?.name}
              </p>
            </div>
          );
        })}
      </div>
      <div className="img-label" aria-hidden={true}>
        {screenData.compoundData[currentScreen - 1].atomsNames?.map(
          (val, index) => {
            if (val.id == "img_three_atom") {
              return getThreeAtomShape(val.classes);
            } else {
              return (
                <span key={index} className={val.classes}>
                  {val.value}
                </span>
              );
            }
          }
        )}
      </div>
      <p className="bottom-text">
        {screenData.compoundData[currentScreen - 1].heading}
      </p>
      <FinishButtonContainer />
    </div>
  );
};

export default Screen3;
