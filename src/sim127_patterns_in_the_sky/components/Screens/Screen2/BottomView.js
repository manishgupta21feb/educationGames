import React from "react";
import RadioButtons from "../../../containers/RadioButtons";
import MCQContainer from "../../../containers/MCQContainer";
import NextScreenButton from "../../../containers/Screen2NextScreenButton";

const BottomView = (props) => {
  return (
    <div className="screen2-bottom" aria-hidden={props.isPopupActive}>
      <MCQContainer>
        <RadioButtons />
      </MCQContainer>
      {props.questionAnswered ? <NextScreenButton /> : null}
    </div>
  );
};

export default BottomView;
