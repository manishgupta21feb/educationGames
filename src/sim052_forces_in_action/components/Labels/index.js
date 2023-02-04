import React from "react";
import "./main.scss";

const Label = ({ labels, classes, isHidden, headingLevel }) => {
  return (
    <div
      role="heading"
      className="heading"
      aria-level={headingLevel}
      aria-label={labels}
      className={classes}
      aria-hidden={isHidden}
    >
      {labels}
    </div>
  );
};
export default Label;

Label.defaultProps = {
  content: "",
};
