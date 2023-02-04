import React from "react";
import LeftCounter from "../../containers/LeftCounter";
import RightCounter from "../../containers/RightCounter";
import "./style.scss";

const Interactive = (props) => {
  const {
    leftValue,
    rightValue,
    animateType,
    leftCounterHead,
    rightCounterHead,
    animateEnd,
  } = props;

  return (
    <div className="interactive-main">
      <div className="counter-main">
        <div className="left">
          <p className="count-head">{leftCounterHead}</p>
          <div className="count">
            <LeftCounter />
          </div>
        </div>

        <div className="right">
          <p className="count-head">{rightCounterHead}</p>
          <RightCounter />
        </div>
      </div>
      <div className="arrow-left"></div>
      <div className="arrow-right"></div>
      <p className="left-val">{leftValue}</p>
      <p className="right-val">{rightValue}</p>
      <div
        className="still-pos"
        style={{ opacity: !animateEnd && animateType != "none" ? 1 : 0 }}
        aria-hidden={true}
      >
        <div
          className={`sprite upright ${
            animateType == "leftBackward" || animateType == "rightBackward"
              ? "show"
              : ""
          } `}
        ></div>
        <div
          className={`sprite leanLeft ${
            animateType == "leftForward" ? "show" : ""
          } `}
        ></div>
        <div
          className={`sprite leanRight ${
            animateType == "rightForward" ? "show" : ""
          }`}
        ></div>
      </div>
      <div className="wall-animation">
        <div
          className={`wall leftForward ${
            animateType == "leftForward" ? "animate-leftForward" : ""
          }`}
        ></div>
        <div
          className={`wall leftBackward ${
            animateType == "leftBackward" ? "animate-leftBackward" : ""
          }`}
        ></div>
        <div
          className={`wall rightBackward ${
            animateType == "rightBackward" ? "animate-rightBackward" : ""
          }`}
        ></div>
        <div
          className={`wall rightForward ${
            animateType == "rightForward" ? "animate-rightForward" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Interactive;
