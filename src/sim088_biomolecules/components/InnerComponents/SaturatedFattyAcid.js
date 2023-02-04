import "./style.scss";
import React from "react";
import rawData from "../../data";

const SaturatedFattyAcid = (props) => {
  let {
    imgSrc,
    classes,
    alt,
    labelArr: arr,
  } = rawData.allAtomInfo.filter((val) => val.type == "saturatedFattyAcid")[0];
  let { classesForDiv } = props;
  return (
    <div className={`saturatedFattyAcid ${classesForDiv}`}>
      <img
        src={imgSrc}
        className={`saturatedFattyAcidImg ${classes}`}
        alt={alt}
      />
      {arr?.map((val, index) => {
        return (
          <span
            aria-hidden={true}
            key={`saturatedFatty${index}`}
            className={`lbl${+index + 1}`}
          >
            {val}
          </span>
        );
      })}
    </div>
  );
};

export default SaturatedFattyAcid;
