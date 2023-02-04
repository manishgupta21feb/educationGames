import React from "react";
import "./style.scss";

export default (props) => {
  const { index, color } = props;
  const txt = `${color.altText}, ${color.name}`;
  return (
    <div role="img" aria-label={txt} className="color-container">
      <span aria-hidden={true}>{color.name}</span>
      <div className={`color-box ${color.class}`}></div>
    </div>
  );
};
