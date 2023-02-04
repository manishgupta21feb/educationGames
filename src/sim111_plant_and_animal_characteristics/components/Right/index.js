import React from "react";
import "./style.scss";
import Draggables from "../../containers/DraggablesContainer";
import FinishButton from "../../containers/FinishButtonContainer";
import ContinueButton from "../../containers/ContinueButtonContainer";

const RightArea = (props) => {
  const {
    monekyDiscription,
    activityCompleted,
    isSecondScreenEnable,
    treeDiscription,
    flag,
    firstActivityCompleted,
  } = props;
  return (
    <div className="right-area">
      <h2 className="heading-text">
        {isSecondScreenEnable ? monekyDiscription : treeDiscription}
      </h2>
      <Draggables flag={flag} />
      <div
        style={{
          display: activityCompleted ? "block" : "none",
        }}
      >
        <FinishButton />
      </div>

      <div
        style={{
          display: firstActivityCompleted ? "block" : "none",
        }}
      >
        <ContinueButton />
      </div>
    </div>
  );
};

export default RightArea;
