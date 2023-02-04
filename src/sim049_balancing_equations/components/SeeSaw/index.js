import React, { useEffect, useState, useRef } from "react";
import "./style.scss";

const SeeSaw = (props) => {
  const ref = useRef(null);
  const {
    label,
    leftArray,
    rightArray,
    altText,
    selectedOption,
    mcqOptionId,
    id,
  } = props;

  const _label = label.toLowerCase();

  useEffect(() => {
    let angle = rightArray.length - leftArray.length;
    if (ref.current) {
      ref.current.querySelector(
        ".seesaw-board"
      ).style.transform = `rotate(${angle}deg)`;
    }
  }, [leftArray, rightArray]);

  const map = (array, type, label, id) => {
    return array.map((item, index) => (
      <div
        key={`${type}-item-${index}`}
        className={`atoms ${
          selectedOption == mcqOptionId && id == "hydrogen" ? "hydrogenTwo" : id
        } ${id}${index}`}
      ></div>
    ));
  };

  return (
    <>
      <div ref={ref} className="seesaw-wrapper">
        <img className="sr-only sr-image" alt={altText} />
        <div className={`seesaw-board seesaw-top`}>
          <div className="left">{map(leftArray, "left", _label, id)}</div>
          <div className="right">{map(rightArray, "right", _label, id)}</div>
        </div>
        <div className={`seesaw-stand`}></div>
        <div className={`label-main`}>
          <p className={`label`}>{label}</p>
        </div>
      </div>
    </>
  );
};

SeeSaw.defaultProps = {
  leftArray: [1, 2, 3, 4],
  rightArray: [1, 2, 3, 4],
};

export default SeeSaw;
