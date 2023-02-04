import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import circleIcon from '../../assets/images/circle-icon.png';
import pentagonIcon from '../../assets/images/pentagon-icon.png';
import rectangleIcon from '../../assets/images/rectangle-icon.png';
import triangleIcon from '../../assets/images/triangle-icon.png';

const options = {
  animation: {
    duration: 0
  },
  plugins: {
    tooltip: {
      enabled: false
    },
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      grid: {
        color: '#d3d2d2'
      },
      min: 50,
      max: 85,
      stepSize: 5,
      ticks: {
        font: {
          size: 11,
          color: '#000',
          opacity: 1,
        },
      },
    },
    x: {
      grid: {
        color: '#d3d2d2'
      },
      ticks: {
        font: {
          size: 11,
          color: '#000',
          opacity: 1
        },
        stepSize: 5,
      },
    }
  },
}

const TemperatureGraph = (props) => {

  const [initialGraphData, setInitialGraphData] = useState([]);

  const [graphValue, setGraphValue] = useState([]);

  const {
    graphData,
    timer,
    isDropped,
    isNext,
    resetBtnState,
    graphLabels,
    selectedGlass
  } = props;

  useEffect(() => {
    if (initialGraphData) {
      if (timer == 1 || timer % 3 == 0) {
        var val = initialGraphData?.shift();
        if (val != undefined) {
          setGraphValue([...graphValue, val]);
        }
      }
    }
  }, [isDropped, timer]);

  useEffect(() => {
    graphData && setInitialGraphData([...graphData]);
  }, [isDropped]);

  useEffect(() => {
    setGraphValue([]);
    setInitialGraphData([]);
  }, [isNext]);

  useEffect(() => {
    if (resetBtnState) {
      setInitialGraphData([]);
    }
  }, [resetBtnState]);

  let copper = new Image();
  copper.src = circleIcon;
  let woodChips = new Image();
  woodChips.src = pentagonIcon;
  let feathers = new Image();
  feathers.src = rectangleIcon;
  let bubbles = new Image();
  bubbles.src = triangleIcon; 
  
  const getPointerImage = () => {
    const { id } = selectedGlass;
    if(id == 'copper') {
      return copper
    } else if(id == 'wood_chips') {
      return woodChips
    } else if(id == 'feathers') {
      return feathers
    } else {
      return bubbles
    }
  };

  return (
    <>
      <Line data={{
        labels: graphLabels,
        datasets: [
          {
            fill: false,
            label: false,
            borderWidth: 0.9,
            borderColor: "#000",
            data: isNext ? [] : graphValue,
            pointStyle: getPointerImage()
          },
        ],
      }}
        options={options}
        aria-hidden="true"
      />
    </>
  )
}

export default TemperatureGraph;