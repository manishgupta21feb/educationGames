import React from "react";

const ElementAnimations = (props) => {
  const { animatedElements } = props;
  return (
    <div className="element-animation">
      {animatedElements.map((a) => (
        <div key={a.id} className={a.id}>
          <img className="sr-only sr-image" alt={a.label} />
          <span aria-hidden>{a.text}</span>
        </div>
      ))}
    </div>
  );
};

export default ElementAnimations;
