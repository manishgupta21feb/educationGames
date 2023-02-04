import "./style.scss";
import React from "react";
import rawData from "../../data";

const Dipeptide = (props) => {
  let {
    imgSrc,
    classes,
    labelArr: arr,
  } = rawData.allAtomInfo.filter((val) => val.type == "dipeptide1")[0];
  let {
    imgSrc: imgSrc2,
    classes: classes2,
    labelArr: arr2,
  } = rawData.allAtomInfo.filter((val) => val.type == "dipeptide2")[0];
  let { classesForDiv, hide } = props;
  return (
    <div className={`dipeptideArea ${classesForDiv[0]} `}>
      <div className={`dipeptideArea1 ${classesForDiv[1]} `}>
        <img src={imgSrc} className={`dipeptideImg1 ${classes}`} />
        {arr?.map((val, index) => {
          return (
            <span key={index} className={`lbl${+index + 1}`}>
              {val}
            </span>
          );
        })}
      </div>
      <div className={`dipeptideArea2 ${classesForDiv[2]} `}>
        <img src={imgSrc2} className={`dipeptideImg2 ${classes2}`} />
        {arr2?.map((val, index) => {
          return (
            <span key={index} className={`lbl${+index + 1}`}>
              {val}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Dipeptide;
