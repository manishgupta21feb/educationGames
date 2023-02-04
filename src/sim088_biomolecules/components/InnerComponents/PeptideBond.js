import "./style.scss";
import React from "react";
import rawData from "../../data";

const PeptideBond = (props) => {
  let {
    imgSrc,
    alt,
    classes,
    labelArr: arr,
  } = rawData.allAtomInfo.filter((val) => val.type == "peptide_bond")[0];
  let { classesForDiv } = props;
  return (
    <div className={`peptideBondArea ${classesForDiv}`}>
      <img src={imgSrc} className={`peptideBondImg ${classes}`} alt={alt} />
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

export default PeptideBond;
