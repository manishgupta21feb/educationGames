import React, { useEffect, useState } from "react";
import "./style.scss";
import Monosaccharides from "../../InnerComponents/Monosaccharides";
import Disaccharide from "../../InnerComponents/Disaccharide";
import Polysaccharides from "../../InnerComponents/Polysaccharides";

const Screen5 = (props) => {
  const { screenNo, screenData, currentScreen } = props;

  const getImageType = (type) => {
    if (type == 1) {
      return <Monosaccharides />;
    } else if (type == 2) {
      return <Disaccharide />;
    } else if (type == 3) {
      return <Polysaccharides />;
    } else {
      return (
        <>
          <Monosaccharides />
          <Disaccharide />
          <Polysaccharides />
        </>
      );
    }
  };

  let { id } = screenData.compoundData[currentScreen - 1].type[0];
  return (
    <div className={`screen${screenNo}-top`}>
      <div className={`img${id}`}>{getImageType(id)}</div>
      {screenData.compoundData[currentScreen - 1].type?.map((val, index) => {
        return (
          <div key={`type-${val.id}`}>
            <div className={`formula${index}`}>
              {val.formula?.split(" ").map((v, i) => {
                return (
                  <span
                    className={`imgFormula${i} imgFormula`}
                    dangerouslySetInnerHTML={{ __html: v }}
                    key={i}
                  ></span>
                );
              })}
            </div>
            {val.name.split(":").map((v, i) => {
              return (
                <span
                  className={`imgTxt${i} ${val.classes}`}
                  dangerouslySetInnerHTML={{ __html: v }}
                  key={i}
                ></span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default Screen5;
