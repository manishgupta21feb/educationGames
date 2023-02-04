import React from "react";
import Screen1 from "./Screen1/index.js";
import Screen2 from "../../../containers/LeftRightScreen2Container";
import Button from "../../../containers/ButtonContinueContainer";

import "./style.scss";
const index = (props) => {
  const { ifSubScreen, questionScreen1, text, staticImgTxt, topStaticAltTxt } =
    props;
  return (
    <div className="parent-container">
      <div className="hide"></div>
      {ifSubScreen ? (
        <Screen1
          questionScreen1={questionScreen1}
          text={text}
          staticImgTxt={staticImgTxt}
          topStaticAltTxt={topStaticAltTxt}
        />
      ) : (
        <Screen2 />
      )}
    </div>
  );
};

export default index;
