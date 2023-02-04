import "./style.scss";
import React from "react";
import rawData from "../../data";

const UnsaturatedFattyAcid = (props) => {
  let {
    imgSrc,
    classes,
    alt,
    labelArr: arr,
  } = rawData.allAtomInfo.filter(
    (val) => val.type == "unsaturatedFattyAcid"
  )[0];
  let { classesForDiv } = props;
  return (
    <div className={`unsaturatedFattyAcid ${classesForDiv}`}>
      <img
        src={imgSrc}
        className={`unsaturatedFattyAcidImg ${classes}`}
        alt={alt}
      />
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

export default UnsaturatedFattyAcid;
