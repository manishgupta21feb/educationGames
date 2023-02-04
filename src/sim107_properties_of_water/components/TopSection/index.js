import React from "react";
import TopStaticContainer from "../../containers/TopStaticContainer";
import TopInteractiveContainer from "../../containers/TopInteractiveContainer";
import "./style.scss";

const TopSection = (props) => {
  const { start } = props;
  return (
    <div className="top-section">
      {start ? <TopInteractiveContainer /> : <TopStaticContainer />}
    </div>
  );
};

export default TopSection;
