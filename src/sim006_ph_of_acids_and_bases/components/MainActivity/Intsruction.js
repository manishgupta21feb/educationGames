import React from "react";

const Instructor = (props) => {
  const { instructionText } = props;
  return (
    <div
      role="heading"
      aria-level="1"
      className="instructor"
      aria-label={instructionText}
    >
      <p className="heading" aria-hidden="true">
        {instructionText}
      </p>
    </div>
  );
};

export default Instructor;
