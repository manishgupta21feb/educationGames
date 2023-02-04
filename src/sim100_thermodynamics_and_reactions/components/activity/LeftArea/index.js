import React, { useEffect, useState } from "react";
import "./style.scss";
import _data from "../../../data/index";

const LeftStatic = (props) => {
  const {
    subHeading,
    data,
    questionCount,
    heading,
    labels,
    questionsData,
    itemData,
  } = props;

  return (
    <>
      <div className="sr-only" aria-level="1" role="heading">
        <p>{heading}</p>
      </div>
      <div className={`left-static`}>
        <h2 className="heading_img">
          {subHeading.replace("{questionCount}", questionCount)}
        </h2>

        {itemData ? (
          <div className={itemData.imgName}>
            <img className="sr-only sr-image" alt={itemData.alt} />
            <div className="main-graph" aria-hidden={true}>
              {itemData.graphType.map((val, index) => {
                return (
                  <div className={val} aria-hidden={true} key={index}></div>
                );
              })}
            </div>
            <p className="y-axis-text" aria-hidden={true}>
              {itemData.yAxis}
            </p>

            <div className="y-axis-numbers" aria-hidden={true}>
              {itemData.yAxisParams.map((val, index) => {
                return (
                  <p aria-hidden={true} key={index}>
                    {val}
                  </p>
                );
              })}
            </div>

            <div className="allArrows">
              {itemData.arrow.map((val, index) => {
                return (
                  <img
                    aria-hidden={true}
                    src={val.src}
                    key={index}
                    aria-hidden
                    className={val.classes}
                  />
                );
              })}
            </div>

            {itemData.dottedLines.map((val, index) => {
              return <div aria-hidden={true} className={val} key={index}></div>;
            })}

            {itemData.labels.map((val, index) => {
              return (
                <div
                  aria-hidden={true}
                  key={index}
                  className={val.classes}
                  dangerouslySetInnerHTML={{ __html: val.text }}
                ></div>
              );
            })}
            <p className="x-axis-text" aria-hidden={true}>
              {itemData.xAxis}
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default LeftStatic;
