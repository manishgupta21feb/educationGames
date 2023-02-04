import React from "react";
import Draggables from "../../containers/DraggablesContainer";
import FinishButton from "../../containers/FinishButtonContainer";

const RightArea = (props) => {
  const { introHeading, activityCompleted } = props;
  return (
    <div className="right-area">
      {introHeading.map((intro, i) => {
        return (
          <h2 key={`intro-text-${i}`} className="heading-text">
            {intro}
          </h2>
        );
      })}
      <Draggables />
      <div
        style={{
          display: activityCompleted ? "block" : "none",
        }}
      >
        <FinishButton />
      </div>
    </div>
  );
};

export default RightArea;
