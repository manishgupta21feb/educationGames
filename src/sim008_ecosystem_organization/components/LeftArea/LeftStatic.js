import React from "react";
import "./style.scss";

const LeftStatic = (props) => {
  const { question, selectedQuestion } = props;
  return (
    <div className="left-static">
      {question.map((q) => {
        return (
          <div
            role="img"
            key={q.id}
            aria-label={q.imageAlt}
            className={q.imageClass}
            aria-hidden={q.id != selectedQuestion ? "true" : null}
            style={{ opacity: q.id == selectedQuestion ? "1" : "0" }}
          ></div>
        );
      })}
    </div>
  );
};

export default LeftStatic;
