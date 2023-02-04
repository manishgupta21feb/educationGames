import React from "react";
import ScreenOne from "../../containers/ScreenOneContainer";
import ScreenTwo from "../../containers/ScreenTwoContainer";

const index = (props) => {
  const { ifMainScreen, screenVal } = props;

  const selectScreen = () => {
    switch (screenVal) {
      case "one":
        return <ScreenTwo />;

      default:
        return <ScreenOne />;
    }
  };
  return <div style={{ width: "100%", height: "100%" }}>{selectScreen()}</div>;
};

export default index;
