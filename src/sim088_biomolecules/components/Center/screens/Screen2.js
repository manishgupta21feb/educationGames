import React, { useEffect, useState } from "react";
import "./style.scss";
import Button from "../../../../app/components/Button";

const Screen2 = (props) => {
  const { visitedHotspot, screenNo, screenData, nextScreen, isPopupActive } =
    props;

  const handleSelectButton = (id) => {
    nextScreen(id);
  };

  return (
    <div className={`screen${screenNo}-center`}>
      <p
        className="heading"
        dangerouslySetInnerHTML={{ __html: screenData.heading }}
      ></p>
      <div className="wrapper">
        <div className="box">
          {screenData.subCategory?.map((val, index) => {
            return (
              <div
                className={`rectangle-box rectangle-box_${index}`}
                key={`screen-${screenNo}-${index}`}
              >
                <div className="img-area">
                  <img
                    src={val.imgSrc}
                    className={`img${index}`}
                    alt={val.alt}
                  />
                </div>
                <Button
                  key={index}
                  ariaLable={val.label}
                  text={val.label}
                  title={val.label}
                  id={val.id}
                  disabled={isPopupActive}
                  classes={`hotspot-btn label label${index} ${
                    visitedHotspot?.find((x) => x.id == val.id) ? `visited` : ``
                  }`}
                  onClick={(e) => handleSelectButton(val.id)}
                ></Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Screen2;
