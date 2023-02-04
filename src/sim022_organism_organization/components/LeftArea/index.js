import React from "react";
import LeftStaticContainer from "../../containers/LeftStaticContainer";
import LeftInteractiveContainer from "../../containers/LeftInteractiveContainer";
import "./style.scss";

const LeftArea = (props) => {
  return (
    <div className="left-area">
      <div className="sr-only" aria-level="1" role="heading">
        <p>{props.screen1Heading}</p>
      </div>
      <LeftInteractiveContainer />
    </div>
  );
};

export default LeftArea;
