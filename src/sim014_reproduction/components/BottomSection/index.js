import React from "react";
import BottomStaticContainer from "../../containers/BottomStaticContainer";
import BottomInteractiveContainer from "../../containers/BottomInteractiveContainer";
import "./style.scss";

const BottomSection = (props) => {
  const {
    visitedHotspots,
    jumpToMCQScreenState,
    nextButtonClickedState,
  } = props;
  return (
    <div className="bottom-section">
      {/* <BottomInteractiveContainer /> */}
      {!jumpToMCQScreenState ? (
        <>
          {!nextButtonClickedState || visitedHotspots.length == 0 ? (
            <BottomStaticContainer />
          ) : (
            <BottomInteractiveContainer />
          )}
        </>
      ) : (
        <BottomInteractiveContainer />
      )}
    </div>
  );
};

export default BottomSection;
