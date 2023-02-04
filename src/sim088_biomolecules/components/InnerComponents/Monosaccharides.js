import "./style.scss";
import React from "react";
import rawData from "../../data";

const Monosaccharides = (props) => {
  let {
    imgSrc,
    classes,
    labelArr: arr,
    alt,
  } = rawData.allAtomInfo.filter((val) => val.type == "monosaccharides")[0];
  let { classesForDiv } = props;
  return (
    <div className={`monosaccharidesArea ${classesForDiv}`}>
      <img src={imgSrc} className={`monosaccharidesImg ${classes}`} alt={alt} />
      <div className="lbl-area">
        {arr?.map((val, index) => {
          return (
            <span aria-hidden={true} key={index} className={`lbl${+index + 1}`}>
              {val}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Monosaccharides;
