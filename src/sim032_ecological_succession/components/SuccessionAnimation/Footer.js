import React from "react";

export default (props) => {
  const { finalStages } = props;

  return (
    <div className="animation-footer">
      {finalStages.map((element, index) => {
        return (
          <div key={index} className={`arrow${index + 1}`}>
            <div
              className="arrow-container"
            >
              <img className="sr-only sr-image" alt={element.altText} />
              <div className="arrow"></div>
            </div>
            <div className="text">{element.name}</div>
          </div>
        );
      })}
    </div>
  );
};
