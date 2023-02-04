import React from "react";
import ScreenOne from "../../containers/ScreenOneContainer";
import GraphAnimation from "../../containers/GraphAnimationContainer";
import McqArea from "../../containers/McqAreaContainer";
import VideoArea from "../../containers/VideoAreaContainer";

const index = (props) => {
  const { ifMainScreen, screenVal } = props;

  const selectScreen = () => {
    switch (screenVal) {
      case "one":
        return <VideoArea />;
      case "two":
        return <GraphAnimation />;
      case "three":
        return <McqArea />;
      default:
        return <ScreenOne />;
    }
  };
  return <div style={{ width: "100%", height: "100%" }}>{selectScreen()}</div>;
};

export default index;
