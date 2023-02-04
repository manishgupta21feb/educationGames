import React, { useEffect, useState } from "react";
import "./style.scss";

const Screen1 = (props) => {
  const { screenNo, screenData } = props;

  return (
    <div className={`screen${screenNo}-top`}>
      {screenData?.text.map((val, index) => {
        return (
          <p
            key={index}
            className={" lbl-sr1 " + val.classes}
            dangerouslySetInnerHTML={{ __html: val.txt }}
          ></p>
        );
      })}
    </div>
  );
};

export default Screen1;
