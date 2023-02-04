import React from "react";
import "./_arrow.scss";

export default (props) => {
  const { classes, altText } = props;
  return (
    <div className={`arrow1 ${classes ? classes : ""}`}>
      <div className="arrow-container">
        <img className="sr-only sr-image" aria-hidden />
        <div className="arrow"></div>
      </div>
    </div>
  );
};
