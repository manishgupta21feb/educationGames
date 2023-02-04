import React from "react";
import "../style.scss";

const Equation = (props) => {
  const { text, showWaveImage, classes } = props;
  return (
    <div className="spectrum-wrapper" aria-hidden="true">
      {showWaveImage ? (
        <>
          <div className={`spectrum-image ${classes}`}></div>
          <div className="textContainer">
            <span className="wavelength-text">{text}</span>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Equation;
