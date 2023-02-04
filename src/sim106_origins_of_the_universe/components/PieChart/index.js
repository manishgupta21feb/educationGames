import React from "react";
import { Pie } from "react-chartjs-2";
import { useState, useEffect } from "react";
import "./style.scss";

const options = {
  responsive: false,
  animation: {
    duration: 0,
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

const optionsTwo = {
  rotation: -38.5 * Math.PI - (3800 / 180) * Math.PI,
  responsive: false,
  animation: {
    duration: 0,
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

const pieChart = (props) => {
  const [data, setData] = useState({ datasets: [] });
  const [dataTwo, setDataTwo] = useState({ datasets: [] });
  const {
    pieChartData,
    selected,
    graphColor,
    pieChartDataTwo,
    currentSpace,
    earlySpace,
    currentTab,
  } = props;

  function createDiagonalPattern(type) {
    if (type == 1) {
      let shape = document.createElement("canvas");
      shape.width = 10;
      shape.height = 10;
      let c = shape.getContext("2d");
      c.strokeStyle = "#BEBEC5";
      c.fillStyle = graphColor[0];

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
      c.strokeStyle = "#FF0000";
      c.fillStyle = graphColor[1];
      c.fillRect(0, 0, shape.width, shape.height);
      c.beginPath();
      c.moveTo(0, 10);
      c.lineTo(15, 10);
      c.stroke();
      return c.createPattern(shape, "repeat");
    } else if (type == 3) {
      let shape = document.createElement("canvas");
      shape.width = 10;
      shape.height = 10;
      let c = shape.getContext("2d");
      c.strokeStyle = "#FFFF00";
      c.fillStyle = graphColor[3];

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
    } else {
      let shape = document.createElement("canvas");
      shape.width = 10;
      shape.height = 10;
      let c = shape.getContext("2d");
      c.strokeStyle = "#BEBEC5";
      c.fillStyle = graphColor[3];
      c.fillRect(0, 0, shape.width, shape.height);
      c.beginPath();
      c.moveTo(0, 10);
      c.lineTo(15, 10);
      c.stroke();
      return c.createPattern(shape, "repeat");
    }
  }

  const setColor = () => {
    if (selected == 0) {
      let color = [createDiagonalPattern(1), createDiagonalPattern(5)];
      return color;
    } else if (selected == 1) {
      let color = [createDiagonalPattern(2), createDiagonalPattern(5)];
      return color;
    } else if (selected == 2) {
      let color = [createDiagonalPattern(3), createDiagonalPattern(5)];
      return color;
    } else if (selected == 3) {
      let color = [createDiagonalPattern(4), createDiagonalPattern(5)];
      return color;
    } else {
      let color = [
        createDiagonalPattern(1),
        createDiagonalPattern(2),
        createDiagonalPattern(3),
        createDiagonalPattern(4),
      ];
      return color;
    }
  };

  const setColorTwo = () => {
    if (selected == 0) {
      let color = [
        createDiagonalPattern(1),
        createDiagonalPattern(3),
        createDiagonalPattern(2),
      ];
      return color;
    } else if (selected == 1) {
      let color = [
        createDiagonalPattern(2),
        createDiagonalPattern(2),
        createDiagonalPattern(1),
      ];
      return color;
    } else if (selected == 2) {
      let color = [
        createDiagonalPattern(3),
        createDiagonalPattern(2),
        createDiagonalPattern(2),
      ];
      return color;
    } else if (selected == 3) {
      let color = [
        createDiagonalPattern(4),
        createDiagonalPattern(2),
        createDiagonalPattern(3),
      ];
      return color;
    } else {
      let color = [
        createDiagonalPattern(1),
        createDiagonalPattern(2),
        createDiagonalPattern(3),
        createDiagonalPattern(4),
      ];
      return color;
    }
  };

  let color = [createDiagonalPattern(1), createDiagonalPattern(2)];

  useEffect(() => {
    const data = {
      type: "pie",
      maintainAspectRatio: true,
      labels: pieChartData.graphLabel.map((val, i) => val.text),
      datasets: [
        {
          borderWidth: 0,
          data: pieChartData.graphData,
          backgroundColor: setColor(),
        },
      ],
    };

    const dataTwo = {
      type: "pie",
      maintainAspectRatio: true,
      labels: pieChartDataTwo.graphLabel.map((val, i) => val.text),
      datasets: [
        {
          borderWidth: 0,
          data: pieChartDataTwo.graphData,
          backgroundColor: setColorTwo(),
        },
      ],
    };

    setData(data);
    setDataTwo(dataTwo);
  }, []);

  return (
    <div className="mainContaint">
      <div className="containtFirst">
        <div className="graph-container">
          <div className="graph">
            <img className="sr-only sr-image" alt={currentTab.graphAlt}></img>
            <Pie
              aria-hidden
              width={114}
              data={data}
              height={114}
              redraw={true}
              options={options}
            />
          </div>
          <div className="label-container">
            <div role="list" className="labels">
              {pieChartData.graphLabel.map((label, index) => {
                return (
                  <div key={index} role="listitem" className="label">
                    <div
                      role="img"
                      aria-label={label.altText}
                      className={`label-box ${label.class}`}
                    ></div>
                    <p className="patternLabel">{label.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <p className="earlySpace">{earlySpace}</p>
      </div>

      <div className="containtSecond">
        <div className="graph-container">
          <div className="graph">
            <img
              className="sr-only sr-image"
              alt={currentTab.graphAltTwo}
            ></img>
            <Pie
              aria-hidden
              width={114}
              data={dataTwo}
              height={114}
              redraw={true}
              options={options}
            />
          </div>
          <div className="label-container">
            <div role="list" className="labels">
              {pieChartDataTwo.graphLabel.map((label, index) => {
                return (
                  <div key={index} role="listitem" className="label">
                    <div
                      role="img"
                      aria-label={label.altText}
                      className={`label-box ${label.class}`}
                    ></div>
                    <p className="patternLabel">{label.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <p className="currentSpace">{currentSpace}</p>
      </div>
    </div>
  );
};

export default pieChart;
