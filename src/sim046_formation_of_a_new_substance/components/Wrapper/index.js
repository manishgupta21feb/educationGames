import React from "react";
import "./wrapper.scss";

const Wrapper = (props) => {
  return <div className={`wrapper ${props.className}`}>{props.children}</div>;
};

export default Wrapper;
