import "./style.scss";
import React from "react";
import rawData from "../../data";

const Polysaccharides = (props) => {
  let {
    imgSrc,
    classes,
    alt,
    labelArr: arr,
  } = rawData.allAtomInfo.filter((val) => val.type == "polysaccharides")[0];
  let { classesForDiv } = props;
  return (
    <div className={`polysaccharidesArea ${classesForDiv}`}>
      <img src={imgSrc} className={`polysaccharidesImg ${classes}`} alt={alt} />
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

export default Polysaccharides;
