import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import * as _ from "lodash";
import "./style.scss";

const LineGraph = (props) => {
  const {
    dataItem,
    graphYaxisHeading,
    graphXaxisHeading,
    graphHeading,
    graphLabel,
    animationEnd,
    graphLegend,
  } = props;
  const ref = useRef(null);
  const data = useRef(_.cloneDeep(dataItem));
  let delayed;
  const intervalRef = useRef(null);
  const options = {
    devicePixelRatio: 3,
    scales: {
      y: {
        min: 0,
        max: 12000,
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
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      for (let key in data.current.datasets) {
        const dataset = data.current.datasets[key];
        const index = dataset.data.length;

        dataset.data.push(dataset.requiredData[index]);
      }
      if (
        data.current.datasets[0].requiredData.length ==
        data.current.datasets[0].data.length
      ) {
        animationEnd();
        clearInterval(intervalRef.current);
      }
      ref.current.update();
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <>
      <p className="graphHeading" >{graphHeading}</p>
      {graphLegend.map((legend,index) => {
      console.log(legend.alt)
       return <div  key = {index} className={`labelsArea ${legend.id}`}>
         <div   className={`shapes${legend.id}`}/>
         <p className="sr-only">{legend.alt}</p>
         <p aria-hidden="true" className={`labels${legend.id}`}>{legend.label}</p>
         </div>
      })}
      <p className="graphYaxisHeading" >{graphYaxisHeading}</p>
      <p className="graphXaxisHeading" >{graphXaxisHeading}</p>
      <div role="img" aria-label={graphLabel} className="graph">
        <Line ref={ref} data={data.current} options={options} />
      </div>
    </>
  );
};

export default LineGraph;
