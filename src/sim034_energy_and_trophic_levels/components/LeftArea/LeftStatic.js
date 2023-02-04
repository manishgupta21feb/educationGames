import React from "react";
import "./style.scss";

const LeftStatic = (props) => {
  const { question, selectedQuestion, correctAttempt, imageAlt } = props;
  return (
    <div className="left-static">
      <div role="img" className="left-static-bg-image" aria-label={imageAlt}>
        {question.map((q) => {
          return (
            <div
              key={q.id}
              aria-hidden={true}
              className={correctAttempt ? q.imageClass : ""}
              style={{ opacity: q.id == selectedQuestion ? "1" : "0" }}
            ></div>
          );
        })}
      </div>
      <p aria-hidden={true} className="info-text text">
        {props.text}
      </p>
    </div>
  );
};

export default LeftStatic;
