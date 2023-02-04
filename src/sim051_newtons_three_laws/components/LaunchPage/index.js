import React from "react";
import ExperimentBox from "./ExperimentBox";
import ExperimentButton from "./ExperimentButton";

import "./style.scss";

export default (props) => {
  const {
    isPopupActive,
    instructionText,
    launchScreenButtons,
    onChangeScreen,
    btnSound
  } = props;

  const onBtnClick = (val) => {
    btnSound(val.id);
    onChangeScreen(val.nextScreen);
  };

  return (
    <>
      <h1 className="heading">{instructionText}</h1>
      <div className="experiment-box-container">
        {launchScreenButtons.map((btn) => {
          return (
            <div key={btn.id} id={btn.id+"-wapper"} className="box-button">
              <ExperimentBox
                altText={btn.altText}
                id={btn.id}
                leftText={btn.leftText}
                rightText={btn.rightText}
              ></ExperimentBox>
              <ExperimentButton
                isPopupActive={isPopupActive}
                btn={btn}
                onBtnClick={onBtnClick}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
