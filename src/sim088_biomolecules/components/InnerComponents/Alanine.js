import "./style.scss";
import React from "react";
import rawData from "../../data";

const Alanine = (props) => {
  let {
    imgSrc,
    classes,
    labelArr: arr,
    alt,
  } = rawData.allAtomInfo.filter((val) => val.type == "alanine")[0];
  let { classesForDiv } = props;
  return (
    <div className={`alanineArea ${classesForDiv}`}>
      <img src={imgSrc} className={`alanineImg ${classes}`} alt={alt} />
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

export default Alanine;
