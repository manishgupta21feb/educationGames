import React, { useEffect, useRef, useState } from "react";
import Button from "../../../app/components/Button";
import "./style.scss";
import { getNumbers } from "../../helper.js";

const CenterArea = (props) => {
  let {
    btnHeading,
    topHeading,
    isPopupActive,
    centerPageData,
    setCurrentScreenAndEnvironment,
    setIsVisitedType,
  } = props;

  const handleSelectButton = (item, text, buttonTitle) => {
    setCurrentScreenAndEnvironment(getNumbers(item), text, buttonTitle);
  };

  const getClasses = (txt, func, buttonTitle) => {
    let buttonTitleTypes =
      btnHeading[0].buttonTitle == buttonTitle
        ? 1
        : btnHeading[1].buttonTitle == buttonTitle
        ? 2
        : 0;

    let findElement = func.filter(
      (x) => x.environment == txt && x.screen == buttonTitleTypes
    );
    return findElement.length > 0 ? true : false;
  };
  return (
    <div className="center-area">
      <div>
        <h2 className="main-center-heading">{topHeading}</h2>
      </div>

      <div className="main-box-area">
        {centerPageData.map((value, index) => {
          return (
            <div className={"box"} key={index}>
              <h3 className="main-box-text" id={value.id}>
                {value.text}
              </h3>
              <div className="box-area">
                <img
                  src={value.src}
                  className={`box-area-img`}
                  alt={value.ariaLabel}
                />

                <div className="box-btn-wrapper">
                  {btnHeading.map((btn, index) => {
                    let dynamicClasses = getClasses(
                      value.text,
                      setIsVisitedType,
                      btn.buttonTitle
                    );
                    return (
                      <Button
                        key={index}
                        ariaLable={`${value.text} ${btn.buttonTitle}`}
                        text={btn.buttonTitle}
                        title={btn.buttonTitle}
                        id={btn.id + value.text}
                        disabled={isPopupActive || dynamicClasses}
                        classes={`hotspot-btn label  ${btn.classes} ${
                          dynamicClasses ? "active" : ""
                        }`}
                        onClick={(e) =>
                          handleSelectButton(
                            btn.id,
                            value.text,
                            btn.buttonTitle
                          )
                        }
                      ></Button>
                    );
                  })}
                </div>
              </div>
            </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default CenterArea;
