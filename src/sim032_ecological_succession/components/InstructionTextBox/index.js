import React from "react";
import "./style.scss";

export default (props) => {
  const { instructionText } = props;
  return (
    <div
      role="heading"
      aria-level="1"
      className="instructor"
      aria-label={instructionText}
    >
      <p className="heading" aria-hidden={true}>
        {instructionText}
      </p>
    </div>
  );
};
