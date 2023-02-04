import React from "react";
import "./style.scss";

const LeftStatic = (props) => {
  const { questions, selectedQuestion, count } = props;

  return (
    <div className="left-static">
      {count > 3 ? (
        <div
          key={questions[count - 1].id}
          className={questions[count - 1].imageClass}
          role="img"
          aria-label={questions[count - 1].imageAlt}
        ></div>
      ) : null}
    </div>
  );
};

export default LeftStatic;
