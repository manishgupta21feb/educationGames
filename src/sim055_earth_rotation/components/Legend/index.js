import React from "react";
import data from "../../data";
import "./legend.scss";

const Legend = () => {
  const legends = data.legends;

  const legend = legends.map((item) => {
    return (
      <div key={item.title} className="legend__item">
        <div
          role="img"
          aria-label={`${item.label} ${item.title}`}
          style={{ backgroundImage: `url(${item.icon})` }}
          className="legend__icon"
        ></div>
        <div className="legend__title" aria-hidden>
          {item.title}
        </div>
      </div>
    );
  });
  return <div className="legend">{legend}</div>;
};

export default Legend;
