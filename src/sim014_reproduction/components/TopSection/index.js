import React from "react";
import TopStaticContainer from "../../containers/TopStaticContainer";
import TopInteractiveContainer from "../../containers/TopInteractiveContainer";
import "./style.scss";

const TopSection = (props) => {
  const { showStatic } = props;
  return (
    <div className="top-section">
      {showStatic ? <TopStaticContainer /> : <TopInteractiveContainer />}
    </div>
  );
};

export default TopSection;
