import React, { useEffect, useState } from "react";
import "./style.scss";
import Button from "../../../../app/components/Button";
import SaturatedFattyAcid from "../../InnerComponents/SaturatedFattyAcid";

const Screen4 = (props) => {
  const { visitedHotspot, screenNo, screenData, nextScreen, isPopupActive } =
    props;

  const handleSelectButton = (id) => {
    nextScreen(id);
  };

  return (
    <div className={`screen${screenNo}-center`}>
      <p className="middle-text">{screenData.compoundsMaster[0].heading}</p>

      <div className="main-box">
        {screenData.compoundsMaster[0].img?.map((val, index) => {
          let changeClass = visitedHotspot?.find((x) => x.id == val.id)
            ? true
            : false;
          return (
            <div className={`box${index}`} id={index} key={index}>
              <div className={`rect${index}`}>
                {screenNo == 8 ? (
                  index == 1 ? (
                    <SaturatedFattyAcid />
                  ) : (
                    <img src={val.src} className={val.classes} alt={val.alt} />
                  )
                ) : (
                  <img src={val.src} className={val.classes} alt={val.alt} />
                )}
              </div>

              {val.lblArr?.map((val, index) => {
                return (
                  <span
                    className={`lbl${index}`}
                    key={index}
                    aria-hidden={true}
                  >
                    {val}
                  </span>
                );
              })}

              <div className={`img-label${+index + 1}`}>
                {val?.atomsNames?.map((val, index) => {
                  return (
                    <div
                      key={index}
                      className={val.classes}
                      aria-hidden={true}
                      dangerouslySetInnerHTML={{ __html: val.value }}
                    ></div>
                  );
                })}
              </div>
              <Button
                key={index}
                ariaLable={val.label}
                text={val.label}
                title={val.label}
                id={val.id}
                disabled={isPopupActive || changeClass}
                classes={`hotspot-btn label ${val.classesBtn} label${index} ${
                  changeClass ? "visited" : ""
                }`}
                onClick={(e) => handleSelectButton(val.id)}
              ></Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Screen4;
