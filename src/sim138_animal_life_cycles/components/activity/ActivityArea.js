import React, { useEffect } from "react";
import "../../stylesheets/components/_globalNuclear.scss";

const ActivityArea = (props) => {
  const {
    data,
    question,
    returnAnswer,
    answerSubmitted,
    onStartActivity,
    headingOne,
  } = props;
  useEffect(() => {
    onStartActivity();
  }, []);
  useEffect(() => {}, [question]);
  const questionId = question && question.id ? question.id : "";
  const index = question && question.serialNo ? question.serialNo : "";

  const questiondata = data.nuclearData.filter(
    (q, i) => q.serialNo == index
  )[0];

  return (
    <>
      <div className="sr-only" aria-level="1" role="heading">
        <p>{headingOne}</p>
      </div>
      <div
        role="img"
        aria-label={returnAnswer ? question.anslabel : question.queslabel}
        className={`background-container`}
      >
        <div>
          <div>
            {data.imageArray.map((item, i) => {
              return (
                <div
                  key={item.id}
                  aria-hidden="true"
                  className={`equation-image ${item.image}`}
                  style={{
                    opacity: item.image === questiondata.id ? 1 : 0,
                  }}
                >
                  <span></span>
                </div>
              );
            })}
          </div>
          <div className="question-label">
            <p>{questiondata.label}</p>
          </div>
        </div>
        {/* {answerSubmitted ? (
          returnAnswer ? (
            <div
              aria-hidden="true"
              className={`mol-formula ${question.answer}`}
            >
            </div>
          ) : null
        ) : null} */}
      </div>
    </>
  );
};

export default ActivityArea;
