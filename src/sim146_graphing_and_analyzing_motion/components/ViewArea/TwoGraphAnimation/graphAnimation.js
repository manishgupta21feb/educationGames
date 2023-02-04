import React from "react";
import "./style.scss";
import DistanceSelect from "../../../containers/DistanceSelectContainer";
import TimeSelectContainer from "../../../containers/TimeSelectContainer";
import Graph from "../../../containers/GraphContainer";
import PlotButton from "../../../containers/PlotButton";
import ContinueButton from "../../../containers/ContinueButton";
import RestartButton from "../../../containers/RestartButton";
const graphAnimation = (props) => {
  const {
    selectedVehicleData,
    data,
    selectTime,
    selectDistance,
    plotState,
    plot,
    altForGraph,
    graphHeading,
  } = props;
  return (
    <div className="graph-area-container">
      <h2>{graphHeading}</h2>
      <div className="graph-area">
        {data.newGraphVals.map((gv) => {
          return (
            <div
              aria-hidden
              className={`${gv.id}--left size`}
              key={`${screen.id}_${gv.id}`}
            >
              {gv.txt}
            </div>
          );
        })}
        {data.newGraphVals.map((gv) => {
          return (
            <div
              aria-hidden
              className={`${gv.id}--bottom size`}
              key={`${screen.id}_${gv.id}_bottom`}
            >
              {gv.txt}
            </div>
          );
        })}
        <div className="distance-left size-two">{data.graphDistance}</div>
        <div className="time-bottom size-two">{data.graphTime}</div>
        <div className="graph-empty">
          <img className="sr-only sr-image" alt={altForGraph} />
        </div>
        <Graph />

        <div className="distance-select-container">
          <DistanceSelect />
        </div>
        <div className="time-select-container">
          <TimeSelectContainer />
        </div>
        <PlotButton />
      </div>
      <RestartButton />
      <ContinueButton />
    </div>
  );
};

export default graphAnimation;
