import React, { useState, useRef, useEffect } from "react";
import View from "../../../app/components/View";
import Top from "./Top";
import Bottom from "./Bottom";
import ButtonContinue from "../../containers/ButtonContinueContainer";
import ButtonNext from "../../containers/ButtonNextContainer";
import "./style.scss";

const index = (props) => {
  const {
    ifSubScreen,
    screenTwoTxt,
    imgText,
    imgId,
    data,
    mcqImgTxt,
    mcqImgId,
    submitAnswerMcq,
    submitButtonPressed,
    altText,
    isPopupActive,
  } = props;

  return (
    <div>
      <View layout="topbottom">
        <Top
          ifSubScreen={ifSubScreen}
          imgText={imgText}
          imgId={imgId}
          mcqImgTxt={mcqImgTxt}
          mcqImgId={mcqImgId}
          altText={altText}
        />
        <Bottom ifSubScreen={ifSubScreen} screenTwoTxt={screenTwoTxt} />
      </View>

      {ifSubScreen ? <ButtonContinue isPopupActive={isPopupActive} /> : null}

      {!ifSubScreen ? (
        submitAnswerMcq ? (
          <ButtonNext isPopupActive={isPopupActive} />
        ) : null
      ) : null}
    </div>
  );
};

export default index;
