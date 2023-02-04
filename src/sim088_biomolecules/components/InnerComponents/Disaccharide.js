import "./style.scss";
import React from "react";
import rawData from "../../data";

const Disaccharide = (props) => {
  let {
    imgSrc,
    classes,
    labelArr: arr,
    alt,
  } = rawData.allAtomInfo.filter((val) => val.type == "disaccharide")[0];
  let { classesForDiv } = props;
  return (
    <div className={`disaccharideArea ${classesForDiv}`}>
      <img src={imgSrc} className={`disaccharideImg ${classes}`} alt={alt} />
      <div className="lbl-area">
        {arr?.map((val, index) => {
          return (
            <span key={index} aria-hidden={true} className={`lbl${+index + 1}`}>
              {val}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Disaccharide;
