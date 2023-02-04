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

const data = {
  labels: ['Caught', 'Consumed', 'Discarded'],
  datasets: [{
    data: [180, 157, 23],
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
}

const OverfishingChart = (props) => {

  const { chartAriaLabel } = props;

  return (
    <>
      <Bar
        data={data}
        options={options}
        height={195}
        width={230}
        aria-label={chartAriaLabel}
      />
    </>
  )
}

export default OverfishingChart;