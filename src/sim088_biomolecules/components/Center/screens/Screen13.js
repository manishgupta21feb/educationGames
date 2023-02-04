import React, { useEffect, useState } from "react";
import "./style.scss";
import Button from "../../../../app/components/Button";

const Screen13 = (props) => {
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
                {val.src.map((path, i) => {
                  return (
                    <img src={path} key={i} className={`${val.classes}_${i}`} />
                  );
                })}
              </div>
              <div className={`img-label${+index + 1}`}>
                {val?.atomsNames?.map((v, index) => {
                  return (
                    <span key={index} className={`img${index}`}>
                      {v}
                    </span>
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
export default Screen13;
