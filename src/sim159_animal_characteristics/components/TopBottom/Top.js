import React from "react";

const Top = (props) => {
  const { question, currentScreen } = props;
  const check = question && question.id;
  return (
    <div className="top-wrapper">
      {check ? (
        <div className={`screen${currentScreen} ${question.type}`}>
          <img className="sr-only sr-image" alt={question.imageAlt} />
          {question.frames?.map((frame, i) => (
            <div key={i}>
              <div key={`frame${question.id}${i}`} className={`frame ${frame}`}>
                <div></div>
              </div>
              <div className={`connector ${frame}`}></div>
              <div className={`oval ${frame}`}></div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Top;
