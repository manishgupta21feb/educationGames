import React, { useEffect, useState } from "react";
import "./style.scss";
import VitaminD from "../../InnerComponents/VitaminD";
import Glycerol from "../../InnerComponents/Glycerol";
import VitaminA from "../../InnerComponents/VitaminA";

const Screen9 = (props) => {
  const { screenNo, screenData, currentScreen } = props;

  const getScreenNo = (type) => {
    if (type == 1) {
      return <VitaminA />;
    } else if (type == 2) {
      return <VitaminD />;
    } else if (type == 3) {
      return <Glycerol />;
    } else {
      return (
        <>
          <VitaminA />
          <VitaminD />
          <Glycerol />
        </>
      );
    }
  };
  return (
    <div className={`screen${screenNo}-top`}>
      {screenData.compoundData[currentScreen - 1].type?.map((val, index) => {
        return (
          <div className={`subScreen${val.id}`} key={index}>
            {getScreenNo(val.id)}
            {val.name.split(":").map((value, i) => {
              return (
                <span className={`lblAcid${+i + 1} ${val.classes}`} key={i}>
                  {value}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default Screen9;
