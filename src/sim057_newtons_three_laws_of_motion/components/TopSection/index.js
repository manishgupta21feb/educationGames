import React from "react";
import TopInteractiveContainer from "../../containers/TopInteractiveContainer";
import TopStaticContainer from "../../containers/TopStaticContainer";
import "./style.scss";

const TopSection = (props) => {
  return (
    props.investigatingStatus ? <TopStaticContainer /> : <TopInteractiveContainer />
  );
};

export default TopSection;