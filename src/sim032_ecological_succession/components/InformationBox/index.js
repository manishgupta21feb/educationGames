import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import Button from "../../../app/components/Button";
import "./style.scss";

const options = {
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

export default (props) => {
  const [data, setData] = useState({ datasets: [] });
  const {
    stopData,
    visibility,
    onClose,
    patterns,
    isPopupActive,
    infoBoxTitle,
    closeLabel,
  } = props;

  useEffect(() => {
    if (stopData) {
      const patterns2 = [];
      const images = [];
      for (let i in stopData.graphLabel) {
        const patternClass = stopData.graphLabel[i].class;
        patterns2.push(patterns[patternClass].pattern);
        images.push(patternClass);
      }
      const data = {
        type: "pie",
        maintainAspectRatio: true,
        labels: stopData.graphLabel.map((val, i) => val.text),
        datasets: [
          {
            borderWidth: 0,
            data: stopData.graphData,
            backgroundColor: patterns2,
          },
        ],
      };
      setData(data);
    }
  }, [stopData]);

  return stopData && visibility ? (
    <div
      className={`wrapper-1 ${visibility && "show"}`}
      role="region"
      aria-labelledby="dialogheading"
      aria-hidden={!visibility}
    >
      <div className="close-btn">
        <Button
          text={""}
          label={closeLabel}
          onClick={() => onClose()}
          isPopupActive={isPopupActive}
          ariaHidden={!visibility || isPopupActive}
          classes={`toast-button positive icon-only`}
        />
      </div>
      <p
        className="content"
        id="dialogheading"
        dangerouslySetInnerHTML={{ __html: stopData.infoText }}
      ></p>
      <div className="graph-container">
        <div aria-hidden={true} className="graph">
          <Pie
            width={64}
            data={data}
            height={64}
            redraw={true}
            options={options}
          />
        </div>
        <div className="label-container">
          <p className="title">{infoBoxTitle}</p>
          {stopData.graphLabel.length === 1 ? (
            <div className="labels">
              {stopData.graphLabel.map((label, index) => {
                return (
                  <div key={index} className="label">
                    <div className={`label-box ${label.class}`}>
                      <img className="sr-only sr-image" alt={label.altText} />
                    </div>
                    <p>{label.text}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div role="list" className="labels">
              {stopData.graphLabel.map((label, index) => {
                return (
                  <div key={index} role="listitem" className="label">
                    <div className={`label-box ${label.class}`}>
                      <img className="sr-only sr-image" alt={label.altText} />
                    </div>
                    <p>{label.text}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  ) : null;
};
