import React from "react";
import ScreenOne from "../../containers/ScreenOneContainer";
import PeldulumScreen from "../../containers/PendulumScreenContainer";
import StartStop from "../../containers/ButtonStartStopContainer";
const index = (props) => {
  const { ifMainScreen, degree } = props;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {ifMainScreen ? <ScreenOne /> : <PeldulumScreen />}
    </div>
  );
};

export default index;
