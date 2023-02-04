import React from "react";
import BottomInteractiveContainer from "../../containers/BottomInteractiveContainer";
import BottomStaticContainer from "../../containers/BottomStaticContainer";
import "./style.scss";

const BottomSection = (props) => {
  return (
    <div className="bottom-section">
      { props.investigatingStatus ? <BottomInteractiveContainer /> : <BottomStaticContainer/>}      
    </div>
  );
};

export default BottomSection;