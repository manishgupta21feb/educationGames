import React from "react";
import CounterComponent from "./CounterComponent";
import ResultAreaComponent from "./ResultAreaComponent";
import "./ScaleComponent.scss";
import data from "../../data";

const ScaleComponent = (props) => {
  return (
    <div className="result-container">
      <CounterComponent {...props} />
      <ResultAreaComponent {...props} />
      <div className="scale-image"></div>
      <div className="keys">
        <div className="electrical-force">
          <img className="sr-only sr-image" alt={data.redArrow} />
          <div className="arrow-electrical"></div>
          <p aria-hidden>{data.eletricalLabel}</p>
        </div>
        <div className="gravitational-force">
          <img className="sr-only sr-image" alt={data.yellowArrow} />
          <div className="arrow-gravitational"></div>
          <p aria-hidden>{data.gravitationalLabel}</p>
        </div>
      </div>
    </div>
  );
};

export default ScaleComponent;
