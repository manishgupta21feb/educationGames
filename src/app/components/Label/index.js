import React from "react";
import "./style.scss";

const label = (props) => {
  const { type, label, text, classes, ariahide } = props;
  return (
    <p aria-hidden={ariahide} className={`label ${type} ${classes}`.trim()}>
      <span aria-hidden={label}>{text}</span>
      {label ? <span className="sr-only">{label}</span> : null}
    </p>
  );
};

export default label;
