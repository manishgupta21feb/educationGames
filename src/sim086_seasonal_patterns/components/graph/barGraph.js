import React, { useRef, useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { getAriaLabel, getSubAriaLabel } from "../../helper";

const barGraph = (props) => {
  let {
    month,
    globalData,
    seasonLabels,
    Calgary,
    Houston,
    SanGabriel,
    arrayIndex,
    patterns,
    selectedTab,
  } = props;

  let p1 = new Image();
  p1.src = patterns[0];
  let p2 = new Image();
  p2.src = patterns[0];
  let p3 = new Image();
  p3.src = patterns[0];

  function createDiagonalPattern(type) {
    //pattern1
    if (type == 1) {
      let shape = document.createElement("canvas");
      shape.width = 10;
      shape.height = 10;
      let c = shape.getContext("2d");
      c.strokeStyle = "#BEBEC5";
      c.fillStyle = globalData.barChartColor[0];

      c.fillRect(0, 0, shape.width, shape.height);
      c.beginPath();
      c.moveTo(3, 0);
      c.lineTo(3, 300);
      c.stroke();

      c.beginPath();
      c.moveTo(6, 0);
      c.lineTo(6, 300);
      c.stroke();

      c.beginPath();
      c.moveTo(9, 0);
      c.lineTo(9, 300);
      c.stroke();

      c.beginPath();
      c.moveTo(12, 0);
      c.lineTo(12, 300);
      c.stroke();

      c.beginPath();
      c.moveTo(15, 0);
      c.lineTo(15, 300);
      c.stroke();

      c.beginPath();
      c.moveTo(18, 0);
      c.lineTo(18, 300);
      c.stroke();

      return c.createPattern(shape, "repeat");
    } else if (type == 2) {
      let shape = document.createElement("canvas");
      shape.width = 10;
      shape.height = 10;
      let c = shape.getContext("2d");
      c.strokeStyle = "#BEBEC5";
      c.fillStyle = globalData.barChartColor[1];
      c.fillRect(0, 0, shape.width, shape.height);
      c.beginPath();
      c.moveTo(0, 10);
      c.lineTo(15, 10);
      c.stroke();
      return c.createPattern(shape, "repeat");
    } else {
      let shape = document.createElement("canvas");
      shape.width = 10;
      shape.height = 10;
      let c = shape.getContext("2d");
      c.strokeStyle = "#BEBEC5";
      c.fillStyle = globalData.barChartColor[2];

      c.fillRect(0, 0, shape.width, shape.height);
      c.beginPath();
      c.moveTo(2, 0);
      c.lineTo(10, 8);
      c.stroke();
      c.beginPath();
      c.moveTo(0, 8);
      c.lineTo(2, 10);
      c.stroke();
      return c.createPattern(shape, "repeat");
    }
  }

  const data = {
    labels: month,
    datasets: [
      {
        label: globalData.location[0].name,
        data: Calgary,
        backgroundColor: createDiagonalPattern(1),
        stack: globalData.location[0].name,
        borderColor: "white",
        borderWidth: 2,
        barThickness: 18,
        borderRadius: 5,
      },
      {
        label: globalData.location[1].name,
        data: Houston,
        backgroundColor: createDiagonalPattern(2),
        stack: globalData.location[1].name,
        borderColor: "white",
        borderWidth: 2,
        barThickness: 18,
        borderRadius: 5,
      },
      {
        label: globalData.location[2].name,
        data: SanGabriel,
        backgroundColor: createDiagonalPattern(3),
        stack: globalData.location[2].name,
        borderColor: "white",
        borderWidth: 2,
        barThickness: 18,
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: false,
    plugins: {
      legend: {
        display: false,
        labels: {
          font: {
            color: "#000",
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#000",
          font: {
            family: "TisaPro",
          },
        },
      },
      y: {
        ticks: {
          color: "#000",
          family: "TisaPro",
          min: 0,
          max: 20,
          stepSize: 5,
          callback: function (value, index, values) {
            if (Math.floor(value) === value) {
              return value;
            }
          },
        },
      },
    },
  };

  return (
    <>
      <h3
        className={`graph-heading focus-heading-` + arrayIndex}
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

      <Bar
        data={data}
        options={options}
        aria-label={getAriaLabel(seasonLabels, arrayIndex)}
        height={150}
        width={290}
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
          month[2],
          Calgary[2],
          Houston[2],
          SanGabriel[2]
        )}
      </p>
    </>
  );
};

export default barGraph;
