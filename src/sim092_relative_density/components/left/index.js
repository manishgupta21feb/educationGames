import React from "react";

import NonInteractive from "../../containers/LeftNonInteractiveContainer";

import FluidButton from "./fluidButton";

import "./style.scss";

const Left = (props) => {
  const { isMCQ, id, altimgText, isReset } = props;

  return (
    <>
      {isMCQ ? (
        <NonInteractive />
      ) : (
        <>
          <div className="left-view">
            <img className="sr-only sr-image" alt={altimgText} />
            <div className={`image show ${id}`}></div>
            {!isReset ? <FluidButton {...props} /> : null}
            <div className="tube-scale"></div>
          </div>
        </>
      )}
    </>
  );
};

export default Left;
