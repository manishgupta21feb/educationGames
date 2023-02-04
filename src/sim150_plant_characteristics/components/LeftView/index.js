import React from "react";
import ViewA from "../../containers/LeftViewAContainer";
import ViewB from "../../containers/LeftViewBContainer";

const LeftView = ({ activityMode }) => {
  return <>{activityMode == "structure" ? <ViewA /> : <ViewB />}</>;
};

export default LeftView;
