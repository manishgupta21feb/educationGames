import "./style.scss";
import React from "react";
import rawData from "../../data";

const VitaminA = (props) => {
  let {
    imgSrc,
    alt,
    classes,
    labelArr: arr,
  } = rawData.allAtomInfo.filter((val) => val.type == "vitamin_a")[0];
  let { classesForDiv } = props;
  return (
    <div className={`vitaminAArea ${classesForDiv}`}>
      <img src={imgSrc} className={`vitaminAImg ${classes}`} alt={alt} />
      {arr?.map((val, index) => {
        return (
          <span
            aria-hidden={true}
            key={`unsaturatedFattyAcid${index}`}
            className={`lbl${+index + 1}`}
          >
            {val}
          </span>
        );
      })}
    </div>
  );
};

export default VitaminA;
