import "./style.scss";
import React from "react";
import rawData from "../../data";

const Glycerol = (props) => {
  let {
    imgSrc,
    classes,
    labelArr: arr,
  } = rawData.allAtomInfo.filter((val) => val.type == "glycerol")[0];
  let { classesForDiv } = props;
  return (
    <div className={`glycerolArea ${classesForDiv}`}>
      <img src={imgSrc} className={`glycerolImg ${classes}`} />
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

export default Glycerol;
