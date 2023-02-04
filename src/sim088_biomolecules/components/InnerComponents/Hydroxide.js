import "./style.scss";
import React from "react";
import rawData from "../../data";

const Hydroxide = (props) => {
  let {
    imgSrc,
    classes,
    labelArr: arr,
  } = rawData.allAtomInfo.filter((val) => val.type == "hydroxide")[0];
  let { classesForDiv, hide } = props;
  return (
    <div className={`hydroxideArea ${classesForDiv} ${hide ? `hidden` : ``}`}>
      <div className="bond1">
        {arr.map((val, index) => {
          return (
            <span key={index} className={`upperbond${+index + 1}`}>
              {val}
            </span>
          );
        })}
        <div className="upperbond4"></div>
      </div>
      <div className="bond2">
        <span className={`upperbond3`}>{arr[1]}</span>
        <div className="upperbond5"></div>
      </div>
    </div>
  );
};

export default Hydroxide;
