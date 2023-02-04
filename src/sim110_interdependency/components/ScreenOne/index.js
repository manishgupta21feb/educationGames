import React, { useState, useEffect } from "react";

import Button from "../../../app/components/Button";

import TopBottom from "../../containers/TopBottomContainer";

import "./style.scss";
const Screen2 = (props) => {
  const { data, onClick, viewFrame, visitedQue, isPopupActive, question } =
    props;

  const handleClick = (id) => {
    onClick(id);
  };

  return (
    <>
      {viewFrame ? (
        <TopBottom />
      ) : (
        <div className="main-container">
          <img className="sr-image sr-only" alt={data.terrariumAltText} />
          <div className="white">
            <h2
              dangerouslySetInnerHTML={{
                __html: question,
              }}
            ></h2>
          </div>

          {data.dashedLine.map((dash) => {
            return (
              <div
                aria-hidden
                className={`container--${dash.id}`}
                key={`container${dash.id}`}
              >
                <div key={`dash${dash.id}`} className={`dash${dash.id}`}></div>
                <div
                  key={`bullet${dash.id}`}
                  className={`bullet${dash.id}`}
                ></div>
              </div>
            );
          })}

          {data.screenOneButtons.map((btn) => {
            return (
              <Button
                isPopupActive={isPopupActive}
                text={btn.text}
                key={btn.text}
                data-id={btn.id}
                classes={`hot-spot hot-spot--${btn.id}`}
                onClick={(e) => handleClick(btn.id)}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Screen2;
