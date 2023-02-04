import React from "react";

import "./style.scss";

const NonInteractive = (props) => {
  const { question, questions } = props;

  return (
    <div className="left-view">
      <img className="sr-only sr-image" alt={question.altimgText} />
      {questions.map((q) => (
        <div
          key={`image${q.id}`}
          className={`image ${q.id} ${q.id == question.id ? "show" : ""}`}
        ></div>
      ))}
    </div>
  );
};

export default NonInteractive;
