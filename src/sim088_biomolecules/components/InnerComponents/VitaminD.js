import "./style.scss";
import React from "react";
import rawData from "../../data";

const VitaminD = (props) => {
  let {
    imgSrc,
    classes,
    alt,
    labelArr: arr,
  } = rawData.allAtomInfo.filter((val) => val.type == "vitamin_d")[0];
  let { classesForDiv } = props;
  return (
    <div className={`vitaminDArea ${classesForDiv}`}>
      <img src={imgSrc} className={`vitaminDImg ${classes}`} alt={alt} />
      {arr?.map((val, index) => {
        return (
          <span aria-hidden={true} key={index} className={`lbl${+index + 1}`}>
            {val}
          </span>
        );
      })}
    </div>
  );
};

export default VitaminD;
