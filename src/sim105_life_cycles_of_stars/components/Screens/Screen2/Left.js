import React from "react";

const Left = (props) => {
  const { starLifeCyclesCollageImageAlt, screen2labels } = props;
  return (
    <div className="left-wrapper">
      <div className="star-life-cycles-collage">
        <img className="sr-only sr-image"  aria-label = {starLifeCyclesCollageImageAlt} />
        {screen2labels.map((q, index) => (
          <p aria-hidden="true" className={`opensans-label ${q.id}`} key={index}>
            {q.label}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Left;
