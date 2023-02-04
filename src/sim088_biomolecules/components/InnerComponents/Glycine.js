import "./style.scss";
import React from "react";
import rawData from "../../data";

const Glycine = (props) => {
  let {
    imgSrc,
    imgSrc1,
    classes,
    labelArr: arr,
  } = rawData.allAtomInfo.filter((val) => val.type == "glycine")[0];
  let { classesForDiv, type } = props;
  return (
    <div className={`glycineArea ${classesForDiv}`}>
      <img
        src={type == 1 ? imgSrc1 : imgSrc}
        className={`glycineImg ${classes}`}
      />
      {arr?.map((val, index) => {
        return (
          <span key={index} className={`lbl${+index + 1}`}>
            {val}
          </span>
        );
      })}
    </div>
  );
};

export default Glycine;
