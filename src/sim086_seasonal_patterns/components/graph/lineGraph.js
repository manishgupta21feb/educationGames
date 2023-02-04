import React from "react";
import { Line } from "react-chartjs-2";
import { getAriaLabel, getSubAriaLabel } from "../../helper";

const lineGraph = (props) => {
  let {
    seasonLabels,
    globalData,
    month,
    Calgary,
    Houston,
    SanGabriel,
    arrayIndex,
    legendArea,
    icon,
    lineChartColor,
  } = props;

  let circle = new Image();
  circle.src = icon[0];
  let rectangle = new Image();
  rectangle.src = icon[1];
  let star = new Image();
  star.src = icon[2];

  const getPointerImage = (tCount) => {
    if (tCount === 1) {
      return circle;
    } else if (tCount === 2) {
      return rectangle;
    } else {
      return star;
    }
  };

  const data = {
    labels: month,
    datasets: [
      {
        label: globalData.location[0].name,
        data: Calgary,
        borderColor: lineChartColor,
        pointStyle: getPointerImage(1),
        borderWidth: 1,
      },
      {
        label: globalData.location[1].name,
        data: Houston,
        borderColor: lineChartColor,
        pointStyle: getPointerImage(2),
        borderWidth: 1,
      },
      {
        label: globalData.location[2].name,
        data: SanGabriel,
        borderColor: lineChartColor,
        borderWidth: 1,
        pointStyle: getPointerImage(0),
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#000",
          family: "TisaPro",
          min: 0,
          stepSize: 25,
          callback: function (value, index, values) {
            if (Math.floor(value) === value) {
              return value;
            }
          },
        },
      },
      x: {
        ticks: {
          color: "#000",
          font: {
            family: "TisaPro",
          },
        },
        offset: true,
        grid: {
          display: false,
        },
      },
    },
    tension: 0.3,
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: "nearest",
        intersect: false,
      },
    },
  };
  return (
    <div className="graph-area">
      <h3
        className="graph-heading"
        aria-label={globalData.graphLabels[arrayIndex].ariaLabel_topHeading}
        dangerouslySetInnerHTML={{
          __html: globalData.graphLabels[arrayIndex].topHeading,
        }}
      ></h3>

      <p className="y-label">
        <span className="sr-only sr-image" aria-hidden="true">
          {globalData.graphLabels[arrayIndex].leftHeading}
        </span>
        {globalData.graphLabels[arrayIndex].leftHeading}
      </p>
      <Line
        data={data}
        options={options}
        aria-label={getAriaLabel(seasonLabels, arrayIndex)}
      />

      <p className="label1 sr-only">
        {getSubAriaLabel(
          globalData.graphLabels[arrayIndex].topHeading,
          seasonLabels,
          arrayIndex,
          month[0],
          Calgary[0],
          Houston[0],
          SanGabriel[0]
        )}
      </p>
      <p className="label2 sr-only">
        {getSubAriaLabel(
          globalData.graphLabels[arrayIndex].topHeading,
          seasonLabels,
          arrayIndex,
          month[1],
          Calgary[1],
          Houston[1],
          SanGabriel[1]
        )}
      </p>
      <p className="label3 sr-only">
        {getSubAriaLabel(
          globalData.graphLabels[arrayIndex].topHeading,
          seasonLabels,
          arrayIndex,
          month[0],
          Calgary[0],
          Houston[0],
          SanGabriel[0]
        )}
      </p>
    </div>
  );
};

export default lineGraph;
