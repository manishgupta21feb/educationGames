import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import * as _ from "lodash";
import "./style.scss";

const LineGraph = (props) => {
  const {
    dataItem,
    dataVal,
    graphLabel,
    timeVal,
    distanceVal,
    plot,
    doPlotFalse,
    selectDistance,
    selectTime,
  } = props;

  const ref = useRef(null);
  const data = useRef(_.cloneDeep(dataItem));

  const options = {
    responsive: true,
    devicePixelRatio: 2,

    scales: {
      y: {
        min: 0,
        max: 100,

        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      x: {
        min: 0,
        max: 100,
        type: "linear",
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    events: [],
    animation: false,
  };

  useEffect(() => {
    if (plot) {
      const dataset = data.current.datasets[0];

      dataset.data.push({
        x: distanceVal.value,
        y: timeVal.value,
        pointRadius: 0,
      });
      dataset.pointRadius.unshift(0);
      ref.current.update();

      doPlotFalse();
    }
  }, [plot]);

  return (
    <>
      <div aria-hidden className="graph">
        <Line
          width={457}
          height={420}
          ref={ref}
          data={data.current}
          options={options}
        />
      </div>
    </>
  );
};

export default LineGraph;
