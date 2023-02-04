import React from "react";
import "./labels.scss";

const Labels = (props) => {
  const { labels } = props;

  const label = labels.map((item, index) => {
    return (
      <label key={index} className="labels__label" aria-hidden="true">
        {item}
      </label>
    );
  });

  return <div className="labels">{label}</div>;
};

export default Labels;
