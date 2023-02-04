import React from 'react';
import { Bar } from 'react-chartjs-2';

const options = {
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
        color: '#adadad'
      },
      ticks: {
        font: {
          size: 10,
          color: "#000",
          opacity: 1,
          beginAtZero: true
        },
      },
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        font: {
          size: 10,
          color: "#000",
          opacity: 1,
        },
      },
    }
  },
}

const FishChart = (props) => {

  const { 
    chartData,
    chartAriaLabel,
    chartLabels 
  } = props;

  return (
    <>
      <Bar
        data={{
          labels: chartLabels,
          datasets: [{
            data: chartData,
            backgroundColor: [
              '#0056B9',
              '#D84900',
              '#35374E'
            ],
            hoverBackgroundColor: [
              '#0056B9',
              '#D84900',
              '#35374E'
            ],
            borderWidth: 0,
            barPercentage: 0.4,
            fill: "start"
          }]
        }}
        options={options}
        height={120}
        width={200}
        aria-label={chartAriaLabel}
      />
    </>
  )
}

export default FishChart;