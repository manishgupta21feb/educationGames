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
            className={`bg-image ${q.imageClass}`}
            aria-hidden={q.id != selectedQuestion || null}
            style={{ opacity: q.id == selectedQuestion ? 1 : 0 }}
          >
            <span aria-hidden={true}>{q.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default LeftStatic;
