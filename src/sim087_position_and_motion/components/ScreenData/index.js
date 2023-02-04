import React, { useEffect, useState } from "react";

import "./style.scss";

const ScreenData = (props) => {
  const { animationScreenId, data, id, showVideoLevel } = props;

  let index = id === "hardHit" ? 0 : 1;

  return (
    <div className="screen-text-container">
      {animationScreenId === "seesaw" ? (
        <>
          <div>
            <p className="seesaw-boy-name-one">{data.boyTwo}</p>
            <p className="seesaw-boy-name-two">{data.boyOne}</p>
          </div>
          {showVideoLevel && (
            <div>
              <p className="seesaw-graph-main-heading">{data.heading}</p>
              <p className="seesaw-graph-boy-name seesaw-graph-boy-name-one">
                {data.boyOne}
              </p>
              <p className="seesaw-graph-boy-name seesaw-graph-boy-name-two">
                {data.boyTwo}
              </p>
              <p className="x-y-axis seesaw-graph-y-axis">
                {data.yAxisHeading}
              </p>
              <p className="x-y-axis seesaw-graph-x-axis">
                {data.xAxisHeading}
              </p>
            </div>
          )}
        </>
      ) : (
        <>
          {id !== "" && (
            <p className="ballHit-graph-main-heading">{data.hitType[index]}</p>
          )}
          <p className="x-y-axis ballHit-graph-y-axis">{data.yAxisHeading}</p>
          <p className="x-y-axis ballHit-graph-x-axis">{data.xAxisHeading}</p>
          <p className="ballHit-graph-valueHeading-heading">
            <span aria-hidden>{data.valueHeading}</span>
            <span className="sr-only sr-image">{data.valueHeadingAlt}</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ScreenData;
