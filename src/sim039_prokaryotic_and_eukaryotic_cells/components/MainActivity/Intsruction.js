import React from "react";
import "./style.scss";

const Instructor = (props) => {
  const { instructionText } = props;
  return (
    // <div
    //   role="heading"
    //   aria-level="1"
    //   className="instructor"
    //   aria-label={instructionText}
    // >
    //   <p className="heading" aria-hidden="true">
    //     {instructionText}
    //   </p>
    // </div>
    <div className={"instructor"}>
      <h2 className={"heading"}>{instructionText}</h2>
    </div>
  );
};

export default Instructor;
