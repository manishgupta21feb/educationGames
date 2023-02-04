import React from "react";
import "./style.scss";

const TopStatic = (props) => {
  const { question, mcqQuestion, jumpToMCQScreenState } = props;
  return (
    <>
      {jumpToMCQScreenState ? (
        <div className="top-static">
          {question.map((q) => {
            return (
              <div
                key={q.id}
                role="img"
                aria-label={q.imageAlt}
                className={q.imageClass}
                aria-hidden={q.id != mcqQuestion.id ? "true" : null}
                style={{ opacity: q.id == mcqQuestion.id ? "1" : "0" }}
              ></div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default TopStatic;
