import React, { useState, useEffect } from "react";

import Button from "../../../../app/components/Button";
import TopBottom from "../../../containers/TopBottomContainer";
import LeftRight from "../../../containers/LeftRightScreenContainer";
import "./style.scss";
const Screen2 = (props) => {
  const { data, onClick, viewFrame, visitedQue, isPopupActive } = props;

  useEffect(() => {
    viewFilter(viewFrame);
  }, [viewFrame]);
  const viewFilter = (viewFrame) => {
    switch (viewFrame) {
      case "boylesLaw":
        return <LeftRight />;
      case "charlesLaw":
        return <LeftRight />;
      default:
        return <TopBottom />;
    }
  };

  const handleClick = (e) => {
    onClick(e.target.id);
  };

  return (
    <>
      {viewFrame ? (
        viewFilter(viewFrame)
      ) : (
        <div className="main-container">
          <h2>{data.home.title}</h2>
          <div className="container">
            {data.home.frames.map((frame) => {
              return (
                <div className="frameContainer" key={`container${frame.id}`}>
                  <div
                    className={
                      visitedQue.includes(frame.id)
                        ? "disabledImg"
                        : `blockImg `
                    }
                  >
                    <div className={`img--${frame.id}`}>
                      <img className="sr-only sr-image" alt={frame.altTxt} />
                    </div>
                  </div>

                  <Button
                    classes={
                      visitedQue.includes(frame.id)
                        ? `disabledBtn--${frame.id}`
                        : `button--${frame.id}`
                    }
                    data-id={frame.id}
                    id={frame.id}
                    onClick={(e) => {
                      handleClick(e);
                    }}
                    text={frame.title}
                    label={frame.title}
                    disabled={visitedQue.includes(frame.id)}
                    isPopupActive={isPopupActive}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Screen2;
