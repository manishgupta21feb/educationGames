import React, { useState } from "react";
import View from "../../../../app/components/View";
import Top from "./Top";
import Bottom from "./Bottom";
import Button from "../../../containers/ButtonContinueContainer";
import ButtonNext from "../../../containers/ButtonNextContainer";
import "./style.scss";
const index = (props) => {
  const {
    ifSubScreen,
    questionScreen1,
    questionScreen2,
    text,
    staticImgTxt,
    mcqImgTxt,
    submitAnswer,
    correctAnswer,
    topStaticAltTxt,
    topScreen2AltTxt,
  } = props;

  return (
    <div>
      <View layout="topbottom">
        <Top
          ifSubScreen={ifSubScreen}
          questionScreen2={questionScreen2}
          questionScreen1={questionScreen1}
          staticImgTxt={staticImgTxt}
          mcqImgTxt={mcqImgTxt}
          topStaticAltTxt={topStaticAltTxt}
          topScreen2AltTxt={topScreen2AltTxt}
        />
        <Bottom ifSubScreen={ifSubScreen} text={text} />
      </View>

      {ifSubScreen ? (
        <Button
          text="continue"
          classes="right-arrow toast-secondary-button positive"
        />
      ) : null}

      {!ifSubScreen ? (
        correctAnswer && submitAnswer ? (
          <ButtonNext />
        ) : null
      ) : null}
    </div>
  );
};

export default index;
