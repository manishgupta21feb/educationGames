import React, { useEffect, useRef, useState } from "react";
import { Line, Scatter } from "react-chartjs-2";

const LineGraph = (props) => {
  // const ref = useRef(null);
  const { graphValue, data, tripCount, pointerImages, chartDataSetText } =
    props;
  const [chartData, setChartData] = useState({});
  const [chartDataSet, setChartDataSet] = useState([]);
  const chartRef = useRef();

  let circle = new Image();
  circle.src = pointerImages.circle;
  let pentagon = new Image();
  pentagon.src = pointerImages.pentagon;
  let rectangle = new Image();
  rectangle.src = pointerImages.rectangle;
  let star = new Image();
  star.src = pointerImages.star;
  let triangle = new Image();
  triangle.src = pointerImages.triangle;

  const getPointerImage = (tCount) => {
    if (tCount === 1) {
      return circle;
    } else if (tCount === 2) {
      return rectangle;
    } else if (tCount === 3) {
      return triangle;
    } else if (tCount === 4) {
      return pentagon;
    } else {
      return star;
    }
  };

  const chart = () => {
    let graphData = [];
    const pointStyleArray = [];
    for (let i = 0; i < graphValue.length; i++) {
      /* x is set to the next number always in order to show the chart progress
      because time will always be ahead of the current.(previously it was also set same as y value) */
      graphData.push({
        x: graphValue[i].currentTime,
        y: graphValue[i].carCurrentPosition,
        count: graphValue[i].tripCount,
      });
      pointStyleArray.push(getPointerImage(graphValue[i].tripCount));
    }
    setChartDataSet(graphData.map((g) => JSON.parse(JSON.stringify(g))));
    setChartData({
      labels: ["", 5, 10, 15, 20, 25],
      type: "scatter",
      datasets: [
        {
          data: graphData,
          fill: false,
          borderWidth: 1,
          showLine: true,
          borderColor: data.borderColor,
          pointStyle: pointStyleArray,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, [graphValue]);

  const options = {
    animation: {
      duration: 0,
    },
    legend: {
      display: false,
    },
    showTooltips: true,
    scales: {
      x: {
        min: 0,
        max: 25,
        stepSize: 1,
        position: "bottom",
        ticks: {
          beginAtZero: true,
          suggestedMin: 0,
          suggestedMax: 25,
        },
        title: {
          display: true,
          text: data.XlabelString,
          font: {
            size: 14,
            family: data.fontFamily,
          },
        },
        scaleLabel: {
          display: true,
          labelString: data.XlabelString,
          fontFamily: data.fontFamily,
        },
      },
      y: {
        max: 25,
        min: -25,
        stepSize: 5,
        position: "left",
        ticks: {
          beginAtZero: true,
          suggestedMax: 25,
          suggestedMin: -25,
        },
        title: {
          display: true,
          text: data.YlabelString,
          font: {
            size: 14,
            family: data.fontFamily,
          },
        },
        scaleLabel: {
          display: true,
          labelString: data.YlabelString,
          fontFamily: data.fontFamily,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="graph-wrapper">
      <div className="trip-container">
        <h1 aria-label={data.GraphHeadingLabel}>{data.GraphHeading}</h1>
        <ul>
          <li>
            <span
              role="img"
              aria-label={data.trip1Label}
              className="circle"
            ></span>
            <span>{data.trip1}</span>
          </li>
          <li>
            <span
              role="img"
              aria-label={data.trip2Label}
              className="rectangle"
            ></span>
            <span>{data.trip2}</span>
          </li>
          <li>
            <span
              role="img"
              aria-label={data.trip3Label}
              className="triangle"
            ></span>
            <span>{data.trip3}</span>
          </li>
          <li>
            <span
              role="img"
              aria-label={data.trip4Label}
              className="pentagon"
            ></span>
            <span>{data.trip4}</span>
          </li>
          <li>
            <span
              role="img"
              aria-label={data.trip5Label}
              className="star"
            ></span>
            <span>{data.trip5}</span>
          </li>
        </ul>
      </div>
      <div className="graph-container">
        <div role="img" aria-label={data.graphLabel}>
          {chartDataSet.length ? (
            <Scatter
              data={chartData}
              options={options}
              width={457}
              height={320}
            ></Scatter>
          ) : null}
        </div>
        <div className="graph-details-container">
          {chartDataSet.map((d) => {
            const { x, y, count } = d;
            return (
              <p key={x + 1} className="sr-only">
                {chartDataSetText
                  .replace("-1-", count)
                  .replace("-2-", x)
                  .replace("-3-", y)}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LineGraph;
