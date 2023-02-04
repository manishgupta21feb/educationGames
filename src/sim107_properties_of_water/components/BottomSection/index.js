import React from "react";
import BottomStaticContainer from "../../containers/BottomStaticContainer";
import BottomInteractiveContainer from "../../containers/BottomInteractiveContainer";
import "./style.scss";

const BottomSection = (props) => {
  const { start } = props;

  return (
    <div className="bottom-section">
      {start ? <BottomStaticContainer /> : <BottomInteractiveContainer />}
    </div>
  );
};

export default BottomSection;
