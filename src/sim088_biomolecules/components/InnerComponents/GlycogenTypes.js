import "./style.scss";
import React from "react";
import rawData from "../../data";

const GlycogenTypes = (props) => {
  let { types } = props;
  let {
    imgSrc,
    classes,
    labelArr: arr,
  } = rawData.allAtomInfo.filter(
    (val) => val.type == `glycogenTypes${types}`
  )[0];
  let { classesForDiv } = props;
  if (types == 2) {
    //2 atoms show
    return (
      <div className={`glycogenTypesArea${types} ${classesForDiv}`}>
        <img src={imgSrc} className={`glycogenTypesImg${types} ${classes}`} />

        <div className="lbl-area">
          {arr?.map((val, index) => {
            return (
              <span
                key={`lbls ${index}${types}`}
                className={`lbl${+index + 1}`}
              >
                {val}
              </span>
            );
          })}
        </div>
      </div>
    );
  } else if (types == 3) {
    //3 atoms show
    return (
      <div className={`glycogenTypesArea${types} ${classesForDiv}`}>
        <img src={imgSrc} className={`glycogenTypesImg${types} ${classes}`} />
        <div className="lbl-area">
          {arr?.map((val, index) => {
            return (
              <span
                key={`lbls ${index}${types}`}
                className={`lbl${+index + 1}`}
              >
                {val}
              </span>
            );
          })}
        </div>
      </div>
    );
  } else if (types == 4) {
    //4 atoms show
    return (
      <div className={`glycogenTypesArea${types} ${classesForDiv}`}>
        <img src={imgSrc} className={`glycogenTypesImg${types} ${classes}`} />
        <div className="lbl-area">
          {arr?.map((val, index) => {
            return (
              <span
                key={`lbls ${index}${types}`}
                className={`lbl${+index + 1}`}
              >
                {val}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
};

export default GlycogenTypes;
