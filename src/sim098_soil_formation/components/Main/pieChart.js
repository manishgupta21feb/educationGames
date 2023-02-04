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

const pieChart = (props) => {
  const [data, setData] = useState({ datasets: [] });
  const { pieChartData, selected, graphColor, currentTab } = props;

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
      c.strokeStyle = "#BEBEC5";
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
      c.strokeStyle = "#BEBEC5";
      c.fillStyle = graphColor[2];

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
    } else if (type == 4) {
      let shape = document.createElement("canvas");
      shape.width = 10;
      shape.height = 10;
      let c = shape.getContext("2d");
      c.strokeStyle = "#BEBEC5";
      c.fillStyle = graphColor[3];

      c.fillRect(0, 0, shape.width, shape.height);
      c.beginPath();
      c.moveTo(4, 0);
      c.lineTo(15, 5);
      c.stroke();
      c.beginPath();
      c.moveTo(0, 5);
      c.lineTo(4, 15);
      c.stroke();

      return c.createPattern(shape, "repeat");
    } else {
      let shape = document.createElement("canvas");
      shape.width = 10;
      shape.height = 10;
      let c = shape.getContext("2d");
      c.strokeStyle = "#BEBEC5";
      c.fillStyle = graphColor[4];

      c.fillRect(0, 0, shape.width, shape.height);

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
    setData(data);
  }, []);

  return (
    <div className="graph-container">
      <div className="graph" role="img" aria-label={currentTab.graphAlt}>
        <Pie
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
  );
};

export default pieChart;
