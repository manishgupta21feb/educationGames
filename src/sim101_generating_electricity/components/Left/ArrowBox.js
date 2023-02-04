import React from "react";

export default (props) => {
  const { arrows } = props;

  return (
    <div className="arrows-container">
      {arrows.map((arrow, index) => {
        return (
          <div className="arrow-box" key={arrow.id}>
            <p>{arrow.name}</p>
            <div className={`arrow ${arrow.id}`}>
              <img className="sr-only sr-image" alt={arrow.label}></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};
