import React, { useState, useEffect } from "react";

import Button from "../../../app/components/Button";

import Bottom from "../../containers/BottomContainer";
import NextButton from "../../containers/ButtonNextContainer";

import "./style.scss";
const index = (props) => {
  const {
    data,
    onClick,
    visitedHotSpot,
    isPopupActive,
    currentHotSpot,
    ifSubScreen,
    answerAttempt,
    showToastMessage,
    imgAlt,
  } = props;

  const handleClick = (id) => {
    onClick(id);
  };

  return (
    <div className="main-container">
      <img className="sr-image sr-only" alt={imgAlt} />

      {data.screenOneButtons.map((dash) => {
        return (
          <>
            <div key={`dash${dash.id}`} className={`dash${dash.id}`}></div>
            <div key={`bullet${dash.id}`} className={`bullet${dash.id}`}></div>

            <Button
              isPopupActive={isPopupActive}
              text={dash.text}
              key={dash.text}
              data-id={dash.id}
              aria-label={dash.text}
              classes={
                currentHotSpot && currentHotSpot == dash.id
                  ? `hot-spot hot-spot--${dash.id} hotspot-btn label active`
                  : visitedHotSpot.includes(dash.id)
                  ? `hot-spot hot-spot--${dash.id} hotspot-btn label visited`
                  : `hotspot-btn label hot-spot hot-spot--${dash.id}`
              }
              ariaPressed={
                visitedHotSpot.includes(dash.id) || currentHotSpot == dash.id
              }
              onClick={(e) => handleClick(dash.id)}
              disabled={visitedHotSpot.includes(dash.id)}
            />
          </>
        );
      })}
      <div className="white">
        <Bottom />
      </div>

      {visitedHotSpot.length == 11 ? <NextButton /> : null}
    </div>
  );
};

export default index;
