import React from "react";
import "./style.scss";

const Equation = (props) => {
  const { atomType, atomicSymbol, showAtomImage, classes } = props;

  return (
    <div className="chem-equation-wrapper" aria-hidden="true">
      {showAtomImage ? <div className={`atom-image ${classes}`}></div> : null}

      <div className={`chem-equation ${atomType ? atomType : ""}`}>
        <div>
          <span className="symbol-style">{atomicSymbol}</span>
        </div>
      </div>
    </div>
  );
};

Equation.defaultProps = {
  atom: {
    protons: "4",
    atomicNumber: "2",
    atomicSymbol: "He",
  },
};

export default Equation;
