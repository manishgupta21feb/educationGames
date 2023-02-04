import React from "react";

export default (props) => {
  const { instruments } = props;
  return (
    <div className="lines">
      {Object.keys(instruments).map((instrument) => {
        return (
          <div key={instrument} className={`line ${instrument}`}>
            <div className="bullet"></div>
            <div className="dottedline"></div>
          </div>
        );
      })}
    </div>
  );
};
