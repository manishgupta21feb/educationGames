import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import * as _ from "lodash";
import "./style.scss";

const LineGraph = (props) => {
  const {
    dataItem,
    graphYaxisHeading,
    graphXaxisHeading,
    smallBeakedLabel,
    largeBeakedLabel,
    graphAriaLabels,
  } = props;
  const ref = useRef(null);

  const options = {
    devicePixelRatio: 3,
    scales: {
      y: {
        min: 0,
        max: 500,
        ticks: {
          stepSize: 100,
          beginAtZero: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    events: [],
  };

  return (
    <div className="graph">
      <div className="graph-legends">
        <div className="graph-legends-large-beaked">
          <div className="circle"></div>
          <p>{largeBeakedLabel}</p>
        </div>
        <div className="graph-legends-small-beaked">
          <div className="square"></div>
          <p>{smallBeakedLabel}</p>
        </div>
      </div>
      <p className="graphYaxisHeading">{graphYaxisHeading}</p>
      <Line
        aria-label={graphAriaLabels}
        height="220"
        width="220"
        ref={ref}
        data={dataItem}
        options={options}
      />
      <p className="graphXaxisHeading">{graphXaxisHeading}</p>
    </div>
  );
};

export default LineGraph;
