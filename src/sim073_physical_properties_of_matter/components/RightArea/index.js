import React, { useEffect, useState } from "react";
import FinishButton from "../../containers/FInishButtonContainer";
import ContinueButton from "../../containers/ContinueButtonContainer";
import "./style.scss";

const RightArea = (props) => {
  const {
    activityText,
    showNextButton,
    activityCompleted,
    priviousSelectedItem,
  } = props;

  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    setRerender(!rerender);
    console.log("=============", rerender);
  }, [showNextButton]);

  return (
    <div className="right-static">
      <div className="intstruction-area">
        {activityText.map((a, i) => {
          return (
            <p
              key={i}
              className="instruction-text"
              dangerouslySetInnerHTML={{ __html: a }}
            ></p>
          );
        })}
      </div>
      <div>
        {showNextButton && priviousSelectedItem.length == 7 ? (
          activityCompleted ? (
            <FinishButton />
          ) : (
            <ContinueButton />
          )
        ) : null}
      </div>
    </div>
  );
};

export default RightArea;
