import React from "react";
import Arrow from "./Arrow";

const Arrows = (props) => {
  const { leftText, rightText, selectedF1Value, selectedF2Value } = props;

  return (
    <div className="arrows">
      {leftText ? (
        <p aria-hidden="true" className={`left-text arrow${selectedF1Value}`}>
          {leftText}
        </p>
      ) : null}
      {rightText ? (
        <p
          aria-hidden="true"
          className={`right-text arrow${
            selectedF2Value
              ? selectedF2Value
              : selectedF1Value > 80
              ? 80
              : selectedF1Value
          }`}
        >
          {rightText}
        </p>
      ) : null}
      <Arrow classes={`left arrow${selectedF1Value}`}></Arrow>
      <Arrow classes="top"></Arrow>
      <Arrow
        classes={`right arrow${
          selectedF2Value
            ? selectedF2Value
            : selectedF1Value > 80
            ? 80
            : selectedF1Value
        }`}
      ></Arrow>
      <Arrow classes="bottom"></Arrow>
    </div>
  );
};

Arrows.defaultProps = {
  leftText: "", 
  rightText: "", 
  selectedF1Value: 0, 
  selectedF2Value: 0
};

export default Arrows;


