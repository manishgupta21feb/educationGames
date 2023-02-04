import React from "react";
import ViewA from "../../containers/RightViewAContainer";
import ViewB from "../../containers/RightViewBContainer";

const RightView = ({ activityMode }) => {
  return <>{activityMode == "structure" ? <ViewA /> : <ViewB />}</>;
};

export default RightView;
